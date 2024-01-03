import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Confession from "./components/Confession";
import Misdemeanor from "./components/Misdemeanor";
import NotFound from "./components/NotFound";
function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/confession" element={<Confession />} />
        <Route path="/misdemeanor" element={<Misdemeanor />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
