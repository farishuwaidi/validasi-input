import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './components/Register';
import News from './components/News'
import {BrowserRouter , Routes , Route} from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Register />} />
        <Route exact path='/news' element={<News />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App