import {
  BrowserRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom';
import HomePage from "./pages/Home";
import "./assets/styles/index.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
