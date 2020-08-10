import React from 'react'

export type Quiz = {
    category: string
    correct_answer: string
    difficulty: string
    incorrect_answers: string[]
    question: string
    type: string

}

export type QuestionType = {
    question: string
    answer: string
    option: string[]
}

export type questionCardPropsType = {
    question: string
    option: string[]
    callback: (e: any)=>void
    userAns: string
    answer: string

}

export type quizCategoriesProps ={
    callback: (e:React.MouseEvent<HTMLButtonElement>) => void
}

export enum category {
    Sports = 21,
    Movies = 11,
    History = 23,
}