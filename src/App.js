import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Component/About/About';
import Home from './Component/Home/Home';
import Login from './Component/Login';
import Register from './Component/Register';
import Footer from './Component/Shared/Footer';
import Header from './Component/Shared/Header';


function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
