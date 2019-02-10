import React from 'react'
import classes from './FinishedQuiz.css'
import Button from '../UI/Button/Button'
import {Link} from 'react-router-dom'

const FinishedQuiz = props => {    
    let rightAnswers = Object.keys(props.results).reduce((total, key) => {
        if (props.results[key] === 'success'){
            total++
        }
        return total
    }, 0)
    
    
    return (
        <div className={classes.FinishedQuiz}>
            <ul>
                {props.quiz.map((quizItem, id) => {
                    const cls = [
                        'fa', 
                        props.results[quizItem.id] === 'success'  ? 'fa-check' : 'fa-times' ,
                        classes[props.results[quizItem.id]]
                    ]
                    return (
                    <li key={id}>
                        <strong>{id + 1}</strong>.&nbsp;
                        {quizItem.question}
                        <i className={cls.join(' ')}/>
                    </li>
                    )
                })}
            </ul>
            <p>Right {rightAnswers} of {props.quiz.length}</p>
            <Button onClick={props.onRetry} type="primary">Retry</Button>
            <Link to='/'>
                <Button onClick={props.onRetry} type="success">Go to quizes list</Button>
            </Link>
        </div>
    )
}

export default FinishedQuiz;