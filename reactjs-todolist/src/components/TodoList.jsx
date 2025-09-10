import React from 'react'
import TodoCard from "./TodoCard"

export default function TodoList(props) {
    const {todos, handleEditTodos, handleUpdateTodos, handleFinishEdit, handleRemoveTodos} = props
    return (
        <ul className='main'>
            {todos.map((todo) => (
                <TodoCard
                    key={todo.id}
                    todo={todo}
                    handleEditTodos={handleEditTodos}
                    handleUpdateTodos={handleUpdateTodos}
                    handleFinishEdit={handleFinishEdit}
                    handleRemoveTodos={handleRemoveTodos}
                />   
            ))}
        </ul>
    )
}
