import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import LoginForm from './Pages/Login';
import TablePage from './Pages/TablePage';
import RegisterPage from './Pages/Register';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <Toaster
  position="top-center"
  reverseOrder={false}
/>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginForm/>}/>
      <Route path='/register' element ={<RegisterPage/>}/>
      <Route path='/table' element ={<TablePage/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;