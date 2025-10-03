# QUIZ-App

A comprehensive NEET preparation quiz application built with React and Vite. This interactive quiz platform helps students prepare for medical entrance exams with subject-wise practice tests, detailed analytics, and performance tracking.

## 🚀 Features

### 📚 Multi-Subject Support
- **Physics** - Advanced physics problems with mathematical solutions
- **Chemistry** - Comprehensive chemistry questions
- **Botany** - Plant biology and botany concepts
- **Zoology** - Animal biology and zoology topics

### ⏱️ Flexible Quiz Options
- Customizable quiz duration (5 minutes to 2 hours)
- Section-wise question filtering
- Real-time timer with auto-submission
- Mark questions for review

### 📊 Advanced Analytics
- Detailed performance analysis
- Section-wise scoring breakdown
- Question-wise review with correct answers
- Accuracy percentage calculation
- Negative marking system (+4 for correct, -1 for incorrect)

### 🎯 User Experience
- Modern, responsive design with Tailwind CSS
- Dark mode support
- Intuitive navigation with question grid
- Progress tracking
- Motivational quotes and performance feedback

### 📈 Data Management
- Quiz history storage in browser
- PDF report generation
- CSV export functionality
- Data visualization tools

## 🛠️ Technology Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **PDF Generation**: jsPDF, html2pdf.js
- **Data Processing**: Papa Parse
- **Math Rendering**: KaTeX

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Manav7603/QUIZ-App.git
   cd QUIZ-App
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📖 Usage

### Taking a Quiz

1. **Select Subjects**: Choose from Physics, Chemistry, Botany, and Zoology
2. **Set Duration**: Pick your preferred quiz duration
3. **Start Quiz**: Click "Start Quiz" to begin
4. **Answer Questions**: Navigate through questions using the grid or navigation buttons
5. **Mark for Review**: Use the flag icon to mark questions for later review
6. **Submit**: Complete the quiz or let the timer auto-submit

### Reviewing Results

- View detailed performance metrics
- Analyze section-wise performance
- Review individual questions with correct answers
- Download results as PDF
- Access quiz history

### Quiz History

- View all previous quiz attempts
- Compare performance over time
- Review past quizzes in detail
- Export data for further analysis

## 🎨 Customization

### Adding New Questions

Questions are stored in `src/data/questions.jsx`. To add new questions:

```javascript
{
  id: uniqueId,
  question: "Your question here",
  options: ["Option A", "Option B", "Option C", "Option D"],
  correct: 0, // Index of correct option (0-3)
  section: "physics", // Subject section
  image: "optional-image-url" // Optional image for the question
}
```

### Styling

The app uses Tailwind CSS for styling. Customize the appearance by modifying:
- `src/index.css` - Global styles
- `src/styles/katex.css` - Math rendering styles
- Component-specific Tailwind classes

## 📁 Project Structure

```
myapp/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── DataViewer.jsx  # Data visualization
│   │   ├── KatexDisplay.jsx # Math rendering
│   │   └── Question.jsx    # Question component
│   ├── data/
│   │   └── questions.jsx   # Question database
│   ├── styles/
│   │   └── katex.css      # Math styling
│   ├── types/
│   │   └── quiz.js        # Type definitions
│   ├── utils/
│   │   ├── db.js          # Data storage utilities
│   │   └── pdfGenerator.jsx # PDF generation
│   ├── historyManager.jsx # Quiz history management
│   ├── main.jsx          # Main application component
│   └── index.jsx         # Entry point
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## 🚀 Deployment

### Netlify
The app is configured for Netlify deployment with `netlify.toml`.

### Vercel
Vercel configuration is available in `vercel.json`.

### Manual Deployment
1. Build the project: `npm run build`
2. Deploy the `dist` folder to your preferred hosting service

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Manav Pandya**
- GitHub: [@Manav7603](https://github.com/Manav7603)

## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Lucide React for the beautiful icons
- jsPDF for PDF generation capabilities
- KaTeX for mathematical expression rendering

---

**Happy Learning! 🎓**
