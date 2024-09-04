import AddMed from "./pages/AddMed";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import UpdateMed from "./pages/UpdateMed";


function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add">Add</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddMed />} />
        <Route path="/update/:id" element={<UpdateMed />} />
      </Routes>
    </Router>
  );
}

export default App;
