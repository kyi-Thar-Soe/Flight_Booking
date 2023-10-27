import './App.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Defaultlayout from './Layout/Defaultlayout';
import HomePage from './Pages/HomePage/HomePage';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Defaultlayout/>}>
      <Route index element={<HomePage/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
