import {Quiz, QuestionType} from './../Types/QuizTypes' 


const shuffleArray = (array: any[]) => [...array].sort(()=> Math.random() - 0.5)


export const getQuizDetails = async (totalQues: number, level: string, cat: string ): Promise<QuestionType[]> =>  {
    let url: string = `https://opentdb.com/api.php?amount=${totalQues}&category=${cat}&difficulty=${level}&type=multiple`
    const res = await fetch(url)
    let {results} = await res.json()
    //return(results)
    console.log(url)

    const quiz: QuestionType[] = results.map((questionObj: Quiz)=>{
        return{
            question: questionObj.question,
            answer: questionObj.correct_answer,
            option: shuffleArray(questionObj.incorrect_answers.concat(questionObj.correct_answer)),
        }
    })
    return quiz

}

//https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple