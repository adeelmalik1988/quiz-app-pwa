import React from 'react'
import { questionCardPropsType } from '../../Types/QuizTypes'
import { Card, Container, Row, Button } from 'react-bootstrap'
import {  ButtonWrapper } from './QuestionCard.styles'



export const QuestionCard: React.FC<questionCardPropsType> = ({ question, option, callback, userAns, answer }) => {



    return (
        
            
            <div className='question-container'>


                <Container fluid>
                    <Row className="justify-content-md-center">
                        <Card style={{ width: '50rem' }} >

                            <Card.Header>Quiz Questions</Card.Header>

                            <Card.Title>{question}
                                <p dangerouslySetInnerHTML={{ __html: question }} />
                            </Card.Title>




                            {
                                option.map((opt: string, ind: number) => {
                                    return (
                                        <ButtonWrapper key={opt}
                                        correct={ userAns ? (answer === opt) : false }
                                        userClicked={userAns === opt}
                                        
                                        >

                                            <Button disabled={userAns ? true : false} value={opt} onClick={(e: any) => callback(e)} >
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