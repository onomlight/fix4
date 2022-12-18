import { BrowserRouter, Route, Routes } from "react-router-dom";
import List from './pages/List';
import Login from './pages/Login';


import './App.css';
// useContaxt > 1번초기 세팅 2번가져다 쓰는거 없음 

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    {/* 동작원리 = > 위에서 차례대로 실행하면서 a 찾고 젤위에 있는걸 보내는걸 찾는다고함 */}
    <Routes>
      <Route
          path="/"
          element={
            <Login
            />
          }
        />
      <Route
        path="/List"
        element={
          <List
          />
        }
      />
    </Routes>
  </BrowserRouter>
  // <List></List>
  );
}
// ### 'json-server --watch ./src/db/data.json --port 3001'
export default App;
