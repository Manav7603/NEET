import React, { useState, useEffect } from 'react';
import { getAllRecords } from '../utils/db';

export const DataViewer = () => {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await getAllRecords();
        setRecords(data || []); // Ensure we always have an array
      } catch (error) {
        console.error('Error loading records:', error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8 bg-gray-50 rounded-lg">
        <div className="animate-pulse text-gray-600">
          Loading quiz history...
        </div>
      </div>
    );
  }

  if (!records || records.length === 0) {
    return (
      <div className="text-center p-8 bg-gray-50 rounded-lg">
        <p className="text-gray-600">No quiz records found.</p>
        <p className="text-sm text-gray-500 mt-2">
          Complete a quiz to see your history here!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4 mt-4">
      {records.map((record, index) => (
        <div 
          key={record.id || index}
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100"
        >
          <div className="flex justify-between items-center mb-4">
            <span className="font-semibold text-gray-800">
              {new Date(record.date).toLocaleDateString()}
            </span>
            <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
              Score: {record.score}
            </span>
          </div>
          
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <div className="text-gray-600">
                Sections: <span className="font-medium">{record.sections}</span>
              </div>
              <div className="text-gray-600">
                Duration: <span className="font-medium">{record.duration || 'N/A'}</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-green-600">
                Correct: <span className="font-medium">{record.correctCount}</span>
              </div>
              <div className="text-red-600">
                Wrong: <span className="font-medium">{record.incorrectCount}</span>
              </div>
              <div className="text-blue-600">
                Accuracy: <span className="font-medium">{record.accuracy}%</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
