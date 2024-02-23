import { Home } from "./home";
import { Link, Route, Routes, } from "react-router-dom";
import { LayoutProyects } from "./proyects";
export const Content = ({ children }) => {
  return (
    <main>
       <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Proyects" element={<LayoutProyects/>}></Route>
       </Routes>
      

    </main>
  );
};
