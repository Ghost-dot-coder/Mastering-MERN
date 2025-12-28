import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./users/pages/Home";
import Auth from "./pages/Auth";
import PageNotFound from "./pages/PageNotFound";
import Preloader from "./components/Preloader";
import { useEffect, useState } from "react";
import AllBooks from "./pages/AllBooks";

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
        <Route path="/all-books" element={<AllBooks />} />
      </Routes>
    </>
  );
}

export default App;
