import {actions, useStore } from './store'
import TodoList from './store/todo_list';
function App() {

  const [state, dispatch] = useStore()
  // console.log(state);
  const {todos, todoInput} = state;
  
  function handleAddTodo() {
    dispatch(actions.addTodo(todoInput))
  }

  // console.log("todos: ", todos);
  return (
    <div>
      <input 
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