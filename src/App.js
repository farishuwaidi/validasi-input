import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './components/Register';
import News from './components/News'
import NewsFC from './components/News FC/Index'
import {BrowserRouter , Routes , Route} from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Register />} />
        <Route exact path='/news' element={<News />} />
        <Route exact path='/newsfc' element={<NewsFC />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App