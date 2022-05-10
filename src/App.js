import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import JoinUs from "./routes/JoinUs";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/join_us' element={<JoinUs />} />
      </Routes>
    </>
  );
}

export default App;
