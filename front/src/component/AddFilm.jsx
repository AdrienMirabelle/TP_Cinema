import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddFilm(){
    const [data, setData] = useState([])

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); 
        const titre = e.target.titre.value;
        const realisateur = e.target.realisateur.value;
        const genre = e.target.genre.value;
        const annee = e.target.annee.value;
        const duree = e.target.duree.value;
        const acteurs = e.target.acteurs.value;
        const synopsis = e.target.synopsis.value;
        const image = e.target.image.value;
        const film = {titre, realisateur, genre, annee, duree, acteurs, synopsis, image};
        axios.post(`http://localhost:3000/addFilm`, {film})
            .then(res => {
                setData(res.data);
                navigate('/');
            })
            .catch(err => {
                console.log(err);
            });
    }

    return(
        <div>
            <h1>Ajouter un film</h1>
            <form onSubmit={handleSubmit}>
                <label>Titre: </label>
                <input type="text" name="titre" id="titre" placeholder="Titre du film" required/>
                <label>Réalisateur: </label>
                <input type="text" name="realisateur" id="realisateur" placeholder="Réalisateur" required/>
                <label>Genre: </label>
                <input type="text" name="genre" id="genre" placeholder="Genre" required/>
                <label>Année de sortie: </label>
                <input type="number" name="annee" id="annee" placeholder="Année de sortie" min="1895" max="9999" value="1895" onChange={(e) => console.log(e.target.value)} required/>
                <label>Durée: </label>
                <input type="number" name="duree" id="duree" placeholder="Durée en minutes" min="1" max="9999" value="1" onChange={(e) => console.log(e.target.value)} required/>
                <label>Acteurs: </label>
                <input type="text" name="acteurs" id="acteurs" placeholder="Acteurs" required/>
                <label>Synopsis: </label>
                <textarea name="synopsis" id="synopsis" placeholder="Synopsis" required/>
                <label>Image: </label>
                <input type="text" name="image" id="image" placeholder="Image" required/>
                <input type="submit" value="Ajouter"/>
            </form>
        </div>
    )
}
export default AddFilm;