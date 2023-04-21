import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from './page/Home';
import BoardList from './page/BoardList';
import Layout from './page/Layout';
import Board from './page/Board';

import { DataProvider } from './context/DataContext';

function App() {
  return (
    <div className="App">
      <DataProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />}/>
          {/** BoardList, Board를 이용해 출력할 목록을 만들어줌 */}
          <Route path='/boardlist' element={<BoardList />}/>
          <Route path='/boardlist:id' element={<Board />}/>
        </Route>
      </Routes>
      </DataProvider>
      
    </div>
  );
}

export default App;
