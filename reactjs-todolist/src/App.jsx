import { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
  const [todos, setTodos] = useState([])

  // Persist todos to localStorage
  function persistData(newTodoList){
    localStorage.setItem('todos', JSON.stringify(newTodoList))
  }

  // Add a new todo item
  function handleAddTodos(newTodo){
    const newTodoList = [...todos, { id: Date.now(), text: newTodo, isEditing: false }]
    setTodos(newTodoList)
    persistData(newTodoList)
  }

  // Remove a todo by its id
  function handleRemoveTodos(id){
    const newTodoList = todos.filter(todo => todo.id !== id)
    setTodos(newTodoList)
    persistData(newTodoList)
  }

  // Move a todo into edit mode
  function handleEditTodos(id){
    const newTodoList = todos.map(todo => 
      todo.id === id ? { ...todo, isEditing: true } : todo
    )
    setTodos(newTodoList)
    persistData(newTodoList)
  }

  // Update the text while editing
  function handleUpdateTodos(id, newText){
    const newTodoList = todos.map(todo => 
      todo.id === id ? { ...todo, text: newText } : todo
    )
    setTodos(newTodoList)
    persistData(newTodoList)
  }

  // Turn editing mode off and save changes
  function handleFinishEdit(id){
    const newTodoList = todos.map(todo => 
      todo.id === id ? { ...todo, isEditing: false } : todo
    )
    setTodos(newTodoList)
    persistData(newTodoList)
  }

  // Load todos from localStorage on mount
  useEffect(() => {
    const localTodos = JSON.parse(localStorage.getItem("todos"))
    if (Array.isArray(localTodos)) {
      setTodos(localTodos)
    }
    else{
      setTodos([]) //default if the local storage is corrupted or not an array
    }
  }, [])

  return (
    <>
      <TodoInput handleAddTodos={handleAddTodos} />
      <TodoList 
        todos={todos}
        handleEditTodos={handleEditTodos}  
        handleUpdateTodos={handleUpdateTodos}
        handleFinishEdit={handleFinishEdit}
        handleRemoveTodos={handleRemoveTodos} 
      /> 
    </>
  )
}

export default App
