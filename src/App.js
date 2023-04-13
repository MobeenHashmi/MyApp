import './App.css';
import LoginPage from './Components/LoginPage/LoginPage';
import Home from './Components/HomePage/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainContent from './Components/MainContent/MainContent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element = {<LoginPage/>}/>
        <Route path='/Home' element = {<Home/>}/>        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
