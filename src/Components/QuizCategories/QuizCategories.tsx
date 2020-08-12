import React from 'react'
import { Card, Button, Container, Row, Col } from 'react-bootstrap'
import sports from './../../Images/sports.png'
import movies from './../../Images/movies.png'
import history from './../../Images/history.jpg'
import gk from './../../Images/generalKnowledge.jpg'
import styles from './QuizCategories.module.css'
import {quizCategoriesProps, category} from './../../Types/QuizTypes'





export const QuizCategories:React.FC<quizCategoriesProps> = ( {callback} ) => {


    return (
        <div className={styles.categories}>
            <Container fluid>
                <Row className="justify-content-md-center">
                <Col className={styles.col}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={gk} />
                            <Card.Body>
                                <Card.Title>General Knowledge</Card.Title>
                                
                                <Button variant="primary" onClick={(e:React.MouseEvent<HTMLButtonElement>)=>callback(e)} value= {category.GeneralKnowledge}>Let's Start</Button>
                            </Card.Body>
                        </Card>
                    </Col>


                    <Col className={styles.col}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={sports} />
                            <Card.Body>
                                <Card.Title>Sports</Card.Title>
                                
                                <Button variant="primary" onClick={(e:React.MouseEvent<HTMLButtonElement>)=>callback(e)} value= {category.Sports}>Let's Start</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className={styles.col}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={movies} />
                            <Card.Body>
                                <Card.Title>Movies</Card.Title>
                               
                                <Button variant="primary" onClick={(e:React.MouseEvent<HTMLButtonElement>)=>{callback(e)}}  value={category.Movies} >Let's Start</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className={styles.col}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={history} />
                            <Card.Body>
                                <Card.Title>History</Card.Title>
                                
                                <Button variant="primary" onClick={(e:React.MouseEvent<HTMLButtonElement>)=>callback(e)} value={category.History} >Let's Start</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

