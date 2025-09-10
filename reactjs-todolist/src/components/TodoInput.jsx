import { useState } from "react"

export default function TodoInput({handleAddTodos}){
    const [todoValue, setTodoValue] = useState("")
    
    const addTodo = () =>{
        if (todoValue.trim() === "") return //check that it's not an empty string
        handleAddTodos(todoValue.trim())
        setTodoValue("") //clear the input
    }
    return (
        <header>
            <input value={todoValue} 
                onChange={(e) => { setTodoValue(e.target.value)
                }}placeholder="Enter todo... " 
                onKeyDown={(e) => e.key === "Enter" && addTodo()} 
                className="todoInput"
            />
            <button onClick={addTodo}>Add</button>
        </header>
    )
}