// import { useEffect, useState } from 'react';

// // container service component // fetching API 
// const UserContainer = () =>{
//   const [users, setUser] = useState([]);

//   useEffect(() => {
//     fetch('https://dummyjson.com/todos?limit=10&skip=80')
//       .then(response => {
//         // if (!response.ok) {
//         //   throw new Error('Network response was not ok');
//         // }
//         return response.json();
//       })
//       .then(data => {
//         // if (!data.todos || !Array.isArray(data.todos)) {
//         //   throw new Error('Data structure is not as expected');
//         // }
//         setUser(data.todos);
//       })
//       .catch(error => console.error('Error fetching todos: ' + error));
//   }, []);

//     return <UserList users={users} />;
// }

// const groupedTodo = (todos) =>{
//     //console.log(todos);
//     const groupedTodo = {};
//     todos.forEach(todo => {
//         const { userId } = todo;
//         if(!groupedTodo[userId]){
//           groupedTodo[userId] = [];
//         }
//         groupedTodo[userId].push(todo);
//     });
//     return groupedTodo;
// }

// // presentation component 
// const UserList = ({users}) =>{
//   const newTodos = groupedTodo(users);
//   console.log(newTodos);
//   return(
//     <ul>
//     {users.map(user=> (
//       <li key={user.id}>{user.todo}</li>
//     ))}
//   </ul>
//   )
// };

// export default UserContainer;

import { useEffect, useState } from 'react';

// Container service component for fetching API
const UserContainer = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/todos?limit=10&skip=80')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (!data.todos || !Array.isArray(data.todos)) {
          throw new Error('Data structure is not as expected');
        }
        setTodos(data.todos);
      })
      .catch(error => console.error('Error fetching todos: ' + error));
  }, []);

  return <TodoList todos={todos} />;
};

// Presentation component
const TodoList = ({ todos }) => {
  // Group todos by userId
  const groupedTodos = {};
  todos.forEach(todo => {
    const { userId } = todo;
    if (!groupedTodos[userId]) {
      groupedTodos[userId] = [];
    }
    groupedTodos[userId].push(todo);
  });

  return (
    <div>
      {Object.keys(groupedTodos).map(userId => (
        <UserTodos key={userId} userId={userId} todos={groupedTodos[userId]} />
      ))}
    </div>
  );
};

// Component to render todos of a single user
const UserTodos = ({ userId, todos }) => {
  return (
    <div className="user-todos">
      <h3>User {userId}</h3>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserContainer;