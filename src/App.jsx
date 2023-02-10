import React, { useState, useEffect } from "react";
import {FcPlus} from 'react-icons/fc'
import {IoIosSunny} from 'react-icons/io'
import Todo from "./components/Todo";
import {db} from './firebase';
import {query,collection, onSnapshot, querySnapshot, updateDoc, doc, addDoc, deleteDoc} from 'firebase/firestore'
import CreateTodo from "./components/CreateTodo";
import FilterSection from "./components/FilterSection";

const FILTER_MAP = {
  All: () => true,
  Active: (toddo) => !toddo.completed,
  Completed: (toddo) => toddo.completed
};

const FILTER_NAMES = Object.keys(FILTER_MAP);



function App() {

const [todos, setTodos] = useState([]);
const [input, setInput] = useState('');
const [filter, setFilter] = useState('All');

// const todosNoun = todos.length !== 1 ? 'items' : 'item';

// read todo
useEffect(() => {
  const q = query(collection(db, 'todos'));
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    let todosArr = [];
    querySnapshot.forEach((doc) => {
      todosArr.push({ ...doc.data(), id: doc.id });
    });
    setTodos(todosArr);
  });
  return () => unsubscribe();
}, []);

// update todo
const toggleComplete = async (todo) => {
  await updateDoc(doc(db, 'todos', todo.id), {
    completed: !todo.completed,
  });
};

// delete todo
const deleteTodo = async (id) => {
  await deleteDoc(doc(db, 'todos', id));
};
const [theme, setTheme] = useState('dark')

const [filterStatus, setFilterStatus] = useState("");


useEffect(() => {
  document.body.className = theme
}, [theme])

  return (
   <>
    <div className={`wrapper ${theme}`}>
    <div className="todo__body">
      <CreateTodo theme={theme} setTheme={setTheme}/>
     <ul className="todo__lists">
      {todos.map((todo, index)=> {
       return <Todo key={index} todo={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo}/>
      })}
     </ul>
     
     <FilterSection todos={todos} setTodos={setTodos} setFilterStatus={setFilterStatus}/>
    </div>
    
    </div>
    </>
  );
}

export default App;
