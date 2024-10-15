import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import  Menu  from "./pages/Menu";
import  Test  from "./pages/Test";
import TreeViewTest from "./pages/TreeViewTest";
import Apitest from "./pages/Apitest";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/test" element={<Test />} />
        <Route path="/treeviewtest" element={<TreeViewTest />} />
        <Route path="/apitest" element={<Apitest />} /> 
      </Routes>
    </div>
  );
}

export default App;
