import React,{useState,useReducer} from 'react'

function reducer(todos, action){
    switch(action.type){
        case 'add-todo':
            return [...todos, newToDo(action.payload.name)]
        case 'toggle-todo':
            return todos.map(todo =>{
                if(todo.id === action.payload.id){
                    return {...todo, complete: !todo.complete}
                }
                return todo
            })
        case 'delete-todo':
            return todos.filter(todo => todo.id !== action.payload.id)
        default:
            return todos
    }
}

function newToDo(name){
    return {id: Date.now(), name: name, complete: false}
}

function ToDoList() {
    const[todos, dispatch] = useReducer(reducer,[])
    const[name, setName] = useState('')

    function handlesubmit(e){
        e.preventDefault()
        dispatch({type:'add-todo', payload: {name: name}});
        setName('')
    }
    console.log(todos)
  return (
    <>
        <div style={{textAlign:'center'}}>To Do List</div>
        <form onSubmit={handlesubmit}>
            <input type="text" value={name} onChange={e => setName(e.target.value)}/>

        </form>
        {todos.map(todo =>{
            // return <ToDo key={todo.id} todo = {todo}/>
            return (
                <div key={todo.id}>
                    <span style={{color: todo.complete ? '#AAA' : '#000'}}>{todo.name}</span>
                    <button onClick={()=> dispatch({type:'toggle-todo', payload:{id: todo.id}})}>done</button>
                    <button onClick={()=> dispatch({type:'delete-todo', payload:{id: todo.id}})}>delete</button>
                </div>
            )
        })}
    </>
  )
}

export default ToDoList