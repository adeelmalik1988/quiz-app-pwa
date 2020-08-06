import React from 'react'
import { questionPropsType } from './../Types/QuizTypes'


export const QuestionCard: React.FC<questionPropsType> = ({ question, option, callback }) => {
    console.log(question, option)

    return (
        <div className='question-container'>

            <div className='question'>
                {question}

            </div>
                <form onSubmit={callback}>
                    {
                        option.map((opt: string, ind: number) => {
                            return (
                                <div key={ind}>
                                <label>
                                    <input
                                        type="radio"
                                        name='opt'
                                        value={opt}
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