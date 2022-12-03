import { Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from './pages/DummyHomePage/DummyHomePage';
import SignUp from "./pages/SignInPage/SignUp";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="./pages/SignInPage/SignUp.jsx" element={<SignUp />} />
      </Routes>
    </div>
  )
}

export default App
