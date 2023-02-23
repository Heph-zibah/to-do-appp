import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Todo from "./components/Todo";
import {db} from './firebase';
import {query,collection, onSnapshot, querySnapshot, updateDoc, doc, deleteDoc} from 'firebase/firestore'
import CreateTodo from "./components/CreateTodo";
import FilterSection from "./components/FilterSection";
import FilterButton from "./components/FilterButton";

// Defining filter: giving each filter a unique name and behaviour using object.keys()
const FILTER_MAP = {
  All: () => true,
  Active: (todo) => !todo.completed,
  Completed: (todo) => todo.completed
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

// APP.JS
function App() {

const [todos, setTodos] = useState([]);
const [filterStatus, setFilterStatus] = useState([]);

useEffect(() => {
  localStorage.setItem('dataKey', JSON.stringify(todos));
}, [todos]);


// Set Theme
const [theme, setTheme] = useState('dark')
useEffect(() => {
  document.body.className = theme
}, [theme])

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

// Filter Todo
const [filter, setFilter] = useState('All');
const [active, setActive] = useState(null);
const filterList = FILTER_NAMES.map((name) => (
  <FilterButton 
  key={name} 
  name={name}
  isPressed={name === filter}
  setFilter={setFilter}
  className={active === name ? 'active' : ''}
  onClick={() => setActive(name)}/>
));

  return (
   <>
    <div className={`wrapper ${theme}`}>
      <div className="todo__body">
        {/* Create Todo */}
        <CreateTodo theme={theme} setTheme={setTheme}/>
        {/* Todo List */}
        <main>
          <ul className="todo__lists">
          {todos.filter(FILTER_MAP[filter]).map((todo, index)=> {
          return <Todo key={index} todo={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo}/>
          })}
          </ul>
          {/* Filter Todo */}
          <FilterSection todos={todos} setTodos={setTodos}  filterList={filterList} setFilterStatus={setFilterStatus}/>
        </main>
      </div>
      <footer><p>Challenge by <Link to="https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW/hub">Frontend Mentor</Link>. Coded by <Link to="https://www.frontendmentor.io/profile/Heph-zibah">Oluwatosin Abigail Daramola</Link>.</p></footer>
    </div>
    </>
  );
}

export default App;
