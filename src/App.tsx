import React, { useState } from 'react';
import './App.css';
import { getQuizDetails } from './services/QuizService'
import { QuestionType } from './Types/QuizTypes'
import { QuestionCard } from './Components/QuestionCard/QueestionCard'
import { QuizCategories } from './Components/QuizCategories/QuizCategories'
import { Spinner, Button } from 'react-bootstrap';

function App() {

  let [quiz, setQuiz] = useState<QuestionType[]>([])
  let [currentStep, setCurrentStep] = useState(0)
  let [score, setScore] = useState(0)
  let [start, setStart] = useState(false)
  let [loading, setLoading] = useState(false)
  let [gameOver, setGameOver] = useState(false)
  let [userAns, setUserAns] = useState('')


  const startGame = async (e: React.MouseEvent<HTMLButtonElement>) => {
    let category: string = e.currentTarget.value
    console.log(e.currentTarget.value, 'target value')
    console.log(category, 'category')
    if (!quiz.length || gameOver) {

      setLoading(true)
    }
    const questions: QuestionType[] = await getQuizDetails(5, 'easy', category)
    console.log(questions)
    setQuiz(questions)

    setStart(true)
    setLoading(false)
    setGameOver(false)
    

  }
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(e.currentTarget.value)
    setUserAns(e.currentTarget.value)
    console.log(userAns, 'userSelected Answer')

    const currentQuestion: QuestionType = quiz[currentStep]

    if (userAns === currentQuestion.answer) {
      console.log('Correct Answer')
      setScore(++score)
    }

  }

  const handleQuestion = () => {

    if (currentStep !== quiz.length - 1) {
      setLoading(false)
      setCurrentStep(++currentStep)
      setUserAns('')

    } else {
      alert(`Your final Score is ${score} out of ${quiz.length} `)
      setCurrentStep(0);
      setScore(0)
      setStart(false)
      setGameOver(true)
      setUserAns('')
    }
  }


  return (
    <div className='App'>
      <h1>Quiz Game</h1>

      {!start && !loading &&
        <QuizCategories
          callback={startGame}
        />
      }

      {loading && <Spinner animation="border" />}

      {start && <QuestionCard
        question={quiz[currentStep].question}
        option={quiz[currentStep].option}
        callback={handleSubmit}
        userAns={userAns}
        answer={quiz[currentStep].answer}

      />
      }
      {userAns &&
        <Button onClick={handleQuestion} > Next </Button>
      }

    </div>
  );
}

export default App;
