import React, { useState } from 'react'
import { questionPropsType } from './../Types/QuizTypes'


export const QuestionCard: React.FC<questionPropsType> = ({ question, option, callback }) => {
    

    let [selectedAns, setSelectedAns] = useState('')

    const handleSelection = (e: any)=>{
        
        setSelectedAns(e.target.value)


    }

    return (
        
        <div className='question-container'>

            <div className='question'>
                <h4>{question}</h4>

            </div>
                <form onSubmit={(e:React.FormEvent<EventTarget>)=>callback(e, selectedAns)}>
                    {
                        option.map((opt: string, ind: number) => {
                            return (
                                <div key={ind}>
                                <label>
                                    <input
                                        type="radio"
                                        name='opt'
                                        value={opt}
                                        checked={selectedAns === opt}
                                        required
                                        onClick={handleSelection}
                                    />
                                    {opt}

                                </label>
                                </div>
                            )

                        }

                        )

                    }
                    <input type='submit' />
                </form>

            
        </div>
    )
}