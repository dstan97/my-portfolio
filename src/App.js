import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { Contact } from "./components/Contact";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import Project from "./components/Project";
import NavBar from "./components/NavBar";

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
      </Routes>
    </BrowserRouter>
  )
}

export default App;
