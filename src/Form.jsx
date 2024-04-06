import { useState } from "react"

export default function Form(){
    let [value, setValue]=useState({
        fullName :"",
        userName :""
    });

    let handleInputElement = (event) =>{
        let fieldname=event.target.name;
        let targetvalue=event.target.value;

        setValue((currData)=>{
            currData[fieldname]=targetvalue;
            return {...currData}
        })

    }
    let submitForm = (event) =>{
        event.preventDefault();
    }
    return(
        <>
        <form action="/action" onSubmit={submitForm}>
            <label htmlFor="fullName">Full Name</label>
            <input type="text" placeholder="enter your name" value={value.fullName} onChange={handleInputElement} id="fullName" name="fullName"/>
            <label htmlFor="userName">User Name</label>
            <input type="text" placeholder="enter your username" value={value.userName} onChange={handleInputElement} id="userName" name="userName"/>
        </form>
        </>
    )
}