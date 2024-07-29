// import { useState } from 'react';

// export default function Counter() {
//   const [count, setCount] = useState(0);
//   const incrementCallback = () => {
//     // dùng callback
//     setCount(prevCount => prevCount + 1);
//     setCount(prevCount => prevCount + 1);
//     setCount(prevCount => prevCount + 1);

//   }
//   const increment = () => {
//     // dùng thông thư��ng
//     setCount(count + 1);
//     setCount(count + 1);
//     setCount(count + 1);
//   }

//   return (
//     <div className='App' style={{ padding:20}}>
//       <h1>Counter: {count}</h1>
//       <button onClick={increment}>Increment +1</button>
//       <button onClick={incrementCallback}>Increment +3</button>

//     </div>
//   );
// }
//https://react.dev/reference/react/useState
// import { useState } from 'react';

// export default function Counter() {
//   const [age, setAge] = useState(42);

//   function increment() {
//     setAge(age + 1);
//   }

//   return (
//     <>
//       <h1>Your age: {age}</h1>
//       <button onClick={() => {
//         increment();
//         increment();
//         increment();
//       }}>+3</button>
//       <button onClick={() => {
//         increment();
//       }}>+1</button>
//     </>
//   );
// }

// import { useState } from "react";
// export default function Counter() {
//   const [info, setInfor] = useState({
//     name: "John",
//     arge: 42,
//     address: "123 Main St",
//   });
//   const handleInfo = () => {
//     setInfor({ ...info, bio: "osk ad" });
//   };
//   return (
//     <div className="App" style={{ padding: 20 }}>
//       <h1>Counter: {JSON.stringify(info)}</h1>
//       <button onClick={handleInfo}>Update infor</button>
//     </div>
//   );
// }


// import React, { useState } from 'react';

// const gifts = [
//   'CPU i9',
//   'RAM 32GB RGB',
//   'RGB Keyboard'
// ];

// function App() {
//   const [gift, setGift] = useState('');

//   const randomGift = () => {
//     const index = Math.floor(Math.random() * gifts.length);
//     setGift(gifts[index]);
//   };

//   return (
//     <div style={{ padding: 32 }}>
//       <h1>{gift || 'Chưa có phần thưởng'}</h1>
//       <button onClick={randomGift}>Lấy thưởng</button>
//     </div>
//   );
// }
// export default App;

import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
   console.log(`Name: ${name}, Email: ${email}`);
  };

  return (
    <div style={{ padding: 32 }}>
      <input 
        value={name} 
        onChange={e => setName(e.target.value)} 
        placeholder="Name"
      />
      <input 
        value={email} 
        onChange={e => setEmail(e.target.value)} 
        placeholder="Email"
      />
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
}

export default App;
