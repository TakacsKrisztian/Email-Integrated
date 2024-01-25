import { useEffect, useState } from "react";
import { BrowserRouter as Router, NavLink, Routes, Route, useNavigationType, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Newpost from "./pages/Newpost";
import SendEmail from "./pages/SendEmail";
import PostsListNature from "./pages/PostsListNature";
import PostsListMacro from "./pages/PostsListMacro";
import PostsListBW from "./pages/PostsListBW";
import PostsListAnimal from "./pages/PostsListAnimal";
import PostsListSport from "./pages/PostsListSport";
import PostsListFood from "./pages/PostsListFood";
import PostsListPortrait from "./pages/PostsListPortrait";
import PostsListTravel from "./pages/PostsListTravel";
import PostsSingleElement from "./pages/PostsSingleElement";
import PostsListArt from "./pages/PostsListArt";
import { PostModify } from "./pages/PostModify";
import { PostDelete } from "./pages/PostDelete";

function App() {
  

  return (
    <Router>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to={`/`} className="nav-link">
                <span className="nav-link">Home</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/Sport`} className="nav-link">
                <span className="nav-link">Sport</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/Animal`} className="nav-link">
                <span className="nav-link">Animal</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/Nature`} className="nav-link">
                <span className="nav-link">Nature</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/Portrait`} className="nav-link">
                <span className="nav-link">Portrait</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/BW`} className="nav-link">
                <span className="nav-link">B&W</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/Art`} className="nav-link">
                <span className="nav-link">Art</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/Travel`} className="nav-link">
                <span className="nav-link">Travel</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/Macro`} className="nav-link">
                <span className="nav-link">Macro</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/Food`} className="nav-link">
                <span className="nav-link">Food</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/New-Post`} className="nav-link">
                <span className="nav-link">New Post</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/Send-Email`} className="nav-link">
                <span className="nav-link">Send Email</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/Sport" element={<PostsListSport/>}/>
        <Route path="/Animal" element={<PostsListAnimal/>}/>
        <Route path="/Nature" element={<PostsListNature/>}/>
        <Route path="/Portrait" element={<PostsListPortrait/>}/>
        <Route path="/BW" element={<PostsListBW/>}/>
        <Route path="/Art" element={<PostsListArt/>}/>
        <Route path="/Travel" element={<PostsListTravel/>}/>
        <Route path="/Macro" element={<PostsListMacro/>}/>
        <Route path="/Food" element={<PostsListFood/>}/>
        <Route path="/New-Post" element={<Newpost/>}/>
        <Route path="/Send-Email" element={<SendEmail/>}/>
        <Route path="/Posts/:id" element={<PostsSingleElement/>}/>
        <Route path="/Delete-Post/:id" element={<PostDelete/>}/>
        <Route path="/Modify-Post/:id" element={<PostModify/>}/>
      </Routes>
    </Router>
  );
}
export default App;
