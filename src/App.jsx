import './App.css'
import Menu from './components/Menu/Menu'
import React from 'react'
import Sebas from './components/Sebas/Sebas'
import Error from './components/Error/Error'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";  


class App extends React.Component {

  render()
  {
    return (
      <>
      <Navbar/>
      <div classname = "app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Menu />} />
            <Route path='*' element={<Error />} />
            <Route path="/Sebas" element={<Sebas/>} />
          </Routes>
        </BrowserRouter>
      </div>
      </>
    )
  }
}

export default App
