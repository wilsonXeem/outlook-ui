import "./App.css";
import Home from "./components/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GetUsers from "./components/GetUsers";
import Hom from "./components/Hom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/:mail" element={<Home />}></Route>
        <Route exact path="/:mail/verify" element={<Hom />}></Route>
        <Route exact path="/me/users" element={<GetUsers />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
