import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import Form from "./pages/Form";
import History from "./pages/History";
import ResumeGenarator from "./pages/ResumeGenerator";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/resumegenerator" element={<ResumeGenarator />}></Route>
        <Route path="/form" element={<Form />}></Route>
        <Route path="/history" element={<History />}></Route>
        <Route path="/*" element={<PageNotFound />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
