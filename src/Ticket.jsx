import TicketNum from "./TicketNum";

export default function Ticket({nums}){
    // let ticketNum=nums.map((num)=>{return num});
    return (
        <div>
            {nums.map((ticket, idx)=> <TicketNum num={ticket} key={idx}></TicketNum>)}
        </div>
    )
}