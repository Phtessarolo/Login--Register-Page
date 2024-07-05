import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
function App() {


  return (
    <>
      <Navbar />
      <Route path='/' element={<Home />} />

    </>
  )
}

export default App
