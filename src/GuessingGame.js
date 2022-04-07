import React, {useState} from 'react';
import Guess from './Guess'; 
import Button from 'react-bootstrap/Button'

const randomNum = Math.floor(Math.random() * 100) + 1

function GuessingGame () {

    const [ luckyNumber, setLuckyNumber ] = useState(randomNum)

    function newLuckyNum () {
        setLuckyNumber(Math.floor(Math.random() * 100) + 1)
    }

    console.log(luckyNumber)

    return (
        <div>
            <p>Can you guess the lucky number?? It's between 1 and 100.</p>
            <Guess luckyNumber={luckyNumber}/>
            <br/>
            <Button variant="dark" type="submit" onClick={newLuckyNum}>Reset</Button>
        </div>
    )

}

export default GuessingGame