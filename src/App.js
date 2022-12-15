import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import List from './pages/List';
import Login from './pages/Login';


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
  );
}

export default App;
