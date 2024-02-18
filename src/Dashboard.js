import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cards from "./Cards.js";

const Dashboard = () => {
  return (
    <Router>
      <Routes>
        <Route path="/cards" element={<Cards />} />
      </Routes>
    </Router>
  );
};

export default Dashboard;
