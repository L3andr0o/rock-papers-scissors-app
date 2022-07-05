import React from "react";
// import { useState } from "react";
import Main from './Main';
import Result from "./Result";

function Content(props){

    return(
        <>
            {props.cond ? <Main click={props.click}/> 
            :
            <Result 
            userPick={props.userPick} 
            computerPick={props.computerPick} 
            playAgain={props.playAgain}
            setCounter={props.setCounter}
            />}
        </>
    );
};

export default Content;