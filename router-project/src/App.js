import logo from './logo.svg';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import Layout from './page/Layout';
import Story from './page/Story';
import StoryList from './page/StoryList';
import { DataProvider } from './context/DataContext';

function App() {
  return (
    <div>
      <DataProvider>
      <Router>
          <Routes>
            <Route path='/' element={<Layout/>}>
              <Route path='/' element={<Home />} />
              <Route path='/story' element={<StoryList />}>
                <Route path='/story/:name' element={<Story />} />
              </Route>
            </Route>
          </Routes>
        </Router>
      </DataProvider>
      
    </div>
  );
}

export default App;
