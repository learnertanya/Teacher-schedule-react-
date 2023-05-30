import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";

const App = () => {
  // Dummy data for schedule
  const schedule = [
    { date: "2023-05-30", className: "Math", time: "9:00 AM" },
    { date: "2023-05-31", className: "Science", time: "10:30 AM" },
    // Add more schedule items here
  ];

  return (
    <ChakraProvider>
      <Router>
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" exact element={<LoginPage />} />
            <Route path="/schedule" element={<MainPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ChakraProvider>
  );
};

export default App;
