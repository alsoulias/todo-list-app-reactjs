import { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
  const [todos, setTodos] = useState([])
  const [todoValue, setTodoValue] = useState('')

    function persistData(newList){
      localStorage.setItem('todos', JSON.stringify({todos:newList}))
    }
    function handleAddTodos(newTodo){
      const newToDoList = [...todos, newTodo]
      persistData(newToDoList)
      setTodos(newToDoList)
    }

    function handleRemoveTodos(index){
      //creating new list using filter and removing the todo that matches the given index
      const newTodoList = todos.filter((todo, todoIndex) => {
        return todoIndex !== index
      })
      persistData(newTodoList)
      setTodos(newTodoList) //call setTodos function with the new list 
    }

    function handleEditTodos(index){
      const valueToBeEdited = todos[index]
      setTodoValue(valueToBeEdited)
      handleRemoveTodos(index)
    }

    useEffect(() => {if (!localStorage){
      return
    }
      let localTodos = localStorage.getItem('todos')
      if (!localTodos){
        return
      }
      localTodos = JSON.parse(localTodos).todos
      setTodos(localTodos)
    
    }, []) //[] dependency array so this function will run on every page refresh

  return (
    <>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos} />
      <TodoList handleEditTodos={handleEditTodos} handleRemoveTodos={handleRemoveTodos} todos={todos} /> 
    </>
  )
}

export default App
