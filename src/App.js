import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { Contact } from "./components/Contact";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import Project from "./components/Project";
import { Thanks } from "./components/Thanks";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ParticlesBackground from "./components/ParticlesBackground";

function App() {

  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route element={<Home />} path='/' exact />
        <Route element={<Contact />} path='/contact' />
        <Route element={<SinglePost />} path='/post/:slug' />
        <Route element={<Post />} path='/post' />
        <Route element={<Project />} path='/project' />
        <Route element={<Thanks />} path='/thanks' />
      </Routes>
    <ParticlesBackground />
    <Footer />
    </BrowserRouter>
  )
}

export default App;
