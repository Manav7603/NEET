import React, { useState, useEffect } from 'react';
import { BookOpen, Microscope, Atom, Leaf, Clock, Award, BarChart3, CheckCircle, XCircle, RefreshCw, Flag, Filter, History, Eye, Download } from 'lucide-react';
import { loadQuizHistory, saveQuizHistory } from './historyManager';
import { sections } from './data/questions';

const ConfirmModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4">
        <h3 className="text-xl font-bold mb-4">Are you ready to start the test?</h3>
        <p className="text-gray-600 mb-6">
          Make sure you have:
          <ul className="list-disc ml-5 mt-2">
            <li>A quiet environment</li>
            <li>Stable internet connection</li>
            <li>90 minutes of uninterrupted time</li>
          </ul>
        </p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Start Test
          </button>
        </div>
      </div>
    </div>
  );
};

const MCQQuizApp = () => {
  // Add dark mode state
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true'
  });
  const [currentScreen, setCurrentScreen] = useState('setup');
  const [selectedSections, setSelectedSections] = useState(() => 
    Object.keys(sections).filter(key => sections[key].questions.length > 0)
  );
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [quizDuration, setQuizDuration] = useState(90); // 90 minutes default
  const [markedForReview, setMarkedForReview] = useState([]);
  const [selectedSectionFilter, setSelectedSectionFilter] = useState('all');
  const [quizHistory, setQuizHistory] = useState([]);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const motivationalQuotes = [
    "Success is not final, failure is not fatal: it is the courage to continue that counts! 🌟",
    "Every expert was once a beginner. Keep learning and growing! 📚",
    "Knowledge is power, and you're building yours every day! 💪",
    "Great things never come from comfort zones. You're doing amazing! 🚀",
    "The only way to do great work is to love what you do. Keep exploring! ❤️",
    "Don't be afraid to give up the good to go for the great! ✨",
    "Success is the sum of small efforts repeated day in and day out! 🎯"
  ];

  const toggleSection = (sectionKey) => {
    setSelectedSections(prev => 
      prev.includes(sectionKey) 
        ? prev.filter(s => s !== sectionKey)
        : [...prev, sectionKey]
    );
  };

  // Timer effect
  useEffect(() => {
    let timer;
    if (currentScreen === 'quiz' && timeRemaining > 0) {
      timer = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            // Auto submit when timer reaches 0
            setEndTime(new Date());
            setCurrentScreen('results');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [currentScreen, timeRemaining]);

  useEffect(() => {
    const loadHistory = async () => {
      const history = await loadQuizHistory();
      setQuizHistory(history);
    };
    loadHistory();
  }, []);

  // Add dark mode effect
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const startQuiz = () => {
    setShowConfirmModal(true);
  };

  const confirmStartQuiz = () => {
    setShowConfirmModal(false);
    
    const allQuestions = selectedSections.flatMap(sectionKey => 
      sections[sectionKey].questions.map(q => ({
        ...q,
        section: sectionKey
      }))
    );
    
    setQuizQuestions(allQuestions);
    setCurrentQuestionIndex(0);
    setUserAnswers(new Array(allQuestions.length).fill(null));
    setMarkedForReview(new Array(allQuestions.length).fill(false));
    setStartTime(new Date());
    setTimeRemaining(quizDuration * 60); // Convert minutes to seconds
    setSelectedSectionFilter('all');
    setCurrentScreen('quiz');
  };

  const handleAnswer = (selectedOption) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = selectedOption;
    setUserAnswers(newAnswers);
    
    if (currentQuestionIndex < quizQuestions.length - 1) {
      // Find next unanswered question
      let nextIndex = currentQuestionIndex + 1;
      const currentSection = quizQuestions[currentQuestionIndex].section;
      
      // Check if current section is complete
      const isCurrentSectionComplete = quizQuestions
        .filter(q => q.section === currentSection)
        .every((_, idx) => newAnswers[idx] !== null);

      if (isCurrentSectionComplete) {
        // Find first unanswered question in next section
        const nextSection = selectedSections[selectedSections.indexOf(currentSection) + 1];
        if (nextSection) {
          nextIndex = quizQuestions.findIndex(q => q.section === nextSection);
          setSelectedSectionFilter(nextSection); // Update section filter
        }
      }

      setTimeout(() => {
        navigateToQuestion(nextIndex);
      }, 300);
    }
  };

  const toggleMarkForReview = () => {
    const newMarked = [...markedForReview];
    newMarked[currentQuestionIndex] = !newMarked[currentQuestionIndex];
    setMarkedForReview(newMarked);
  };

  const navigateToQuestion = (questionIndex) => {
    setCurrentQuestionIndex(questionIndex);
  };

  // Update submitQuiz function to include marks data
  const submitQuiz = () => {
    setEndTime(new Date());
    
    const results = calculateResults();
    const quizResult = {
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
      sections: selectedSections.map(key => sections[key].name),
      totalQuestions: quizQuestions.length,
      answers: userAnswers,
      questions: quizQuestions,
      markedForReview: markedForReview,
      duration: quizDuration,
      timeTaken: Math.round(((new Date()) - startTime) / 1000),
      // Add score details
      totalMarks: results.totalMarks,
      maxPossibleMarks: results.maxPossibleMarks,
      correctCount: results.correctCount,
      incorrectCount: results.incorrectCount,
      sectionWiseScore: results.sectionWiseScore
    };
    
    saveQuizHistory(quizResult);
    setQuizHistory(prev => [quizResult, ...prev.slice(0, 9)]);
    setCurrentScreen('results');
    
    // Automatically download results
    setTimeout(() => {
      downloadResults(results);
    }, 500);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const getFilteredQuestions = () => {
    if (selectedSectionFilter === 'all') return quizQuestions;
    return quizQuestions.filter(q => q.section === selectedSectionFilter);
  };

  const getFilteredQuestionIndices = () => {
    if (selectedSectionFilter === 'all') {
      return quizQuestions.map((_, index) => index);
    }
    return quizQuestions
      .map((q, index) => ({ question: q, originalIndex: index }))
      .filter(item => item.question.section === selectedSectionFilter)
      .map(item => item.originalIndex);
  };

  const viewHistory = () => {
    setCurrentScreen('history');
  };

  const loadHistoryQuiz = (historyItem) => {
    // Load a previous quiz for review
    setQuizQuestions(historyItem.questions);
    setUserAnswers(historyItem.answers);
    setMarkedForReview(historyItem.markedForReview);
    setSelectedSections(historyItem.questions.map(q => q.section).filter((v, i, a) => a.indexOf(v) === i));
    setCurrentQuestionIndex(0);
    setCurrentScreen('review');
  };

  // Add new state for detailed scoring
  const [detailedScoring, setDetailedScoring] = useState({
    totalMarks: 0,
    correctCount: 0,
    incorrectCount: 0,
    unattempted: 0,
    sectionWiseScore: {},
    accuracy: 0
  });

  // Update calculateResults function
  const calculateResults = () => {
    if (!quizQuestions.length) return null;

    const totalQuestions = quizQuestions.length;
    let correctCount = 0;
    let incorrectCount = 0;
    let totalMarks = 0;
    const maxPossibleMarks = totalQuestions * 4;
    const sectionWiseScore = {};

    // Initialize section scores
    selectedSections.forEach(section => {
      sectionWiseScore[section] = {
        name: sections[section].name,
        total: 0,
        correct: 0,
        incorrect: 0,
        unattempted: 0,
        marks: 0,
        maxMarks: 0
      };
    });

    // Calculate scores
    quizQuestions.forEach((question, index) => {
      const section = question.section;
      sectionWiseScore[section].total += 1;
      sectionWiseScore[section].maxMarks += 4;

      if (userAnswers[index] === null) {
        sectionWiseScore[section].unattempted += 1;
      } else if (userAnswers[index] === question.correct) {
        correctCount++;
        totalMarks += 4;
        sectionWiseScore[section].correct += 1;
        sectionWiseScore[section].marks += 4;
      } else {
        incorrectCount++;
        totalMarks -= 1;
        sectionWiseScore[section].incorrect += 1;
        sectionWiseScore[section].marks -= 1;
      }
    });

    const unattempted = totalQuestions - (correctCount + incorrectCount);
    const totalAttempted = correctCount + incorrectCount;
    const accuracy = totalAttempted > 0 ? Math.round((correctCount / totalAttempted) * 100) : 0;

    return {
      totalQuestions,
      correctCount,
      incorrectCount,
      unattempted,
      totalMarks,
      maxPossibleMarks,
      accuracy,
      scorePercentage: Math.round((totalMarks / maxPossibleMarks) * 100),
      marksDisplay: `${totalMarks}/${maxPossibleMarks}`,
      sectionWiseScore,
      sectionWiseAnalysis: Object.keys(sectionWiseScore).map(section => ({
        section,
        ...sectionWiseScore[section]
      })),
      timeTaken: Math.round((endTime - startTime) / 1000),
      questionsAnalysis: quizQuestions.map((q, index) => ({
        question: q.question,
        correctAnswer: q.options[q.correct],
        userAnswer: userAnswers[index] !== null ? q.options[userAnswers[index]] : 'Not attempted',
        isCorrect: userAnswers[index] === q.correct,
        marks: userAnswers[index] === null ? 0 : 
               userAnswers[index] === q.correct ? 4 : -1,
        section: sections[q.section].name
      }))
    };
  };

  // Update time duration options
  const timeOptions = [
    { value: 5, label: '5 minutes' },
    { value: 10, label: '10 minutes' },
    { value: 15, label: '15 minutes' },
    { value: 20, label: '20 minutes' },
    { value: 30, label: '30 minutes' },
    { value: 45, label: '45 minutes' },
    { value: 60, label: '1 hour' },
    { value: 90, label: '1.5 hours' },
    { value: 120, label: '2 hours' }
  ];

  const getPerformanceLevel = (percentage) => {
    if (percentage >= 90) return { level: 'Excellent', color: 'text-green-600', emoji: '🏆' };
    if (percentage >= 75) return { level: 'Good', color: 'text-blue-600', emoji: '👏' };
    if (percentage >= 60) return { level: 'Average', color: 'text-yellow-600', emoji: '👍' };
    return { level: 'Needs Improvement', color: 'text-red-600', emoji: '💪' };
  };

  const resetQuiz = () => {
    setCurrentScreen('setup');
    setSelectedSections([]);
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setQuizQuestions([]);
    setStartTime(null);
    setEndTime(null);
    setTimeRemaining(0);
    setMarkedForReview([]);
    setSelectedSectionFilter('all');
    setDetailedScoring({
      totalMarks: 0,
      correctCount: 0,
      incorrectCount: 0,
      unattempted: 0,
      sectionWiseScore: {},
      accuracy: 0
    });
  };

  if (currentScreen === 'setup') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-cyan-100 p-4">
        <ConfirmModal 
          isOpen={showConfirmModal}
          onClose={() => setShowConfirmModal(false)}
          onConfirm={confirmStartQuiz}
        />
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">NEET PREP</h1>
            <p className="text-gray-600">Select the sections you want to include in your quiz</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {Object.entries(sections).map(([key, section]) => (
              <div
                key={key}
                onClick={() => toggleSection(key)}
                className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                  selectedSections.includes(key)
                    ? `${section.color} text-white shadow-lg transform scale-105`
                    : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-md'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-lg ${selectedSections.includes(key) ? 'bg-white/20' : 'bg-gray-100'}`}>
                      <div className={selectedSections.includes(key) ? 'text-white' : 'text-gray-600'}>
                        {section.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{section.name}</h3>
                      <p className={`text-sm ${selectedSections.includes(key) ? 'text-white/80' : 'text-gray-500'}`}>
                        {section.questions.length} questions
                      </p>
                    </div>
                  </div>
                  {selectedSections.includes(key) && (
                    <CheckCircle className="w-6 h-6 text-white" />
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="flex justify-center space-x-4 mb-6">
              <button
                onClick={viewHistory}
                className="px-6 py-3 bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-lg font-semibold hover:from-gray-600 hover:to-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2"
              >
                <History className="w-5 h-5" />
                <span>View History</span>
              </button>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Quiz Duration (minutes):
              </label>
              <select
                value={quizDuration}
                onChange={(e) => setQuizDuration(Number(e.target.value))}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {timeOptions.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
            <button
              onClick={startQuiz}
              disabled={selectedSections.length === 0}
              className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                selectedSections.length > 0
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl transform hover:scale-105'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Start Quiz ({selectedSections.reduce((acc, key) => acc + sections[key].questions.length, 0)} questions • {quizDuration} min)
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (currentScreen === 'quiz') {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const answeredCount = userAnswers.filter(answer => answer !== null).length;
    const reviewCount = markedForReview.filter(marked => marked).length;
    const filteredIndices = getFilteredQuestionIndices();

    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-cyan-100 p-4">
        <div className="max-w-7xl mx-auto flex gap-6">
          {/* Left Navigation Panel */}
          <div className="w-80 bg-white rounded-xl shadow-lg p-6 h-fit sticky top-4">
            <div className="mb-6">
              <div className="text-center mb-4">
                <div className={`text-2xl font-bold ${timeRemaining <= 300 ? 'text-red-600' : 'text-blue-600'}`}>
                  ⏰ {formatTime(timeRemaining)}
                </div>
                <div className="text-sm text-gray-500">
                  {timeRemaining <= 300 ? 'Time Running Out!' : 'Time Remaining'}
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Progress</span>
                  <span>{answeredCount}/{quizQuestions.length}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(answeredCount / quizQuestions.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              {reviewCount > 0 && (
                <div className="text-sm text-orange-600 mb-2">
                  <Flag className="w-4 h-4 inline mr-1" />
                  {reviewCount} marked for review
                </div>
              )}
            </div>

            {/* Section Filter */}
            <div className="mb-6">
              <div className="flex items-center space-x-2 mb-3">
                <Filter className="w-4 h-4 text-gray-600" />
                <span className="font-semibold text-gray-800 text-sm">Filter by Section</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                <button
                  onClick={() => setSelectedSectionFilter('all')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                    selectedSectionFilter === 'all'
                      ? 'bg-gray-800 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  All
                </button>
                {selectedSections.map(sectionKey => (
                  <button
                    key={sectionKey}
                    onClick={() => setSelectedSectionFilter(sectionKey)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all inline-flex items-center ${
                      selectedSectionFilter === sectionKey
                        ? `${sections[sectionKey].color} text-white`
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {sections[sectionKey].name}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold text-gray-800">Questions</h3>
                {reviewCount > 0 && (
                  <div className="text-sm text-orange-600 flex items-center">
                    <Flag className="w-4 h-4 mr-1" />
                    {reviewCount} for review
                  </div>
                )}
              </div>
              <div className="grid grid-cols-5 gap-2 max-h-96 overflow-y-auto">
                {filteredIndices.map((originalIndex) => (
                  <button
                    key={originalIndex}
                    onClick={() => navigateToQuestion(originalIndex)}
                    className={`w-10 h-10 rounded-lg text-xs font-semibold transition-all duration-200 relative ${
                      originalIndex === currentQuestionIndex
                        ? 'bg-blue-500 text-white ring-2 ring-blue-300'
                        : markedForReview[originalIndex]
                        ? 'bg-white border-2 border-orange-400 text-orange-600'
                        : userAnswers[originalIndex] !== null
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                    }`}
                  >
                    {originalIndex + 1}
                    {markedForReview[originalIndex] && (
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-100 rounded-full border-2 border-orange-400"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2 text-xs text-gray-600 mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-blue-500 rounded"></div>
                <span>Current Question</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-green-500 rounded"></div>
                <span>Answered</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-orange-500 rounded"></div>
                <span>Marked for Review</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-gray-200 rounded"></div>
                <span>Not Answered</span>
              </div>
            </div>

            <button
              onClick={submitQuiz}
              className="w-full px-4 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Submit Quiz
            </button>
          </div>

          {/* Main Quiz Content */}
          <div className="flex-1">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center space-x-2">
                  <div className={`p-2 rounded-lg ${sections[currentQuestion.section].color}`}>
                    <div className="text-white">
                      {sections[currentQuestion.section].icon}
                    </div>
                  </div>
                  <span className="font-semibold text-gray-700">
                    {sections[currentQuestion.section].name}
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={toggleMarkForReview}
                    className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 ${
                      markedForReview[currentQuestionIndex]
                        ? 'bg-orange-100 border-2 border-orange-500 text-orange-600'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <Flag className={markedForReview[currentQuestionIndex] ? "w-4 h-4 text-orange-500" : "w-4 h-4"} />
                    <span>{markedForReview[currentQuestionIndex] ? 'Marked' : 'Mark for Review'}</span>
                  </button>
                  <div className="text-sm text-gray-500">
                    Question {currentQuestionIndex + 1} of {quizQuestions.length}
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                  {currentQuestion.question}
                </h2>

                <div className="space-y-4">
                  {currentQuestion.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswer(index)}
                      className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-300 group ${
                        userAnswers[currentQuestionIndex] === index
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-blue-400 hover:bg-blue-50'
                      }`}
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${
                          userAnswers[currentQuestionIndex] === index
                            ? 'border-blue-500 bg-blue-500 text-white'
                            : 'border-gray-300 group-hover:border-blue-400'
                        }`}>
                          <span className={`font-semibold ${
                            userAnswers[currentQuestionIndex] === index
                              ? 'text-white'
                              : 'text-gray-600 group-hover:text-blue-600'
                          }`}>
                            {String.fromCharCode(65 + index)}
                          </span>
                        </div>
                        <span className={`${
                          userAnswers[currentQuestionIndex] === index
                            ? 'text-blue-700'
                            : 'text-gray-700 group-hover:text-blue-700'
                        }`}>
                          {option}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex justify-between">
                <button
                  onClick={() => navigateToQuestion(Math.max(0, currentQuestionIndex - 1))}
                  disabled={currentQuestionIndex === 0}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    currentQuestionIndex === 0
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-gray-500 text-white hover:bg-gray-600'
                  }`}
                >
                  Previous
                </button>
                
                <button
                  onClick={() => navigateToQuestion(Math.min(quizQuestions.length - 1, currentQuestionIndex + 1))}
                  disabled={currentQuestionIndex === quizQuestions.length - 1}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    currentQuestionIndex === quizQuestions.length - 1
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-blue-500 text-white hover:bg-blue-600'
                  }`}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Update results screen render to handle null results
  if (currentScreen === 'results') {
    const results = calculateResults();
    if (!results) return null;

    const performance = getPerformanceLevel(results.percentage);
    const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];

    return (
      <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gradient-to-br from-indigo-100 via-white to-cyan-100'} p-4`}>
        <div className="max-w-4xl mx-auto">
          <div className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-white'} rounded-xl shadow-lg p-8`}>
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">{performance.emoji}</div>
              <h1 className="text-4xl font-bold text-gray-800 mb-2">Quiz Complete!</h1>
              <p className={`text-2xl font-semibold ${performance.color}`}>
                {performance.level}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <ScoreCard
                icon={<Award className="w-8 h-8" />}
                value={results.marksDisplay}
                label="Total Score"
                color="blue"
                subtext={`${results.scorePercentage}%`}
              />
              <ScoreCard
                icon={<CheckCircle className="w-8 h-8" />}
                value={`+${results.correctCount * 4}`}
                label="Marks from Correct"
                color="green"
                subtext={`${results.correctCount} correct answers`}
              />
              <ScoreCard
                icon={<XCircle className="w-8 h-8" />}
                value={`-${results.incorrectCount}`}
                label="Negative Marks"
                color="red"
                subtext={`${results.incorrectCount} wrong answers`}
              />
            </div>

            {/* Section Analysis */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <BarChart3 className="w-6 h-6 mr-2" />
                Section-wise Analysis
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {results.sectionWiseAnalysis.map((section) => (
                  <SectionAnalysisCard
                    key={section.section}
                    section={section}
                    darkMode={darkMode}
                  />
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Detailed Analysis</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h4 className="text-lg font-semibold mb-4">Overall Performance</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Total Marks</span>
                      <span className="font-bold">{results.totalMarks}</span>
                    </div>
                    <div className="flex justify-between text-green-600">
                      <span>Correct Answers (+4)</span>
                      <span>{results.correctCount}</span>
                    </div>
                    <div className="flex justify-between text-red-600">
                      <span>Incorrect Answers (-1)</span>
                      <span>{results.incorrectCount}</span>
                    </div>
                    <div className="flex justify-between text-gray-500">
                      <span>Unattempted (0)</span>
                      <span>{results.unattempted}</span>
                    </div>
                    <div className="flex justify-between text-blue-600">
                      <span>Accuracy</span>
                      <span>{results.accuracy}%</span>
                    </div>
                  </div>
                </div>

                {/* Add section-wise detailed analysis */}
                {Object.entries(results.sectionWiseScore).map(([section, stats]) => (
                  <div key={section} className="bg-white p-6 rounded-xl shadow-md">
                    <h4 className="text-lg font-semibold mb-4 flex items-center">
                      {sections[section].icon}
                      <span className="ml-2">{sections[section].name}</span>
                    </h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Marks</span>
                        <span className="font-bold">{stats.marks}</span>
                      </div>
                      <div className="flex justify-between text-green-600">
                        <span>Correct</span>
                        <span>{stats.correct}</span>
                      </div>
                      <div className="flex justify-between text-red-600">
                        <span>Incorrect</span>
                        <span>{stats.incorrect}</span>
                      </div>
                      <div className="flex justify-between text-gray-500">
                        <span>Unattempted</span>
                        <span>{stats.unattempted}</span>
                      </div>
                      <div className="flex justify-between text-blue-600">
                        <span>Accuracy</span>
                        <span>{Math.round((stats.correct / (stats.correct + stats.incorrect)) * 100) || 0}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-semibold text-gray-800">Question-wise Analysis</h3>
                <button
                  onClick={() => downloadResults(results)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300 flex items-center space-x-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Results</span>
                </button>
              </div>
              <div className="space-y-4 max-h-[32rem] overflow-y-auto p-4 border rounded-xl">
                {results.questionsAnalysis.map((q, idx) => (
                  <div key={idx} className={`p-4 rounded-lg border ${
                    q.isCorrect ? 'border-green-200 bg-green-50' :
                    q.userAnswer === 'Not attempted' ? 'border-gray-200 bg-gray-50' :
                    'border-red-200 bg-red-50'
                  }`}>
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex-1">
                        <span className="font-medium text-gray-500">Q{idx + 1}.</span>
                        <span className="ml-2 font-medium">{q.question}</span>
                      </div>
                      <div className="ml-4 text-right">
                        <span className={`font-bold ${
                          q.marks > 0 ? 'text-green-600' :
                          q.marks < 0 ? 'text-red-600' :
                          'text-gray-600'
                        }`}>
                          {q.marks > 0 ? `+${q.marks}` : q.marks}
                        </span>
                      </div>
                    </div>
                    
                    <div className="mt-4 space-y-2">
                      <p className="text-sm text-gray-600">Options:</p>
                      {quizQuestions[idx].options.map((option, optIdx) => (
                        <div key={optIdx} className={`p-2 rounded ${
                          optIdx === quizQuestions[idx].correct ? 'bg-green-100 border border-green-300' :
                          optIdx === userAnswers[idx] ? 'bg-red-100 border border-red-300' :
                          'bg-gray-50 border border-gray-200'
                        }`}>
                          <span className="mr-2 font-medium">{String.fromCharCode(65 + optIdx)}.</span>
                          <span>{option}</span>
                          {optIdx === quizQuestions[idx].correct && (
                            <span className="ml-2 text-green-600 text-sm">✓ Correct Answer</span>
                          )}
                          {optIdx === userAnswers[idx] && optIdx !== quizQuestions[idx].correct && (
                            <span className="ml-2 text-red-600 text-sm">✗ Your Answer</span>
                          )}
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm mt-4">
                      <div>
                        <span className="text-gray-600">Section: </span>
                        <span className="font-medium">{q.section}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Status: </span>
                        <span className={`font-medium ${
                          q.isCorrect ? 'text-green-600' :
                          q.userAnswer === 'Not attempted' ? 'text-gray-600' :
                          'text-red-600'
                        }`}>
                          {q.isCorrect ? 'Correct' : q.userAnswer === 'Not attempted' ? 'Not Attempted' : 'Incorrect'}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-6 rounded-xl mb-8 text-center">
              <h3 className="text-xl font-semibold mb-2">Motivation Corner</h3>
              <p className="text-lg">{randomQuote}</p>
            </div>

            <div className="text-center">
              <button
                onClick={resetQuiz}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center space-x-2 mx-auto"
              >
                <RefreshCw className="w-5 h-5" />
                <span>Take Another Quiz</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentScreen === 'history') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-cyan-100 p-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800">Quiz History</h1>
              <button
                onClick={resetQuiz}
                className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-all duration-300"
              >
                Back to Home
              </button>
            </div>

            {quizHistory.length === 0 ? (
              <div className="text-center text-gray-600 py-8">
                No quiz history available yet. Take a quiz to see your results here!
              </div>
            ) : (
              <div className="space-y-4">
                {quizHistory.map((historyItem) => (
                  <div key={historyItem.id} className="border rounded-lg p-4 hover:shadow-md transition-all duration-300">
                    <div className="flex justify-between items-center mb-2">
                      <div>
                        <span className="text-sm text-gray-500">{historyItem.date} at {historyItem.time}</span>
                        <div className="font-semibold">
                          Sections: {historyItem.sections.join(", ")}
                        </div>
                      </div>
                      <button
                        onClick={() => loadHistoryQuiz(historyItem)}
                        className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300"
                      >
                        <Eye className="w-4 h-4" />
                        <span>Review</span>
                      </button>
                    </div>
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="text-gray-600">
                        Score: {historyItem.totalMarks}/{historyItem.maxPossibleMarks} ({Math.round((historyItem.totalMarks/historyItem.maxPossibleMarks) * 100)}%)
                      </span>
                      <span className="text-green-600">
                        Correct: {historyItem.correctCount}
                      </span>
                      <span className="text-red-600">
                        Wrong: {historyItem.incorrectCount}
                      </span>
                      <span className="text-gray-600">
                        Time: {Math.floor(historyItem.timeTaken / 60)}:{(historyItem.timeTaken % 60).toString().padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (currentScreen === 'review') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-cyan-100 p-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800">Review Quiz</h1>
              <button
                onClick={resetQuiz}
                className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-all duration-300"
              >
                Back to Home
              </button>
            </div>

            <div className="mb-8">
              <div className="grid grid-cols-8 gap-2 mb-6">
                {quizQuestions.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentQuestionIndex(index)}
                    className={`p-2 rounded ${
                      index === currentQuestionIndex
                        ? 'bg-blue-500 text-white'
                        : userAnswers[index] === quizQuestions[index].correct
                        ? 'bg-green-500 text-white'
                        : 'bg-red-500 text-white'
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>

              <div className="border-l-4 border-blue-500 pl-4 mb-6">
                <h2 className="text-xl font-semibold mb-4">
                  {quizQuestions[currentQuestionIndex].question}
                </h2>
                <div className="space-y-3">
                  {quizQuestions[currentQuestionIndex].options.map((option, idx) => (
                    <div
                      key={idx}
                      className={`p-3 rounded-lg ${
                        idx === quizQuestions[currentQuestionIndex].correct
                          ? 'bg-green-100 border-2 border-green-500'
                          : idx === userAnswers[currentQuestionIndex]
                          ? 'bg-red-100 border-2 border-red-500'
                          : 'bg-gray-50'
                      }`}
                    >
                      {option}
                      {idx === quizQuestions[currentQuestionIndex].correct && (
                        <span className="ml-2 text-green-600">✓ Correct Answer</span>
                      )}
                      {idx === userAnswers[currentQuestionIndex] && 
                       idx !== quizQuestions[currentQuestionIndex].correct && (
                        <span className="ml-2 text-red-600">✗ Your Answer</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}; // End of MCQQuizApp component

// Add this function at the top level
const downloadResults = (results) => {
  const formatDate = (date) => new Date(date).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  const formatSection = (section) => `
    ${section.name}
    ├── Total Questions: ${section.total}
    ├── Correct Answers: ${section.correct} (+${section.correct * 4} marks)
    ├── Wrong Answers: ${section.incorrect} (-${section.incorrect} marks)
    ├── Unattempted: ${section.unattempted}
    ├── Total Marks: ${section.marks}/${section.maxMarks}
    └── Accuracy: ${Math.round((section.correct / (section.correct + section.incorrect)) * 100) || 0}%
  `;

  const formatQuestionAnalysis = (q, idx) => `
    Question ${idx + 1}
    ├── ${q.question}
    ├── Your Answer: ${q.userAnswer}
    ├── Correct Answer: ${q.correctAnswer}
    ├── Status: ${q.isCorrect ? 'Correct ✓' : q.userAnswer === 'Not attempted' ? 'Not Attempted ○' : 'Incorrect ✗'}
    └── Marks: ${q.marks > 0 ? `+${q.marks}` : q.marks}
  `;

  const reportContent = `
===========================================
           QUIZ RESULT REPORT             
===========================================
Date: ${formatDate(new Date())}

OVERALL PERFORMANCE
------------------
Total Score: ${results.totalMarks}/${results.maxPossibleMarks} (${results.scorePercentage}%)
Correct Answers: ${results.correctCount} (+${results.correctCount * 4} marks)
Wrong Answers: ${results.incorrectCount} (-${results.incorrectCount} marks)
Unattempted: ${results.unattempted}
Accuracy: ${results.accuracy}%

SECTION-WISE ANALYSIS
--------------------
${Object.entries(results.sectionWiseScore).map(([_, section]) => formatSection(section)).join('\n')}

QUESTION-WISE ANALYSIS
--------------------
${results.questionsAnalysis.map((q, idx) => formatQuestionAnalysis(q, idx)).join('\n')}

===========================================
Generated by NEET PREP Quiz App
===========================================
`;

  const blob = new Blob([reportContent], { type: 'text/plain;charset=utf-8' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `quiz-report-${new Date().toISOString().split('T')[0]}.txt`;
  document.body.appendChild(a);
  a.click();
  window.URL.revokeObjectURL(url);
  document.body.removeChild(a);
};

// Replace ScoreCard component with fixed styling
const ScoreCard = ({ icon, value, label, color, subtext }) => (
  <div className={`bg-gradient-to-r ${
    color === 'blue' ? 'from-blue-500 to-blue-600' :
    color === 'green' ? 'from-green-500 to-green-600' :
    'from-red-500 to-red-600'
  } text-white p-6 rounded-xl text-center`}>
    <div className="mx-auto mb-2">{icon}</div>
    <div className="text-3xl font-bold">{value}</div>
    <div className="text-white font-medium">{label}</div>
    <div className="text-sm mt-2 text-white/80">{subtext}</div>
  </div>
);

const SectionAnalysisCard = ({ section, darkMode }) => (
  <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} p-4 rounded-lg`}>
    <div className="flex justify-between items-center mb-2">
      <div className="flex items-center space-x-2">
        <div className={`p-2 rounded ${sections[section.section].color}`}>
          {sections[section.section].icon}
        </div>
        <span className="font-semibold">{section.name}</span>
      </div>
      <span className="font-bold">{section.marks}/{section.maxMarks}</span>
    </div>
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span>Correct (+4)</span>
        <span className="text-green-500">{section.correct}</span>
      </div>
      <div className="flex justify-between text-sm">
        <span>Wrong (-1)</span>
        <span className="text-red-500">{section.incorrect}</span>
      </div>
      <div className="flex justify-between text-sm">
        <span>Unattempted</span>
        <span>{section.unattempted}</span>
      </div>
    </div>
    <div className="mt-2">
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className={`h-2 rounded-full ${sections[section.section].color}`}
          style={{ width: `${section.percentage}%` }}
        ></div>
      </div>
    </div>
  </div>
);

export default MCQQuizApp;