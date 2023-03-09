import React, {useState} from 'react';
import ToDoListElement from "./ToDoListElement";
const ToDoList = () => {
    type listelement={
        name:string,
        desc:string
    }
    const [Name,SetName]=useState('')
    const[desc,Setdesc]=useState('')
    const[list,Setlist]=useState<listelement[]>([])
    const AddElementInList=()=>
    {
        Setlist([...list,{
            name:Name,
            desc:desc,
        }])
        SetName('')
        Setdesc('')
    }
    const OnDeleteClick = (index:number) => {
        const filtered = list.filter((el, i) => i !== index);
        Setlist(filtered);
    }
    return (
        <div>
            <div>
            <input
                type={"text"}
                value={Name}
                    onChange={(e) => SetName(e.target.value)}
                />
            <input
                type={"text"}
                value={desc}
                onChange={(e)=>Setdesc(e.target.value)}/>
            </div>
            <div>
                <button onClick={()=>AddElementInList()}>
                    Добавить в список
                </button>
            </div>
            <div>
                {list.map((el: listelement, i: number) =>
                    <ToDoListElement
                        name={el.name}
                        desc={el.desc}
                        onDeleteClick={()=>OnDeleteClick(i)}
                        key={i} />
                )}
            </div>
        </div>
    );
};

export default ToDoList;