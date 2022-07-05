import React from 'react';
import logo from '../images/logo.svg';
import '../stylesheets/scoreboard.css';

function Scoreboard(props){

    return(
        <div className='Scoreboard'>
            <img src={logo} alt='Logo' className='logo'/>
            <div className='score'>
                <span className='score-text'>S C O R E</span>
                <span className='score-points'>{props.counter}</span>
            </div>
        </div>
    );
};

export default Scoreboard;