

import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Medical from './components/Medical/Medical';
import Asthetic from './components/Asthetic/Asthetic';
import Wellness from './components/Wellness/Wellness';

function App() {
  return (
    <div >
        <Header/>
        <BrowserRouter>

        <Routes>

          <Route path="/medical" element={<Medical/>}/>
          <Route path="/asthetic" element={<Asthetic/>}/>
          <Route path="/wellness" element={<Wellness/>}/>
          
        </Routes>
        
        </BrowserRouter>
    </div>
  );
}

export default App;
