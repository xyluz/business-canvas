import { Routes, Route } from "react-router-dom";

import './App.css';
import HomePage from './pages/DummyHomePage/DummyHomePage';
import SignUpPage from "./pages/SignUp/SignUpPage";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Routes>
    </div>
  )
}

export default App
