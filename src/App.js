import './App.css';
import Postview from './Postview';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './Landing';
import Form from './Form';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
           <Routes>
             <Route path='/' element = {<Landing/>}/>
             <Route path="/post" element={< Postview/>}/>
             <Route path='/form' element={<Form/>}/>
           </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
