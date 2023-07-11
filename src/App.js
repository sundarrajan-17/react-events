import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Addevent from './components/Addevent/Addevent'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Events from './components/Events/Events'

const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Events/>}/>
        <Route path="/Addevent" element={<Addevent/>} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App