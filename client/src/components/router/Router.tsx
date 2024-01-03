import { Routes, Route } from "react-router-dom";
import Home from "../Home";
import NotFound from "../NotFound";
import MainLayout from "../Layout";
import Confession from "../Confession";
import Misdemeanor from "../Misdemeanor";

const Router: React.FC = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="/misdemeanor" element={<Misdemeanor />} />
      <Route path="/confession" element={<Confession />} />
      <Route path="/*" element={<NotFound />} />
    </Route>
  </Routes>
);

export default Router;
