import React from 'react';
import Option from './Option';
import '../stylesheets/main.css';

function Main(props){
    return(
        <div className='Main'>
            <div className='Main__top'>
                <Option 
                    src='paper'
                    click={props.click}
                />
                <Option 
                    src='scissors'
                    click={props.click}
                />
            </div>
            <div className='Main__bottom'>
                <Option 
                    src='rock'
                    click={props.click}
                />
            </div>
        </div>
    );
};

export default Main;
