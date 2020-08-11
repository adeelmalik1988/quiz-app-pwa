import React from 'react'
import { questionCardPropsType } from '../../Types/QuizTypes'
import { Card, Container, Row, Button } from 'react-bootstrap'
import {  ButtonWrapper } from './QuestionCard.styles'
import './QuestionCard.css'



export const QuestionCard: React.FC<questionCardPropsType> = ({ question, option, callback, userAns, answer }) => {



    return (
        
            
            <div className='question-container'>

                <Container fluid>
                    <Row className="justify-content-md-center">
                        <Card className="card" >

                           

                            <Card.Title>
                                <p dangerouslySetInnerHTML={{ __html: question }} />
                            </Card.Title>




                            {
                                option.map((opt: string, ind: number) => {
                                    return (
                                        <ButtonWrapper key={opt}
                                        correct={ userAns ? (answer === opt) : false }
                                        userClicked={userAns === opt}
                                        
                                        >

                                            <Button disabled={userAns ? true : false} value={opt} onClick={(e:React.MouseEvent<HTMLButtonElement>) => callback(e)} >
                                                <span
                                                    dangerouslySetInnerHTML={{ __html: opt }} />

                                            </Button>


                                        </ButtonWrapper>
                                    )

                                }

                                )

                            }

                        </Card>
                    </Row>
                </Container>

            </div >
            
        
    )
}