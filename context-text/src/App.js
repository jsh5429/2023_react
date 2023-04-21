import './App.css';
import Toolbar from './components/Toolbar';
import ThemeContext from './context/ThemeContext';
import ObjectContext from './context/ObjectContext';
import { DataProvider } from './context/DataContext';
import ContextBox from './components/ContextBox';
import DataBox from './components/DataBox';
import DataPrint from './components/DataPrint';

//ObjectContext.Provider의 value값을
// 따로 변수에 저장해서 사용
// >> 변수의 값이 많다면 확인하기 힘들다
// >> Context를 만들 때, value 값도 함께 작성해서 만들자!
const initValue = {name:"성춘향", login:true};

function App() {
  return (
    <div>
      <ThemeContext.Provider value="light">
        <ObjectContext.Provider value={initValue}>
          {/** ThemeContext와 ObjectContext값 확인 */}
          <Toolbar />
        </ObjectContext.Provider>
      </ThemeContext.Provider>

      {/** ContextBox를 가져와서 ThemeContext를 이용하여
       * blue값을 전달하기
       */}
      <ThemeContext.Provider value="blue">
        <ContextBox />
      </ThemeContext.Provider>

      {/** DataContext를 이용해서 value 값을 전달한
       * DataProvider 사용
       */}
      <DataProvider>
        <DataBox />
         {/** <DataPrint /> 를 작성하여 화면에 출력 */}
        <DataPrint />
      </DataProvider>
    </div>
  );
}

export default App;
