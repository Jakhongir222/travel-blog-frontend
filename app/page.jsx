"use client"
import "../styles/layout.css";
import { React, useState} from 'react'
import Confetti from './confetti';


function homepage () {

    const [isActive, setIsActive] = useState(false);

    const cities = ["London", "Paris", "Tokyo", "Barcelona", "Italy", "Greece", "Uzbekistan", "Norway", "New-York", "Bangkok", "Singapore", "Dubai", 
"Portugal", "Australia", "You have no money to travel", "Nowhere", "Neverland", "we have been trying to reach you about your car's extended warranty", 
"Ooh, sorry, try next year", "Turkey", "Iceland", "Chile", "Mexico", "Korea", "Nepal", "India", "Thailand"];
    const [randomCity, setRandomCity] =useState('');
    const [isSpinning, setIsSpinning] = useState(false);

    function play() {
        var audio = document.getElementById('b1');
        audio.play();
      }
 
    const spinTheCompass = () => {
        const random = Math.floor(Math.random() * cities.length);
        const newCity = cities[random]
        setRandomCity(newCity);
        play();
        setIsSpinning(!isSpinning);
        setIsActive(!isActive);
    }

    return (
        <div className='welcoming-quote'>
            <h1>Live your life by a compass, not a clock!</h1>
            <div className="home-page-cart">
                <p>Where will you be travelling in 2023 ?</p>
                <button onClick={spinTheCompass} className={isSpinning ? 'spin' : ''}>Click me</button>
                {isActive && <Confetti active={isActive}/>}
                <audio id='b1'><source src="/sound3.wav" type='audio/mpeg'/></audio>
                <p>{randomCity}</p>
                    <a href='/destinations'>
                    <button className="explore-button">Start exploring</button>
                    </a>
            </div>
        </div>
    )
}

export default homepage