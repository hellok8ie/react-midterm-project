import React, {useState, useEffect} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function GuessingGame () {

    const [ luckyNumber, setLuckyNumber ] = useState()
    // const [guess, setGuess] = useState(null);
    // const [numofGuess, setNumOfGuess] = useState(0);
    // const [hint, setHint] = useState(null);

    useEffect (() => {
        if (luckyNumber === undefined) {
            newLuckyNum()
        }
    }, [luckyNumber] )

    function newLuckyNum () {
        setLuckyNumber(Math.floor(Math.random() * 100) + 1)
    }

    return (
        <div>
            <p>Can you guess the lucky number?? It's between 1 and 100.</p>
            <p>No guesses, yet...</p>

            <Form>
                <Form.Group>
                    <Form.Label>What's your best guess?</Form.Label>
                    <Form.Control type="number"/>
                </Form.Group>
                <br/>
                <p hidden={false}>Too high, try again!</p>
                <p hidden={true}>Too low, try again!</p>
                <p hidden={true}>Congrats, you got it!</p>
                <Button>Guess!</Button>
            </Form>
            <br/>
            <Button onClick={newLuckyNum}>Reset</Button>

        </div>
    )

}

export default GuessingGame