import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";

const App = () => {
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
