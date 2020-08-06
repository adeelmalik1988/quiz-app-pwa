import React, { useEffect, useState } from 'react';
import './App.css';
import { getQuizDetails } from './services/QuizService'
import { QuestionType } from './Types/QuizTypes'
import { QuestionCard } from './Components/QueestionCard'

function App() {

  let [quiz, setQuiz] = useState<QuestionType[]>([])
  let [currentStep, setCurrentStep] = useState(0)

  useEffect(() => {

    async function fetchData() {

      const questions: QuestionType[] = await getQuizDetails(5, 'easy')
      console.log(questions)
      setQuiz(questions)

    }
    fetchData()

  }, [])

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    setCurrentStep(++currentStep)

  }


  if (!quiz.length)
    return <h3>Loading...</h3>

  return (
    <div >
      QUiz App
      <QuestionCard
        question={quiz[currentStep].question}
        option={quiz[currentStep].option}
        callback={handleSubmit}

      />


    </div>
  );
}

export default App;
