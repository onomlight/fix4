import { BrowserRouter, Route, Routes } from "react-router-dom";
import List from './pages/List';
import Login from './pages/Login';


import './App.css';


function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    
    <Routes>
      <Route
          path="/"
          element={
            <Login
            />
          }
        />
      <Route
        path="/"
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
