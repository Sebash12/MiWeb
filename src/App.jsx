import './App.css'
import Menu from './components/Menu'
import Eduard from './components/Eduard'
import React from 'react'
import Sebas from './components/Sebas'
import { BrowserRouter, Routes, Route } from "react-router-dom";  


class App extends React.Component {

  render()
  {
    return (
      <div classname = "app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Menu />} />
            <Route path="/Eduard" element={<Eduard/>} />
            <Route path="/Sebas" element={<Sebas/>} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
