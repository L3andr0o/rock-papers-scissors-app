import React from 'react';

function Option(props){
    return(
        <div className={`${props.src} ${props.winLose}`} id={props.class} >
            <div className={`image`} onClick={props.click} id={props.src}>
                <img src={require(`../images/icon-${props.src}.svg`)} 
                alt={props.src} id={props.src}/>
            </div>
        </div>
    );
};

export default Option;

