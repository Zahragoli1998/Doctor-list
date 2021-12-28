import React from 'react';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Singledoctor from './Component/Singledoctor';
import Doctorlist from './Component/Doctorlist';
import Home from './Component/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path={'/'} element={<Home/>}/>
          <Route path={'/doctorlist'} element={<Doctorlist/>}/>
          <Route path={'/singledoctor/:id'} element={<Singledoctor/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
