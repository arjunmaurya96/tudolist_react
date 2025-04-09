import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Form,Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import User from './components/User';
import Displayuser from './components/Displayuser';
import Edituser from './components/Edituser';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
  <>
<BrowserRouter>
<User/>

<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/edituser/:id' element={<Edituser/>}/>
  <Route path='/register' element={<Register/>}/>
  <Route path='/login' element={<Login/>}/>
 
</Routes>
{/* <Footer/> */}
<Displayuser/>
</BrowserRouter>  
  
  </>
  );
}

export default App;
