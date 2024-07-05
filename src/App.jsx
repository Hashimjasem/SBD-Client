import { Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Register from './pages/Register';
import Catagories from './pages/Catagories';
import Navbar from './components/Navbar';


function App() {

  return (
    <>
    <Navbar/>
    <Router>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/register' element={<Register />} />
          <Route path='/catagories' element={<Catagories />} />
        </Routes>
    </Router>
    </>
  )
}

export default App
