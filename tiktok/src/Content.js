import { memo, useContext, useEffect, useMemo, useState } from "react";

// function Content() {
//     const [ttile, setTitle] = useState('');
//     useEffect(()=> {
//         console.log('Content component mounted');

//     })
//     return (
//         <div>
//             <h1>Welcome to my React App</h1>
//             <p>This is a simple React app.</p>
//         </div>
//     );
// // }
// function Content() {
//     const [title, setTitle] = useState('');
//     useEffect(()=> {
//         document.title = title; // Set the browser tab title to the input value
//         return () => {
//             document.title = 'TikTok Clone'; // Reset the browser tab title when the component is unmounted
//         }  // Clean up function to prevent memory leaks

//     })
//     return (
//         <div>
//             <input
//             value={title}
//             onChange={e => setTitle(e.target.value)}
//             />

//         </div>
//     );
// }

// 1. useEffect(callback)
//    - Gọi callback mỗi khi component re-render
// 2. useEffect(callback, [])
//    - Chỉ gọi callback 1 lần sau khi component mounted
// 3. useEffect(callback, [deps])

// Translation of comments:
// 1. Call callback every time the component re-renders
// 2. Only call callback once after the component has mounted
// 3. Call callback when the dependencies change
// function Content() {
//   const [title, setTitle] = useState("");
//   const [posts, setPosts] = useState([]);
//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts") // xem lại https://fullstack.edu.vn/learning/javascript-co-ban?id=bd0b4c2f-f927-4a49-9496-91d515393742,
//       .then((response) => response.json())
//       .then((posts) => setPosts(posts) );
//   },[]);

//   return (
//     <div>
//       <input value={title} onChange={(e) => setTitle(e.target.value)} />
//       <ul>
//         {
//             posts.map((post) => (
//               <li key={post.id}>{post.title}</li>
//             ))
//         }
//       </ul>
//     </div>
//   );
// }

// const tabs = ["posts", "comments", "albums"];
// function Content() {
//   const [title, setTitle] = useState("");
//   const [posts, setPosts] = useState([]);
//   const [type, setType] = useState(tabs[0]);
//   useEffect(() => {
//     console.log(`https://jsonplaceholder.typicode.com/${type}`);
//     fetch(`https://jsonplaceholder.typicode.com/${type}`)
//       .then((response) => response.json())
//       .then((data) => setPosts(data));
//   }, [type]);
//   return (
//     <div>
//       {tabs.map((tab, index) => (
//         <button
//           key={index}
//           style={type === tab ? { color: "#fff", backgroundColor: "#333" } : {}}
//           onClick={() => setType(tabs[index])}
//         >
//           {tab}
//         </button>
//       ))}
//       <input value={title} onChange={(e) => setTitle(e.target.value)} />
//       <ul>
//         {posts.map((post) => (
//           <li key={post.id}>{post.title || post.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// const tabs = ["posts", "comments", "albums"];
// function Content() {
//   const [posts, setPosts] = useState([]);
//   const [type, setType] = useState(tabs[0]);
//   const [showGoToTop, setShowGoToTop] = useState(false);
//   useEffect(() => {
//     console.log(`https://jsonplaceholder.typicode.com/${type}`);
//     fetch(`https://jsonplaceholder.typicode.com/${type}`)
//       .then((response) => response.json())
//       .then((data) => setPosts(data));
//   }, [type]);
//   useEffect(() => {
//     window.addEventListener("scroll", () => {
//       console.log(window.scrollY);
//       if (window.scrollY > 200) {
//         setShowGoToTop(true);
//       } else {
//         setShowGoToTop(false);
//       }
//       return () => {
//         window.removeEventListener("scroll");
//       }
//     }
//   );
//   },[]);
//   return (
//     <div>
//       {tabs.map((tab, index) => (
//         <button
//           key={index}
//           style={type === tab ? { color: "#fff", backgroundColor: "#333" } : {}}
//           onClick={() => setType(tabs[index])}
//         >
//           {tab}
//         </button>
//       ))}
//       <ul>
//         {posts.map((post) => (
//           <li key={post.id}>{post.title || post.name}</li>
//         ))}
//       </ul>
//       {showGoToTop && (
//         <button
//           style={{ position: "fixed", right: 20, bottom: 20 }}
//           onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//         >
//           Go to top
//         </button>
//       )}
//     </div>
//   );
// }

