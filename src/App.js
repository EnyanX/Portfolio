import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./index.css";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Work from "./components/work/Work";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </Router>
    </div>
  );
}
