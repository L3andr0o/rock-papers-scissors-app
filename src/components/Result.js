import React from "react";
import '../stylesheets/result.css';
import Option from "./Option";

function Result(props){

    const pcPick = () => {
        switch (props.userPick) {
            case 'scissors':
                return props.computerPick > 5 ? 'rock' : 'paper'
            case 'paper':
                return props.computerPick > 5 ? 'scissors' : 'rock'
            default:
                return props.computerPick > 5 ? 'paper' : 'scissors'
        }
    };

    const winLose = () =>{
        switch(props.userPick) {
            case 'scissors':
                return pcPick() === 'rock'
            case 'paper':
                return pcPick() === 'scissors'
            default:
                return pcPick() === 'paper'
        }
    };


    const setScore = () =>{
        if(!winLose()){
            props.setCounter(true)
        }props.setCounter(false)
    };

    return(
        <div className="step2" onLoad={()=> setScore()}>
            <div className="result">
                <div className="user-pick">
                    {props.userPick && <Option src={props.userPick} class='scale' winLose={(!winLose() && 'win')} />}
                    <span className="yourPick">YOU PICKED</span>
                </div>
                <div className="computer-pick">
                    <Option src={pcPick()} class='scale2' winLose={(winLose() && 'win')} />
                    <span className="housePick">THE HOUSE PICKED</span>
                </div>
            </div>
            <div className="res">
                <span className="you">{`YOU ${(winLose() ? 'LOSE' : 'WIN')}`}</span>
                <button className="play-again" onClick={props.playAgain}>PLAY AGAIN</button>
            </div>
        </div>
    );
};

export default Result;