// function Content() {
//   const [width, setWidth] = useState(window.innerWidth);
//   useEffect(() => {
//     const handleResize = () => {
//       setWidth(window.innerWidth);
//     }
//     window.addEventListener("resize", handleResize);
//     // clean up function to prevent memory leaks:  // Remove event listener when component unmounts
//     return () => window.removeEventListener("resize", handleResize);
//   },[])
//   return (
//     <div>
//       <h1>
//         {width}
//       </h1>
//     </div>
//   )
// }

// function Content() {
//   const [countdown, setCountdown] = useState(180);
//   useEffect(() => {
//     const timer = setInterval(() => {
//      setCountdown(prev => prev - 1);
//     }, 1000);
//     // clean up function to prevent memory leaks:  // Remove interval when component unmounts
//     return () => clearInterval(timer);
//   })
//   return (
//     <div>
//       <h1>
//         Countdown: {countdown} seconds
//       </h1>
//     </div>
//   )
// }

// const lessons = [
//   {
//     id: 1,
//     name: "ReactJS là gì? Tại sao nên học ReactJS?",
//   },
//   {
//     id: 2,
//     name: "SPA/MPA là gì?",
//   },
//   {
//     id: 3,
//     name: "Arrow function",
//   },
// ];

// function Content() {
//   const [lessonId, setLessoId] = useState(1);

//   useEffect(() => {
//     const handleComment = ({ detail }) => {
//       console.log(detail);
//     };
//     window.addEventListener(`lesson-${lessonId}`, handleComment);
//     return () => {
//       window.removeEventListener(`lesson-${lessonId}`, handleComment);
//     };
//   }, [lessonId]);

//   return (
//     <div>
//       <ul>
//         {lessons.map((lesson) => (
//           <li
//             key={lesson.id}
//             style={{
//               color: lessonId === lesson.id ? "red" : "#333",
//             }}
//             onClick={() => setLessoId(lesson.id)}
//           >
//             {lesson.name}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// function Content() {
//   const [avatar, setAvatar] = useState("");
//   const handlePreviewAvatar = (e) => {
//     const file = e.target.files[0];
//     file.preview = URL.createObjectURL(file)
//     setAvatar(file);
//     e.target.value = null;
//   };
//   useEffect(() => {
    
//     // Clean up function to prevent memory leaks
//     return () =>{avatar && URL.revokeObjectURL(avatar.preview);}

//   }, [avatar]);

//   return (
//     <div>
//       <input type="file" onChange={handlePreviewAvatar} />
//       {
//         avatar && (
//           <img
//             src={avatar.preview}
//             alt="avatar"
//           />
//         )
//       }
//     </div>
//   );
// }
// ====================================================
//useCallback
// function Content({onIncrease}) {
//   console.log("Content component rendered");
//   return (
//    <>
//     <h1>Hello, World!</h1>
//      <button onClick={onIncrease}>Click me!</button>
//    </>
//   );
// }
// ========================================================
// useMemo
// function Content({ onIncrease }) {
//   return (
//     <div>
//       <button onClick={onIncrease}>Increase</button>
//     </div>
//   );
// }
// export default memo(Content);

// function Content({ onIncrease }) {
//   return (
//     <div>
//       <button onClick={onIncrease}>Increase</button>
//     </div>
//   );
// }
// export default Content;

// =========================================================
// useContext
import Paragraph from "./Paragraph"  

function Content() {  
  return (  
    <div>  
      <Paragraph />  
    </div>  
  )  
}  

export default Content