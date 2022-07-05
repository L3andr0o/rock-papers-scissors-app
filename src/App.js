import './App.css';
import Scoreboard from './components/Scorerboard';
import Content from './components/Content';
import { useState } from 'react';

function App() {

  const [show, setShow] = useState(true);
  const [option, setOption] = useState();
  const [pcPick, setPcpick] = useState();
  const [counter, setCounter] = useState(0);

  const click = (e)=>{
    setShow(false);
    setOption(e.target.id);
    const random = (Math.random() * 10 + 1).toFixed(0);
    setPcpick(random);
  };

  const playAgain = () =>{
    setShow(true);
  };

  const updateScore = (adition) =>{
    if(adition) setCounter(counter + 1);
    if(!adition && counter > 0)setCounter(counter - 1);
  }


  return (
    <div className="App">
      <Scoreboard counter={counter}/>
      <Content 
        cond={show}
        click={(e)=> click(e)}
        userPick={option}
        computerPick={pcPick}
        playAgain={playAgain}
        setCounter={updateScore}
      />
    </div>
  );
}

export default App;
