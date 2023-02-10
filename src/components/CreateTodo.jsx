import React, {useEffect, useState} from 'react'
import {FcPlus} from 'react-icons/fc'
import {IoIosSunny} from 'react-icons/io'
import {collection, addDoc} from 'firebase/firestore'
import {db} from '../firebase';
const CreateTodo = ({theme, setTheme}) => {

  const [input, setInput] = useState('');
  // const [theme, setTheme] = useState('dark')

  // // set theme
  // const toggleTheme = () => {
  //   if (theme === 'dark') {
  //     setTheme('light')
  //   }else {
  //     setTheme('dark')
  //   }
  // }

  // useEffect(() => {
  //   document.body.className = theme
  // }, [theme])
  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light')
    }else {
      setTheme('dark')
    }
  }
  // create todo

const createTodo = async (e) => {
  e.preventDefault()

  if(input === '') {
    alert('please enter a valid todo')
    return
  }
  await addDoc(collection(db, 'todos'), {
    text:input,
    completed: false
  })
  setInput('')
}
  return (
    <>
    <header className={`todo__head ${theme}`}>
      <h3>todo</h3>
      <IoIosSunny className="todo__head--icon" onClick={toggleTheme}/>
    </header>
      <form onSubmit={createTodo} className="todo__form">
      <input value={input} onChange={(e) => setInput(e.target.value)} className="todo__input" type="text" placeholder="Create a new todo..."/>
      <button><FcPlus/></button>
      </form>
  </>
  )
}

export default CreateTodo