import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './views/HomePage'
import ReferentsPage from './views/ReferentsPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={ <HomePage /> } />
          <Route path="/referentsid" element={ <ReferentsPage /> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
