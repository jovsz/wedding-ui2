import { useState } from 'react'
import reactLogo from './assets/react.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-red-500" />
      
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
