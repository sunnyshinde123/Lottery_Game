import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [moves, setMoves]=useState({blue:0, green:0, yellow:0, red:0});
  let [arr, SetArray]=useState(["push In"])


  let updateBlue= ()=>{
    // console.log(moves);
    // setMoves((prevMoves)=>{
    //   return {...prevMoves, blue:prevMoves.blue+1}
    // });
    SetArray(()=>{
      return [...arr, "push out"]
    });
    console.log(arr);
  }

  let updateGreen= ()=>{
    console.log(moves);
    setMoves((prevMoves)=>{
      return {...prevMoves, green:prevMoves.green+1}
    });
  }

  let updateYellow= ()=>{
    console.log(moves);
    setMoves((prevMoves)=>{
      return {...prevMoves, yellow:prevMoves.yellow+1}
    });
  }

  let updateRed= ()=>{
    console.log(moves);
    setMoves((prevMoves)=>{
      return {...prevMoves, red:prevMoves.red+1}
    });
  }


  return (
    <>
    <h3>Ludo Board</h3>\
    <h5>{arr}</h5>
    <div>
      <p>Blue Moves : {moves.blue}</p>
      <button onClick={updateBlue} style={{backgroundColor:"blue"}}>+1</button>
      <p>Green Moves : {moves.green}</p>
      <button style={{backgroundColor:"green"}} onClick={updateGreen}>+1</button>
      <p>Yellow Moves : {moves.yellow}</p>
      <button style={{backgroundColor:"yellow"}} onClick={updateYellow}>+1</button>
      <p>Red Moves : {moves.red}</p>
      <button style={{backgroundColor:"red"}} onClick={updateRed}>+1</button>
    </div>  
    </>
  )
}

export default App
