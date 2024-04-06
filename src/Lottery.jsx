import { useState } from "react"
import { randomNum, sum } from "./randomNum";

export default function Lottery(){
    let [lottery, setLottery]=useState(randomNum(3));
    let isWinner=sum(lottery)==15;

    let buyTicket = () =>{
        setLottery(randomNum(3));
    }
    return (
        <>
            <h1>Lottery Game</h1>
            <div>
                <span>{lottery.map((num)=> num )}</span>
            </div>
            <br />
            <button onClick={buyTicket}>Buy a Ticket</button>
            <br />
            <h3>{isWinner ? "Congratulation, You won Game" : ""}</h3>
        </>
    )
}