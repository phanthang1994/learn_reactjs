import { useEffect, useState } from "react";

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

const tabs = ["posts", "comments", "albums"];
function Content() {
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState(tabs[0]);
  useEffect(() => {
    console.log(`https://jsonplaceholder.typicode.com/${type}`);
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, [type]);
  return (
    <div>
      {tabs.map((tab, index) => (
        <button
          key={index}
          style={type === tab ? { color: "#fff", backgroundColor: "#333" } : {}}
          onClick={() => setType(tabs[index])}
        >
          {tab}
        </button>
      ))}
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title || post.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Content;
