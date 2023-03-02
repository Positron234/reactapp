import React, {useState} from 'react';

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
    return (
        <div>
            <div>
            <input
                type={"text"}
                value={Name}
                onChange={(e)=>SetName(e.target.value)}/>
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
                {list.map((el:listelement,i:number)=><div>
                    <div>
                        {el.name}
                    </div>
                    <div>
                        {el.desc}
                    </div>
                    </div>)}
            </div>
        </div>
    );
};

export default ToDoList;