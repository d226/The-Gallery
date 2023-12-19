import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ImageUploader from "./components/ImageUploader";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/ImageUploader" element={<ImageUploader />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
