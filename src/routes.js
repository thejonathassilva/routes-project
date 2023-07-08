import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutMe from "./Pages/AboutMe";
import FirstPage from "./Pages/FirstPage";
import Menu from "./Components/Menu";
import Footer from "Components/Footer";
import DefaultPage from "Components/DefaultPage";
import Post from "Pages/Post";
import NotFound from "Pages/NotFound";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu/>

      <Routes>
        
        <Route path="/" element={<DefaultPage />}>
          <Route path="" element={<FirstPage />} />
          <Route path="sobre-mim" element={<AboutMe />} />
          <Route path="post/:id" element={<Post />} />
        </Route>

        <Route path="*" element={<NotFound/>} />
      </Routes>
      
      <Footer/>
    </BrowserRouter>

  );
}

export default AppRoutes;
