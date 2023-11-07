import './App.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Defaultlayout from './Layout/Defaultlayout';
import HomePage from './Pages/HomePage/HomePage';
import LandingLayout from './Layout/LandingLayout';
import { Context } from './Context/Context';
import { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const updateUser = (newUsername) => {
    setUsername(newUsername);
  };

  return (
    <Context.Provider value={{username, updateUser,setUsername}}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Defaultlayout/>}>
      <Route index element={<HomePage/>}/>
      </Route>
      <Route path='/landingpage' element={<LandingLayout/>}>
      <Route index element={<HomePage/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </Context.Provider>
  )
}

export default App
