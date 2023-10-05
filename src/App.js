

import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

import Home from './components/Home/Home';
import Onlinecon from './components/OnlineCon/Onlinecon';
import Treatments from './components/Treatments/Treatments';
import Testimonisla from './components/Testimonials/Testimonisla';
import Blogs from './components/Blogs/Blogs';
function App() {
  return (
    <div >
        

        <Routes>

          <Route path="/" element={<Home/>}/>
          <Route path="/onlineconsultaion" element={<Onlinecon/>}/>
          <Route path="/treatments" element={<Treatments/>}/>
          <Route path="/testimonials" element={<Testimonisla/>}/>
          <Route path="/blogs" element={<Blogs/>}/>
          
        </Routes>
        
        
    </div>
  );
}

export default App;
