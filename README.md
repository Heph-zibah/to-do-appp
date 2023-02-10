# Frontend Mentor - Todo app solution

This is a solution to the [Todo app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add new todos to the list
- Mark todos as complete
- Delete todos from the list
- Filter by all/active/complete todos
- Clear all completed todos
- Toggle light and dark mode
- **Bonus**: Drag and drop to reorder items on the list

### Screenshot

![](./screenshot.jpg)
### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://todo-app-six-tau-35.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

```css
.proud-of-this-css {
  color: papayawhip;
}
```
```js
return (
   <>
    <div className={`wrapper ${theme}`}>
    <div className="todo__body">
      <CreateTodo theme={theme} setTheme={setTheme}/>
     <ul className="todo__lists">
      {todos.filter(FILTER_MAP[filter]).map((todo, index)=> {
       return <Todo key={index} todo={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo}/>
      })}
     </ul>
     
     <FilterSection todos={todos} setTodos={setTodos}  filterList={filterList} setFilterStatus={setFilterStatus}/>
    </div>
    
    </div>
    </>
  );
```


### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

### Useful resources

- [MUO](https://www.makeuseof.com/how-to-add-dark-mode-to-a-react-application/) - This helped me for theme setting. I really liked this pattern and will use it going forward.
- [Developer Mozilla](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_filtering_conditional_rendering#back_to_the_filter_buttons) - This helped me for filtering the buttons. I really liked this pattern and will use it going forward.
- [Ayush Agarwal Blogs](https://blogs.ayushdev.com/hide-firebase-api-keys-in-reactjs-project-using-environment-variables) - This is an amazing article which helped me finally understand how to hide API KEYS in .env file. I'd recommend it to anyone still learning this concept.

## Author

- Website - [Oluwatosin A Daramola](https://medium.com/@oluwatosinhephzibah)
- Frontend Mentor - [@Heph-zibah](https://www.frontendmentor.io/profile/Heph-zibah)
- Twitter - [@undaunted_pen](https://twitter.com/undaunted_pen)

## Acknowledgments

