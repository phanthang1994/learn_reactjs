import React from 'react';

function TodoList({ todo_all_list, dis_patch, actions }) {
  return (
    <ul>
      {todo_all_list.map((todo, index) => (
        <li key={index}>
        {todo}
         <span>
            <i 
            style={{ paddingLeft: 20, cursor: "pointer" }}
            onClick={()=>dis_patch(actions.deleTodo(index))}
            >
            
            &times;
            </i>
         </span>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
