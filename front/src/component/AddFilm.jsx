import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Form, Button } from 'react-bootstrap';

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
        axios.post(`http://10.0.50.5:3000/addFilm`, {film})
            .then(res => {
                setData(res.data);
                navigate('/');
            })
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <div>
            <h1>Ajouter un film</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="titre">
                    <Form.Label>Titre:</Form.Label>
                    <Form.Control type="text" name="titre" placeholder="Titre du film" required
                        onChange={(e) => setData({ ...data, titre: e.target.value })}
                    />
                </Form.Group>
                <Form.Group controlId="realisateur">
                    <Form.Label>Réalisateur:</Form.Label>
                    <Form.Control type="text" name="realisateur" placeholder="Réalisateur" required
                        onChange={(e) => setData({ ...data, realisateur: e.target.value })}
                    />
                </Form.Group>
                <Form.Group controlId="genre">
                    <Form.Label>Genre:</Form.Label>
                    <Form.Control type="text" name="genre" placeholder="Genre" required
                        onChange={(e) => setData({ ...data, genre: e.target.value })}
                    />
                </Form.Group>
                <Form.Group controlId="annee">
                    <Form.Label>Année de sortie:</Form.Label>
                    <Form.Control type="number" name="annee" placeholder="Année de sortie" min="1895" max="9999" value="1895" required
                        onChange={(e) => setData({ ...data, annee: e.target.value })}
                    />
                </Form.Group>
                <Form.Group controlId="duree">
                    <Form.Label>Durée:</Form.Label>
                    <Form.Control type="number" name="duree" placeholder="Durée en minutes" min="1" max="9999" value="1" required
                        onChange={(e) => setData({ ...data, duree: e.target.value })}
                    />
                </Form.Group>
                <Form.Group controlId="acteurs">
                    <Form.Label>Acteurs:</Form.Label>
                    <Form.Control type="text" name="acteurs" placeholder="Acteurs" required

                        onChange={(e) => setData({ ...data, acteurs: e.target.value })}
                    />
                </Form.Group>
                <Form.Group controlId="synopsis">
                    <Form.Label>Synopsis:</Form.Label>
                    <Form.Control as="textarea" name="synopsis" placeholder="Synopsis" required
                        onChange={(e) => setData({ ...data, synopsis: e.target.value })}
                    />
                </Form.Group>
                <Form.Group controlId="image">
                    <Form.Label>Image:</Form.Label>
                    <Form.Control type="text" name="image" placeholder="Image" required
                        onChange={(e) => setData({ ...data, image: e.target.value })}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Ajouter
                </Button>
            </Form>
        </div>
    );
}
export default AddFilm;