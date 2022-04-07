import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import usePersistence from './usePersistence';

const randomNum = Math.floor(Math.random() * 100) + 1;
let guessCounter = 0

function GuessingGame () {

    const [ luckyNumber, setLuckyNumber ] = usePersistence('luckyNumber', randomNum)
    const [guess, setGuess] = usePersistence("guess", "")
    const [message, setMessage] = usePersistence("message", "")
    const [numofGuess, setNumOfGuess] = usePersistence("numOfGuess", 0)

    console.log(luckyNumber)

    function updateGuess (event) {
        setGuess(event.target.value)
    }

    function userGuess () {

        guessCounter++
        setNumOfGuess(guessCounter)
     
        if (guess > luckyNumber) {
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
        <div>
            <p>Can you guess the lucky number?? It's between 1 and 100.</p>
            <p hidden={message ? true : false}>No guesses, yet...</p>
            <p>{message}</p>
            <p hidden={numofGuess !== 0 ? false : true}>You've made {numofGuess} guess(es) so far.</p>
            <Form>
                <Form.Group>
                    <Form.Label>What's your best guess?</Form.Label>
                    <Form.Control type="text" value={guess} onChange={updateGuess}/>
                </Form.Group>
            </Form>
            <br/>
            <Button variant="primary" type="submit" onClick={userGuess}>Guess!</Button>
            <br/><br/>
            <Button variant="dark" type="submit" onClick={resetAll}>Reset</Button>
        </div>
    )

}

export default GuessingGame