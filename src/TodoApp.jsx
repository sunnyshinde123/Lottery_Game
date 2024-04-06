import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export function TodoApp(){
    let[addList, setAddList]=useState([{task:"Select Any", id:uuidv4(), isDone:false}])
    let[updateTodo, setUpdateTodo]=useState("");

    let updateList=(event)=>{
        setUpdateTodo(event.target.value);
    }
    let addListIntoTodo =()=>{
        setAddList([...addList, {task:updateTodo, id:uuidv4(), isDone:false}]);
        setUpdateTodo("");
    }
    let deleteList = (id) =>{
        setAddList((prev)=>{  return addList.filter((prev)=> prev.id!=id)});
    }
    let clicktoUpperCase = () =>{
        setAddList((addList)=> addList.map((list)=> {
            return {
                ...list,
                task: list.task.toUpperCase(),
            }
        }));
    }
    let upperCaseList = (id) =>{
        setAddList((prevtodoList)=>(prevtodoList.map((list)=>{
            if(list.id==id){
                return {
                    ...list,
                    task:list.task.toUpperCase(),
                }
            }
            else{
                return list;
            }
        })))
    }
    let style;
    let markAsDone = (id) => {
        setAddList(
            addList.map((list)=>{
                if(list.id==id){
                    return {
                        ...list,
                        isDone:true,
                    }
                }else{
                    return list
                }
            })
        )
    }


    return (
        <>
        <div>
            <input type="text"  placeholder="add tasks" onChange={updateList} value={updateTodo}/>
            <br />
            <button onClick={addListIntoTodo}>Add</button>
            <h3>Todo App</h3>
            <hr />
            <p>List of Todo</p>
            <ul>
                {addList.map((list)=> 
                <li key={list.id}>
                    <span style={list.isDone ? {textDecoration:"line-through"} : {}}>{list.task}</span>
                    &nbsp; &nbsp; &nbsp;
                    <button onClick={()=>deleteList(list.id)}>Delete</button>
                    &nbsp; &nbsp; &nbsp;
                    <button onClick={()=> upperCaseList(list.id)}>UpperCase</button>
                    &nbsp; &nbsp; &nbsp;
                    <button onClick={()=> markAsDone(list.id)}>Mark as Done</button>
                </li>)}
            </ul>
            <br />
            <button onClick={clicktoUpperCase}>UpperCase All</button>
            
        </div>
        </>
    )
}