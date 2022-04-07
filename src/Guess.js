import React, {useState} from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

let guessCounter = 0

function Guess ({luckyNumber}) {

    const [guess, setGuess] = useState("");
    const [message, setMessage] = useState("");
    const [numofGuess, setNumOfGuess] = useState(0);
    
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

    return (
        <div>
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
        </div>
       
    )
}            
            
export default Guess
            