import { useState , useEffect } from 'react'

import { TodoProvider } from './Contexts'
import './App.css'
import  TodoForm  from './Components/TodoForm'
import TodoItems from './Components/TodoItems'

function App() {
  const [todos, setTodos] = useState([])
  
  // add todo
  const addTodo = (todo) =>{
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev] )
  }

  // update Todo
  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
    
  }

  // delete Todo
  const deleteTodo = (id)  => {
    setTodos((prev) => prev.filter((todo) => todo.id !==id)) 
  }
  
  // Toggle completed or not

  const toggleComplete = (id) => { 
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed} : prevTodo))
  }

  // lean Local storage in the same project 

   useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if(todos && todos.length > 0){
      setTodos(todos)
    }
  }, [])

  useEffect(() =>{
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])




  return (

    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }} >

      <div className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  rounded-xl  min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-3xl font-bold text-center mb-8 mt-2">Manage Your Tasks </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">

            {/*Loop and Add TodoItems here */}

            {todos.map((todo) =>(
              <div key={todo.id}
              className='w-full'
              >

                <TodoItems todo={todo} /> 
              </div>

            ))}



          </div>
        </div>
      </div>

    </TodoProvider>
  )
}

export default App
