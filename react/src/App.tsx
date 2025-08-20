import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Projects from './components/projects';
import About from './components/about';
import Nav from './components/nav';
import Home from './components/homesplash';
import dataContext from './appContext';
import data from './data/data'
function App() {
  return (
    <>
    <dataContext.Provider value={data}>
      <BrowserRouter>
        <Nav/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/projects' element={<Projects/>}/>
          </Routes>
      </BrowserRouter>
    </dataContext.Provider>
      
    </>
    
  );
}

export default App;
