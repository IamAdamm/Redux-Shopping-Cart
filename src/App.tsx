import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Shop from './Pages/Shop';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/shop' element={<Shop />}/>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
