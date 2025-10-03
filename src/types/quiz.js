export const QuizQuestion = {
  id: 'number',
  question: 'string',
  options: 'array',
  correct: 'number',
  section: 'string',
  image: 'string?'
};

export const validateQuestion = (question) => {
  if (!question) return false;
  if (typeof question.question !== 'string') return false;
  if (!Array.isArray(question.options)) return false;
  if (typeof question.correct !== 'number') return false;
  if (typeof question.section !== 'string') return false;
  return true;
};
