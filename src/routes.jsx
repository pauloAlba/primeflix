import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Filme from "./Pages/Filme";

import Header from "./Components/Header"

function RoutesApp() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}> Home</Route>
        <Route path="/filme/:id" element={<Filme />}> Filme </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
