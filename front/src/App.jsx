import {Link, Routes, Route} from "react-router-dom";

import Accueil from "./component/Accueil";
import Film from "./component/Film";
import Explication from "./component/Explication";
import Footer from "./component/Footer";

import AddFilm from "./component/AddFilm";
import EditFilm from "./component/EditFilm";

import './style/App.css';
import { Navbar } from "react-bootstrap";

function App() {  
  return (
    <div className="App">
    <div className="navBar">
      <ul className="lien_container">
        <Link to="/"><li>Accueil</li></Link>
        <Link to="/ajoutFilm"><li>Ajouter un Film</li></Link>
        <Link to="/Explication"><li>Explication du projet</li></Link>
      </ul>
    </div>
    <Routes>
          <Route path="/" element={<Accueil/>}/>
          <Route path="/Explication" element={<Explication/>}/>
          <Route path="/film/:id" element={<Film/>}/>
          <Route path="/ajoutFilm" element={<AddFilm/>}/>
          <Route path="/edit/:id" element={<EditFilm/>}/>
          <Route path="*" element={<h1>404</h1>}/>
        </Routes>
        <Navbar />
        <Footer />
  </div>

  );
}

export default App
