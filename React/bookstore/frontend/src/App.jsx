import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./users/components/Header";
import Home from "./users/pages/Home";
import Auth from "./pages/Auth";
import PageNotFound from "./pages/PageNotFound";
import Preloader from "./components/Preloader";
import { useEffect, useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  });
  return (
    <>
      <Routes>
        <Route path="/" element={isLoading ? <Preloader /> : <Home />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/register" element={<Auth register />} />
        
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
