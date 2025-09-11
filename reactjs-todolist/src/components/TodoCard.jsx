import React from 'react'

export default function TodoCard({ todo, handleEditTodos, handleUpdateTodos, handleFinishEdit, handleRemoveTodos, handleToggleComplete}) {
    return (
        <li className={`todoItem ${todo.color} ${todo.completed ? "completed" : ""}`}>
            <button
                className={`checkButton ${todo.completed ? 'checked' : ''}`}
                onClick={() => handleToggleComplete(todo.id)}
            >
                <i className={`fa-solid ${todo.completed ? 'fa-circle-check' : 'fa-circle'}`}></i>
            </button>

            {todo.isEditing ? (
                <input 
                    type = "text"
                    value={todo.text}
                    onChange={(e) => handleUpdateTodos(todo.id, e.target.value)}
                    onBlur={ () => handleFinishEdit(todo.id)}
                    autoFocus
                    onKeyDown={(e) => e.key === "Enter" && handleFinishEdit(todo.id)}
                />
            ) : (
                <p style={{ textDecoration: todo.completed ? "line-through" : "none"}}>
                {todo.text}
                </p>

            )}
            <div className='actionsContainer'>
                <button onClick={() => handleEditTodos(todo.id) }>
                    <i className="fa-regular fa-pen-to-square"></i>
                </button>
                <button onClick={()=> handleRemoveTodos(todo.id) }>
                    <i className="fa-solid fa-trash-can"></i>
                </button>
            </div>
        </li>
    )
}
