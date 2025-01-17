import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "react";
import Content from "./Content";

// export default function Counter() {
//   const [count, setCount] = useState(0);
//   const incrementCallback = () => {
//     // dùng callback
//     setCount(prevCount => prevCount + 1);
//     setCount(prevCount => prevCount + 1);
//     setCount(prevCount => prevCount + 1);
// console.log(" Chỉ re-gender 1 lần");
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
//useCallback
// function App() {
//   const [count, setCount] = useState(0);

//   const handleIncrease = useCallback( () => {
//     setCount(pre => pre + 1);
//   },[])

//   return (
//     <div style={{ padding: "10px 32px" }}>
//       <Content onIncrease={handleIncrease} />
//       <h1>{count}</h1>

//     </div>
//   );
// }

//========================================
// useMemo
// function App() {
//   const [name, setName] = useState("");
//   const [price, setPrice] = useState("");
//   const [products, setProducts] = useState([]);
//   const nameRef = useRef();

//   const handleSubmit = () => {
//     setProducts([...products, { name, price: +price }]);
//     setName("");
//     setPrice("");
//     console.log(nameRef.current)
//     nameRef.current.focus();
//   };

//   const total = useMemo(() => {
//     const result = products.reduce((result, prod) => {
//       console.log("Tính toán lại...");
//       return result + prod.price;
//     }, 0);
//     return result;
//   }, [products]);

//   console.log(products);
//   return (
//     <div style={{ padding: "10px 32px" }}>
//       <input
//       ref={nameRef}
//         value={name}
//         placeholder="Enter name..."
//         onChange={(e) => setName(e.target.value)}
//       />
//       <br />
//       <input
//         value={price}
//         placeholder="Enter price..."
//         onChange={(e) => setPrice(e.target.value)}
//       />
//       <br />
//       <button onClick={handleSubmit}>Add</button>
//       <br />
//       Total:{total}
//       <ul>
//         {products.map((product, index) => (
//           <li key={index}>
//             {product.name} - {product.price}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// useReducer
// useState
// 1. Init state: 0
// 2. Actions: Up (state + 1) / Down (state - 1)
// useReducer
// 1. Init state: 0
// 2. Actions: Up (state + 1) / Down (state - 1)
// 3. Reducer trả về mới state dựa vào action đã đc kích hoạt ở dispatch
// 4. Dispatch là 1 function để kích hoạt action

// Init state
// const initState = 0;

// //Actions
// const UP_ACTION = "up";
// const DOWN_ACTION = "down";

// ==========================
// Reducer

// const reducer = (state, action) => {
//   console.log('Reducer running')
//   switch (action) {
//     case UP_ACTION:
//       return state + 1
//     case DOWN_ACTION:
//       return state - 1
//     default:
//       throw new Error(`Unhandled action type: ${action.type}`)
//   }
// }
// function App() {
//   const [count, dispatch] = useReducer(reducer, initState)
//     return (
//       <div style={{ padding: "10px 32px" }}>
//        <h1>Count: {count}</h1>
//         <button onClick={() => dispatch(UP_ACTION)}>Up</button>
//         <button onClick={() => dispatch(DOWN_ACTION)}>Down</button>
//       </div>
//     )
//   }

//=====================================================================
// Reducer
// 1. Init state:
// const initState = {
//   job: "",
//   jobList: [],
// };

// // 2. Actions:
// const ADD_JOB = "ADD_JOB";
// const SET_JOB = "SET_JOB";
// const DELETE_JOB = "DELETE_JOB";
// const setJob = payload => {
//   var action =  { type: SET_JOB, payload }
//   return action
// };
// const addJob = payload => {
//   var action = { type: ADD_JOB, payload }
//   return action
// };
// const deleteJob = (payload) => {
//   var action = { type: DELETE_JOB, payload };
//   return action
// };

// // 3. Reducer
// const reducer = (state, action) => {
//   // state: chính là dữ liệu hệ thống initState
//   console.log('Action: ', action);
//   console.log('Prev state: ', state);
//   switch (action.type) {

//     case ADD_JOB:
//       console.log("New State: ", state)
//       return {
//         ...state,
//         jobList: [...state.jobList, action.payload],
//       };

//     case SET_JOB:
//       console.log("New State: ", state)

//       return {
//         ...state,
//         job: action.payload,
//       };

//     case DELETE_JOB:
//       console.log("New State: ", state)
//       const newJobs = [...state.jobList]
//       newJobs.splice(action.payload, 1)
//       var newState = {
//       ...state,
//       jobList: newJobs
//       }
//       return newState;
//     default:
//       throw new Error(`Unhandled action type:`);

//   }
// };

// // 4. Dispatch
// function App() {
//   const [state, dispatch] = useReducer(reducer, initState);
//   console.log("state",state);
//   const imputRef = useRef();

//   const { job, jobList } = state;

//   const handleSubmit = () => {
//     console.log("Job add: ", job)
//     dispatch(addJob(job));
//     dispatch(setJob(""));
//     imputRef.current.focus();
//   }

//   return (
//     <div style={{ padding: "0 20px" }}>
//       <h3>Todo</h3>
//       <input
//       ref={imputRef}
//       value={job} placeholder="Enter todo..."
//       onChange={(e)=>{
//         dispatch(setJob(e.target.value))
//         }
//         } />
//       <button onClick={handleSubmit}>Add</button>
//       <ul>
//         {jobList.map((job, index) => (
//           <li
//           key={index} >
//           {job}
//           <span onClick={() => dispatch(deleteJob(index))}>X</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;

// ================================================================
// useContext
// 1. Create context
// 2. Provider   chứa trong ThemeContext tạo ra bằng createContext()
// 3. Consumer  chứa trong ThemeContext lấy ra bằng useContext(Context)

// CompA => CompB => CompC
// Theme: Dark / Light
// import './App.css';

// export const ThemeContext = createContext()
// console.log("ThemeContext: ", ThemeContext)

// function App() {
//   const [themeState, setThemeState] = useState('dark')

//   const toggleTheme = () => {
//     setThemeState(themeState === 'dark' ? 'light' : 'dark')
//   }

//   return (
//     <ThemeContext.Provider value={themeState}>
//       <div style={{ padding: 20 }}>
//         <button onClick={toggleTheme}>Toggle</button>
//         <Content />
//       </div>
//     </ThemeContext.Provider>
//   )
// }

// =================================================================
// useImperativeHandle tùy chinh ref
import Video from "./Video";

function App() {
  const videoRef = useRef();
  useEffect(() => {
    console.log(videoRef.current);
  });
  const handlePlay = () => {
    videoRef.current.play();
  };
  const handlePause = () => {
    videoRef.current.pause();
  };
  return (
    <div>
      {/* Passing ref={videoRef} to Video component allows 
      us to interact with the video component through the ref */}
      <Video ref={videoRef} />
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
    </div>
  );
}

export default App;
