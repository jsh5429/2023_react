import Home from './page/Home';
import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './page/Layout';
import Search from './page/Search';
import Notice from './page/Notice';
import Event from './page/Event';
import Search1 from './components/Search1';
import Search2 from './components/Search2';
import './css/App.css'


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='/' element={<Home />} />
            <Route path='/search' element={<Search />}>
              <Route path='/search/list' element={<Search1 />} />
              <Route path='/search/map' element={<Search2 />} />
            </Route>
            <Route path='/notice' element={<Notice />} />
            <Route path='/event' element={<Event />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
