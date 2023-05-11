import {Link, Routes, Route} from "react-router-dom";

import Accueil from "./component/Accueil";
import Film from "./component/Film";

import './style/App.css';

function App() {  
  return (
    <div className="App">
    <div className="navBar">
      <ul className="lien_container">
        <Link to="/"><li>Accueil</li></Link>
        <Link to="/ajoutFilm"><li>Ajouter un Film</li></Link>
      </ul>
    </div>
    <Routes>
          <Route path="/" element={<Accueil/>}/>
          <Route path="/film/:id" element={<Film/>}/>
          <Route path="/ajoutFilm"/>
        </Routes>
  </div>
  );
}

export default App
