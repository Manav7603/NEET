import { saveQuizResult, getAllRecords } from './utils/db';

export const saveQuizHistory = async (historyItem) => {
  try {
    // Save to localStorage
    const saved = localStorage.getItem('quizHistory');
    const existingHistory = saved ? JSON.parse(saved) : [];
    const newHistory = [historyItem, ...existingHistory.slice(0, 9)];
    localStorage.setItem('quizHistory', JSON.stringify(newHistory));

    // Save to IndexedDB
    await saveQuizResult(historyItem);

    return newHistory;
  } catch (error) {
    console.error('Error saving history:', error);
    return [];
  }
};

export const loadQuizHistory = async () => {
  try {
    // Load from both localStorage and IndexedDB
    const saved = localStorage.getItem('quizHistory');
    const localHistory = saved ? JSON.parse(saved) : [];
    const dbRecords = await getAllRecords();
    
    // Merge and deduplicate records
    const mergedHistory = [...localHistory];
    dbRecords.forEach(record => {
      if (!mergedHistory.find(item => item.id === record.id)) {
        mergedHistory.push(record);
      }
    });
    
    return mergedHistory.sort((a, b) => b.timestamp - a.timestamp).slice(0, 10);
  } catch (error) {
    console.error('Error loading history:', error);
    return [];
  }
};

// Add function to export CSV
export const exportCSV = async () => {
  const records = await getAllRecords();
  const csv = unparse(records);
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'quiz-history.csv';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
