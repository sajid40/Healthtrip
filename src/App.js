

import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Header from './components/Header/Header';

import Home from './components/Home/Home';
import Medical from './components/Medical/Medical';
import Wellness from './components/Wellness/Wellness';
import Asthetic from './components/Asthetic/Asthetic';

function App() {
  return (
    <div >
        <Home/>
        

        <Routes>

          <Route path="/medical" element={<Medical/>}/>
          <Route path="/asthetic" element={<Asthetic/>}/>
          <Route path="/wellness" element={<Wellness/>}/>
          
        </Routes>
        
        
    </div>
  );
}

export default App;
