import { useState, useEffect } from 'react';

export const saveQuizHistory = (historyItem) => {
  try {
    // Save to localStorage
    const saved = localStorage.getItem('quizHistory');
    const existingHistory = saved ? JSON.parse(saved) : [];
    const newHistory = [historyItem, ...existingHistory.slice(0, 9)];
    localStorage.setItem('quizHistory', JSON.stringify(newHistory));
    return newHistory;
  } catch (error) {
    console.error('Error saving history:', error);
    return [];
  }
};

export const loadQuizHistory = () => {
  try {
    const saved = localStorage.getItem('quizHistory');
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    console.error('Error loading history:', error);
    return [];
  }
};
