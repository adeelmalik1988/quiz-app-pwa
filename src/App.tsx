import React, { useEffect, useState } from 'react';
import './App.css';
import { getQuizDetails } from './services/QuizService'
import { QuestionType } from './Types/QuizTypes'
import { QuestionCard } from './Components/QueestionCard'

function App() {

  let [quiz, setQuiz] = useState<QuestionType[]>([])
  let [currentStep, setCurrentStep] = useState(0)
  let [score, setScore] = useState(0)

  useEffect(() => {

    async function fetchData() {

      const questions: QuestionType[] = await getQuizDetails(5, 'easy')
      console.log(questions)
      setQuiz(questions)

    }
    fetchData()

  }, [])

  const handleSubmit = (e: React.FormEvent<EventTarget>, userAns: string) => {
    e.preventDefault();
    console.log(userAns)

    const currentQuestion: QuestionType = quiz[currentStep]

    if (userAns === currentQuestion.answer){
      console.log('Correct Answer')
      setScore(++score)
    }



    if (currentStep !== quiz.length - 1)
      setCurrentStep(++currentStep)
    else {
    alert(`Your final Score is ${score} out of ${quiz.length} `)
    setCurrentStep(0);
    setScore(0)
    }

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
