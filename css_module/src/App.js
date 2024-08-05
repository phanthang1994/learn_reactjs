import "./App.css";
import Heading from "./components/Heading";
import ParagraphModule from "./components/Paragraph";
import GlobalStyles from "./components/GlobalStyles";
import Button from "./components/Button";

function App() {
//   return (
//     <GlobalStyles>
//       <div className="App">
//         <Heading />
//         <ParagraphModule />
//       </div>
//       <div className = 'd-flex'>
//         <p>Item 1</p>
//         <p>Item 2</p>
//       </div>
       
//     </GlobalStyles>
//   );

return(
  <GlobalStyles>
    <div>
      <Button />
    </div>
  </GlobalStyles>
)
}

export default App;
