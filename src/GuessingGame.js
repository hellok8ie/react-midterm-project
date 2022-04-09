import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import usePersistence from './usePersistence';
import styles from './GuessingGame.module.css';

const randomNum = Math.floor(Math.random() * 100) + 1;
let guessCounter = 0

function GuessingGame () {

    const [ luckyNumber, setLuckyNumber ] = usePersistence("luckyNumber", randomNum)
    const [guess, setGuess] = usePersistence("guess", "")
    const [message, setMessage] = usePersistence("message", "")
    const [numofGuess, setNumOfGuess] = usePersistence("numOfGuess", 0)

    console.log(luckyNumber)

    function updateGuess (event) {
        setGuess(parseInt(event.target.value))
    }

    function userGuess () {

        guessCounter = numofGuess
        guessCounter++
        setNumOfGuess(guessCounter)
     
        if (guess === "") {
            setMessage("Please enter a number between 1-100")
        } else if  (guess > luckyNumber) {
            setMessage("Too high, guess again!")
        } else if (guess < luckyNumber) {
            setMessage("Too low, guess again!")
        } else {
            setMessage("Fantastic! You got it!")
        }
    }

    function resetAll () {
        setLuckyNumber(Math.floor(Math.random() * 100) + 1)
        setGuess("");
        setMessage("");
        setNumOfGuess(0);
    }

    return (
        <div className={styles.gameDiv}>
            <p>Can you guess the lucky number?? It's between 1 and 100.</p>
            <p hidden={message ? true : false}>No guesses, yet...</p>
            <p>{message}</p>
            <p>You've made {numofGuess} guess(es) so far.</p>
            <Form className='col-4 mx-auto'>
                <Form.Group>
                    <Form.Label>What's your best guess?</Form.Label>
                    <br/> 
                    <Form.Control type='number' min="1" max="100" value={guess} onChange={updateGuess}/>
                </Form.Group>
            </Form>
            <br/>
            <Button variant="dark" onClick={userGuess}>Guess!</Button>{' '}<Button variant="info" onClick={resetAll}>Reset Lucky Number</Button>
        </div>
    )

}

export default GuessingGame