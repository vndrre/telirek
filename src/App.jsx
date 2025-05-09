import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './views/HomePage'
import AboutPage from './views/AboutPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          
          <Route index path="/" element={ <HomePage /> } />
          <Route path='/meist' element={ <AboutPage /> } />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
