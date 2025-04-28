import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './views/HomePage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={ <HomePage /> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
