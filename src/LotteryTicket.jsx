import { useState } from "react"
import Ticket from "./Ticket"
import { randomNum, sum } from "./randomNum";

export default function LotteryTicket(n=3, isWinningSum=15){
    let [lottery, setLottery]=useState(randomNum(n));

    let isWinning=sum(lottery) == isWinningSum;

    let buyATicket = () =>{
        setLottery(randomNum(n));
    }

    return (
        <>
        <h1>Lottery Game</h1>
        <Ticket nums={lottery}></Ticket>
        <br />
        <button onClick={buyATicket}>Buy a Ticket</button>
        <br />
        <h3>{isWinning && "Congratulation, You won lottery"}</h3>
        </>
    )
}