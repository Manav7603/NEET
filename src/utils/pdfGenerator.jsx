import html2pdf from 'html2pdf.js';

export const generatePDF = (results) => {
  // Validate results object
  if (!results || typeof results !== 'object') {
    console.error('Invalid results object');
    return null;
  }

  // Ensure all required properties exist with defaults
  const safeResults = {
    totalMarks: results.totalMarks || 0,
    maxPossibleMarks: results.maxPossibleMarks || 0,
    scorePercentage: results.scorePercentage || 0,
    correctCount: results.correctCount || 0,
    incorrectCount: results.incorrectCount || 0,
    accuracy: results.accuracy || 0,
    sectionWiseAnalysis: results.sectionWiseAnalysis || [],
    questionsAnalysis: results.questionsAnalysis.map(q => ({
      ...q,
      options: results.quizQuestions?.[q.questionIndex]?.options || [],
      correct: results.quizQuestions?.[q.questionIndex]?.correct || 0
    }))
  };

  const content = `
    <div style="padding: 30px; font-family: 'Helvetica', sans-serif; max-width: 800px; margin: 0 auto; line-height: 1.6;">
      <div style="text-align: center; margin-bottom: 40px;">
        <h1 style="color: #1a365d; font-size: 32px; margin-bottom: 10px;">NEET PREP Quiz Results</h1>
        <p style="color: #64748b; font-size: 14px;">${new Date().toLocaleString()}</p>
      </div>

      <div style="background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%); color: white; padding: 25px; border-radius: 15px; text-align: center; margin-bottom: 40px;">
        <h2 style="font-size: 28px; margin: 0;">Score: ${safeResults.totalMarks}/${safeResults.maxPossibleMarks}</h2>
        <p style="font-size: 18px; margin: 10px 0 0; opacity: 0.9;">${safeResults.scorePercentage}% Achievement</p>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; margin-bottom: 40px;">
        <div style="background: #f8fafc; padding: 20px; border-radius: 12px; text-align: center;">
          <h3 style="color: #22c55e; font-size: 24px; margin: 0;">${safeResults.correctCount}</h3>
          <p style="color: #64748b; margin: 5px 0;">Correct (+${safeResults.correctCount * 4})</p>
        </div>
        <div style="background: #f8fafc; padding: 20px; border-radius: 12px; text-align: center;">
          <h3 style="color: #ef4444; font-size: 24px; margin: 0;">${safeResults.incorrectCount}</h3>
          <p style="color: #64748b; margin: 5px 0;">Wrong (-${safeResults.incorrectCount})</p>
        </div>
        <div style="background: #f8fafc; padding: 20px; border-radius: 12px; text-align: center;">
          <h3 style="color: #6366f1; font-size: 24px; margin: 0;">${safeResults.accuracy}%</h3>
          <p style="color: #64748b; margin: 5px 0;">Accuracy</p>
        </div>
      </div>

      <div style="margin-bottom: 40px;">
        <h3 style="color: #1e293b; font-size: 20px; margin-bottom: 20px;">Section Performance</h3>
        ${safeResults.sectionWiseAnalysis.map(section => `
          <div style="background: #f8fafc; padding: 20px; border-radius: 12px; margin-bottom: 15px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
              <h4 style="color: #1e293b; margin: 0;">${section.name}</h4>
              <span style="color: #3b82f6; font-weight: bold;">${section.marks}/${section.maxMarks}</span>
            </div>
            <div style="display: flex; gap: 20px; color: #64748b; font-size: 14px;">
              <span>✓ ${section.correct} correct</span>
              <span>✗ ${section.incorrect} wrong</span>
              <span>⊖ ${section.unattempted} unattempted</span>
            </div>
          </div>
        `).join('')}
      </div>

      <div style="margin-bottom: 20px;">
        <h3 style="color: #1e293b; font-size: 20px; margin-bottom: 20px;">Question Review</h3>
        ${safeResults.questionsAnalysis.map((q, idx) => `
          <div style="background: #ffffff; border: 1px solid #e2e8f0; padding: 20px; border-radius: 12px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
              <span style="color: #64748b; font-size: 14px; font-weight: 600;">Question ${idx + 1}</span>
              <div style="display: flex; align-items: center; gap: 12px;">
                <span style="color: ${q.isCorrect ? '#22c55e' : '#ef4444'}; font-weight: 600;">
                  ${q.marks > 0 ? `+${q.marks}` : q.marks} marks
                </span>
                <span style="
                  padding: 4px 8px;
                  border-radius: 6px;
                  background: ${q.isCorrect ? '#dcfce7' : '#fee2e2'};
                  color: ${q.isCorrect ? '#166534' : '#991b1b'};
                  font-size: 12px;
                  font-weight: 600;
                ">
                  ${q.isCorrect ? 'CORRECT' : 'INCORRECT'}
                </span>
              </div>
            </div>
            
            <p style="color: #1e293b; font-size: 16px; margin: 12px 0; font-weight: 500; line-height: 1.5;">
              ${q.question}
            </p>

            <div style="margin: 15px 0; border-left: 3px solid #e2e8f0; padding-left: 15px;">
              ${q.options.map((option, optIdx) => `
                <div style="
                  padding: 12px 15px;
                  margin: 8px 0;
                  border-radius: 8px;
                  background: ${
                    optIdx === q.correct ? '#f0fdf4' :
                    option === q.userAnswer ? '#fef2f2' : '#f8fafc'
                  };
                  border: 1px solid ${
                    optIdx === q.correct ? '#86efac' :
                    option === q.userAnswer && optIdx !== q.correct ? '#fecaca' : '#e2e8f0'
                  };
                ">
                  <div style="display: flex; align-items: center; justify-content: space-between;">
                    <div style="display: flex; align-items: center; gap: 10px;">
                      <span style="
                        width: 24px;
                        height: 24px;
                        border-radius: 12px;
                        background: ${optIdx === q.correct ? '#22c55e' : 
                                   option === q.userAnswer ? '#ef4444' : '#94a3b8'};
                        color: white;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 12px;
                        font-weight: 600;
                      ">${String.fromCharCode(65 + optIdx)}</span>
                      <span style="color: #1e293b;">${option}</span>
                    </div>
                    <div style="display: flex; gap: 8px; align-items: center;">
                      ${optIdx === q.correct ? `
                        <span style="
                          background: #dcfce7;
                          color: #166534;
                          padding: 4px 8px;
                          border-radius: 4px;
                          font-size: 12px;
                          font-weight: 600;
                        ">✓ Correct Answer</span>
                      ` : ''}
                      ${option === q.userAnswer ? `
                        <span style="
                          background: ${optIdx === q.correct ? '#dcfce7' : '#fee2e2'};
                          color: ${optIdx === q.correct ? '#166534' : '#991b1b'};
                          padding: 4px 8px;
                          border-radius: 4px;
                          font-size: 12px;
                          font-weight: 600;
                        ">Your Answer</span>
                      ` : ''}
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>

            <div style="
              background: #f8fafc;
              border: 1px solid #e2e8f0;
              border-radius: 8px;
              padding: 12px 15px;
              margin-top: 15px;
            ">
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <div style="display: flex; gap: 20px;">
                  <span style="color: #64748b; font-size: 14px;">
                    <strong>Correct Answer:</strong> 
                    <span style="color: #22c55e; font-weight: 600;">
                      Option ${String.fromCharCode(65 + q.correct)} - ${q.options[q.correct]}
                    </span>
                  </span>
                </div>
                <span style="color: #64748b; font-size: 14px;">
                  ${q.userAnswer === 'Not attempted' ? 'Not Attempted' : ''}
                </span>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  const opt = {
    margin: 1,
    filename: `quiz-report-${new Date().toISOString().split('T')[0]}.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'cm', format: 'a4', orientation: 'portrait' }
  };

  try {
    return html2pdf().set(opt).from(content).save();
  } catch (error) {
    console.error('Error generating PDF:', error);
    return null;
  }
};
