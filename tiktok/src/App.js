import { useEffect, useRef, useState } from "react";
import Content from "./Content";

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

// https://www.youtube.com/watch?v=CVaEWBFpxhc&list=PL_-VfJajZj0UXjlKfBwFX73usByw3Ph9Q&index=30
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
// https://www.youtube.com/watch?v=CVaEWBFpxhc&list=PL_-VfJajZj0UXjlKfBwFX73usByw3Ph9Q&index=30
// import React, { useState } from 'react';

// function App() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');

//   const handleSubmit = () => {
//    console.log(`Name: ${name}, Email: ${email}`);
//   };

//   return (
//     <div style={{ padding: 32 }}>
//       <input
//         value={name}
//         onChange={e => setName(e.target.value)}
//         placeholder="Name"
//       />
//       <input
//         value={email}
//         onChange={e => setEmail(e.target.value)}
//         placeholder="Email"
//       />
//       <button onClick={handleSubmit}>Register</button>
//     </div>
//   );
// }

// export default App;
// https://www.youtube.com/watch?v=CVaEWBFpxhc&list=PL_-VfJajZj0UXjlKfBwFX73usByw3Ph9Q&index=30
// function App() {
//   const [name, setName] = useState('');

//   return (
//     <div style={{ padding: 32 }}>
//       <input
//         value={name}
//         onChange={e => setName(e.target.value)}
//       />
//       <button onClick={() => setName('Nguyen Van BBB')}>Change</button>
//     </div>
//   );
// }

// export default App;

// https://www.youtube.com/watch?v=CVaEWBFpxhc&list=PL_-VfJajZj0UXjlKfBwFX73usByw3Ph9Q&index=30
// const courses = [
//   {
//     id: 1,
//     name: 'HTML',
//     coin: 200,
//     description: 'Learn HTML to build websites'
//   },
//   {
//     id: 2,
//     name: 'CSS',
//     coin: 300,
//     description: 'Learn CSS to style your websites'
//   },
//   {
//     id: 3,
//     name: 'Javascript',
//     coin: 400,
//     description: 'Learn Javascript to create interactive websites'
//   }
// ]

// // function App(){
// //   const [checked, setChecked] = useState(2)
// //   // console.log(checked)
// //   function handleSubmit(){
// //     console.log({id: checked})
// //   }
// //   return (
// //     <div style={{ padding: 32 }}>
// //     {
// //       courses.map(
// //         course => (
// //           <div key={course.id}>
// //             <input
// //               type="radio"
// //               checked = {checked===course.id}
// //               onChange={()=> setChecked(course.id)}
// //             />
// //             {course.name}
// //             <button onClick={handleSubmit}>Register</button>
// //           </div>
// //         )
// //     )
// //     }
// //     </div>
// //   )
// // }

// function App(){
//   const [checked, setChecked] = useState([])
//   console.log(checked)
//   function handleChecked(id){
//     setChecked(
//       checked => {
//         if(checked.includes(id)){
//           return checked.filter(item => item!== id)
//         }else{
//           return [...checked, id]
//         }
//       }
//     )
//   }
//   function handleSubmit(){
//     console.log({id: checked})
//   }
//   return (
//     <div style={{ padding: 32 }}>
//     {
//       courses.map(
//         course => (
//           <div key={course.id}>
//             <input
//               type="checkbox"
//               checked = {checked.includes(course.id)}
//               onChange={()=> handleChecked(course.id)}
//             />
//             {course.name}
//             <button onClick={handleSubmit}>Register</button>
//           </div>
//         )
//     )
//     }
//     </div>
//   )
// }
// function App(){
//   const [jobList, setJobList] = useState(()=>JSON.parse(localStorage.getItem('jobList'))?? [])
//   const [job, setJob] = useState()
//   console.log(jobList)
//   function handleSubmit(){
//     setJobList(prev => {
//       var newJobs = [...prev, job]
//       const jsonJobs = JSON.stringify(newJobs)
//       localStorage.setItem('jobList', jsonJobs)
//       return newJobs
//     })
//     setJob('')
//   }
//   return (
//     <div style={{ padding: 32 }}>

//       <input
//         value={job}
//         onChange={e => setJob(e.target.value)}
//         placeholder="Job Name"
//       />
//       <button onClick={handleSubmit}>Add</button>
//       <ul>
//         {jobList.map((job, index) => (
//           <li key={index}>{job}</li>
//         ))}
//       </ul>

//     </div>
//   )
// }

// function App() {
//   const [show, setShow] = useState(false);
//   return (
//     <div style={{ padding: 32 }}>
//     <button onClick={()=>setShow(!show)}>Toggle</button>
//       {show && <Content/>}
//     </div>
//   )
// }

// function App() {
//   const [show, setShow] = useState(false);
//   return (
//     <div style={{ padding: 32 }}>
//       <button onClick={() => setShow(!show)}>Toggle</button>
//       {show && <Content />}
//     </div>
//   );
// }

// useRef() hook
// function App() {
//   const [count, setCount] = useState(60)
//   const timerId = useRef()
//   const preCount = useRef()
//   const h1Ref = useRef()

//   useEffect(() => {
//     preCount.current = count
//   }, [count])

//   useEffect(() => {
//     console.log(h1Ref.current)
//     const rect = h1Ref.current.getBoundingClientRect()
//     console.log('Rect:', rect)
//   })

//   const handleStart = () => {
//     timerId.current = setInterval(() => {
//       setCount(prevCount => prevCount - 1)
//     }, 1000)

//     console.log('Start =>', timerId.current)
//   }

//   const handleStop = () => {
//     clearInterval(timerId.current)
//     console.log('Stop =>', timerId.current)
//   }
//   console.log(count, preCount.current)
//   return (
//     <div style={{ padding: 20 }}>
//       <h1 ref={h1Ref}>{count}</h1>
//       <button onClick={handleStart}>Start</button>
//       <button onClick={handleStop}>Stop</button>
//     </div>
//   )
// }

//============================================
// React.memo() HOC

// 1. memo() -> Higher Order Component (HOC)
// 2. useCallback()

// Hooks
// HOC
// Render props

function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ padding: "10px 32px" }}>
      <Content count={count} />
      <h1>{count}</h1>
      <button onClick={increase}>Click me!</button>
    </div>
  );
}

export default App;
