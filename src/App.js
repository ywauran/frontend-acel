import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import AlumniPage from "./pages/AlumniPage";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/alumni" element={<AlumniPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
