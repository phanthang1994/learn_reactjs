import { useContext } from 'react'  
import { ThemeContext } from './App'  

function Paragraph() {  
  const theme = useContext(ThemeContext)  

  return (  
    <p className={theme}>  
      Context provides a way to pass data through  
    </p>  
  )  
}  

export default Paragraph