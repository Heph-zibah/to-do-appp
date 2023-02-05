import React, { useState, useEffect } from "react";
import {FcPlus} from 'react-icons/fc'
import {IoIosSunny} from 'react-icons/io'
import Todo from "./components/Todo";
import {db} from './firebase';
import {query,collection, onSnapshot, querySnapshot, updateDoc, doc, addDoc, deleteDoc} from 'firebase/firestore'

function App() {

const [todos, setTodos] = useState([]);
const [input, setInput] = useState('');
// create todo
const createTodo = async (e) => {
  e.preventDefault()

  if(input === '') {
    alert('please enter a valid todo')
    return
  }
  await addDoc(collection(db, 'todos'), {
    text:input,
    ccompleted: false
  })
  setInput('')
}
// read todo
useEffect(() => {
  const q = query(collection(db, 'todos'))
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    let todosArr = []
    querySnapshot.forEach((doc) => {
      todosArr.push({...doc.data(), id: doc.id})
    })
    setTodos(todosArr)
  })
  return unsubscribe
}, [])
// update todo
const toggleComplete  = async (todo) => {
  await updateDoc(doc(db, 'todos', todo.id), {
    completed:!todo.completed
  })
}
// delete todo
const deleteTodo = async (id) => {
  await deleteDoc(doc(db, 'todos', id))
}

  return (
   <>
    <div className="todo__body">
      <div className="todo__head">
        <h3>todo</h3>
        <IoIosSunny className="todo__head--icon"/>
      </div>
     <form onSubmit={createTodo} className="todo__form">
      <input value={input} onChange={(e) => setInput(e.target.value)} className="todo__input" type="text" placeholder="Create a new todo..."/>
      <button><FcPlus/></button>
     </form>
     <ul className="todo__lists">
      {todos.map((todo, index)=> {
       return <Todo key={index} todo={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo}/>
      })}
      
     </ul>
     <div className="todo__actions">
      {todos.length < 1 ? null : <p className="todo__count">{`${todos.length} items left`}</p>}
      
      <div className="todo__act">
        <p>All</p>
        <p>Active</p>
        <p>Completed</p>
      </div>
      <p className="todo__clear">Clear Completed</p>
    </div>
    <div className="todo__act--mobile">
        <p>All</p>
        <p>Active</p>
        <p>Completed</p>
    </div>
    </div>
    
    </>
  );
}

export default App;
