import { useState } from 'react'
import './App.css'
import TriviaQuestion from './components/TriviaQuestions'

function App() {
 const [pageTheme, setPageTheme] = useState({ backgroundColor: "white", color: "black" });

  return (
    <div style={pageTheme}>
      
     <TriviaQuestion setPageTheme={setPageTheme} />
      
    </div>
  )
}

export default App
