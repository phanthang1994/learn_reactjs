import {actions, useStore } from './store'
import TodoList from './store/todo_list';
import { useRef } from 'react';
function App() {

  const [state, dispatch] = useStore()
  // console.log(state);
  const {todos, todoInput} = state;
  const ref = useRef()
  function handleAddTodo() {
    dispatch(actions.addTodo(todoInput))
    dispatch(actions.setTodoInput(''))
    ref.current.focus() // focus on input field when add todo button is clicked  // ref.current.focus() will set focus on the input field when the component is rendered for the first time.
  }
 
  // console.log("todos: ", todos);
  return (
    <div>
      <input 
        ref={ref}
        value={todoInput}
        placeholder='Enter todo...'
        onChange={
          e => {
            dispatch(actions.setTodoInput(e.target.value))
          }
        }
      />
      <button onClick={handleAddTodo}>Add Todo</button>
     <TodoList todo_all_list={todos} dis_patch = {dispatch} actions = {actions}/>
    </div>
  )
}
export default App