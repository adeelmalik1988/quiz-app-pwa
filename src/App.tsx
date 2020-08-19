import React, { useState } from 'react';
import './App.css';
import { getQuizDetails } from './services/QuizService'
import { QuestionType } from './Types/QuizTypes'
import { QuestionCard } from './Components/QuestionCard/QueestionCard'
import { QuizCategories } from './Components/QuizCategories/QuizCategories'
import { LoadingPage } from './Components/LoadingPage/Loading'
import { QuizHeading } from './Components/QuizHeading/QuizHeading'
import { ResultCard } from './Components/ResultCard/ResultCard'
import { Alert, Button } from 'react-bootstrap';

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
    
    if (!quiz.length || !gameOver) {

      setLoading(true)
    }
    const questions: QuestionType[] = await getQuizDetails(5, 'easy', category)
    
    setQuiz(questions)

    setStart(true)
    setLoading(false)
    setGameOver(false)


  }
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    let clickedAns: string = e.currentTarget.value
    
    setUserAns(e.currentTarget.value)
    

    const currentQuestion: QuestionType = quiz[currentStep]

    if (clickedAns === currentQuestion.answer) {
      
      setScore(++score)
    }

  }

  const handleQuestion = () => {

    if (currentStep !== quiz.length - 1) {
      setLoading(false)
      setCurrentStep(++currentStep)
      
      setUserAns('')

    } else {
      
      setGameOver(true)
    }
  }

  const handleReset = () =>{

    setCurrentStep(0);
      setScore(0)
      setStart(false)
      setGameOver(false)
      setUserAns('')

  }

  return (
    <div className='App'>
      {!start && <QuizHeading />}

      {!start && !loading &&
        <QuizCategories
          callback={startGame}
        />
      }

      {loading && <LoadingPage />}

    
      {start && !gameOver && <>
      
        <p className='score'>{`Score: ${score}`} </p>
        <p className='question'>{`Question: ${currentStep + 1} out of ${quiz.length} `}</p>
      
      <QuestionCard
        question={quiz[currentStep].question}
        option={quiz[currentStep].option}
        callback={handleSubmit}
        userAns={userAns}
        answer={quiz[currentStep].answer}

      />
      </>
      }
      {userAns && !gameOver &&
        <button className='subbutton' onClick={handleQuestion} >{(currentStep === quiz.length - 1) ? 'FINISH' : 'NEXT'}</button>
      }
      {gameOver && 
      <>
      <ResultCard />

      <Alert variant={'success'}>
        
        <Alert.Heading>{`Your final Score is ${score} out of ${quiz.length}`}</Alert.Heading>
        
        <div className="d-flex justify-content-center">
          <Button onClick={handleReset} variant="outline-success">
            Let's Play Again
          </Button>
        </div>
      
        </Alert>

        </>
}

    </div>
  );
}

export default App;
