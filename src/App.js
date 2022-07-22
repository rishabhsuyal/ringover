import React from 'react';
import Contact from './Pages/Contact/Contact';
import Team from './Pages/Team/Team';
import TheJourney from './Pages/TheJourney/TheJourney';
import Store from './Pages/Store/Store';
import Navbar from './Component/Navbar/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<Store/>} />
        <Route path='journey' element={<TheJourney />} />        
        <Route path='team' element={<Team/>}/>
        <Route path='contact' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App