import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutMe from "./Pages/AboutMe";
import FirstPage from "./Pages/FirstPage";
import Menu from "./Components/Menu";

function App() {
  return (
    <BrowserRouter>
      <Menu/>

      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/sobre-mim" element={<AboutMe />} />
        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
