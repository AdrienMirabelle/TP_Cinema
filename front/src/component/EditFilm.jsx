import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { Form, Button } from "react-bootstrap";

import axios from "axios";
import ToHomePage from "./ToHomePage";

function EditFilm() {
    const [data, setData] = useState({});
    const { id } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`http://10.0.50.5:3000/film/${id}`)
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const confirmEdit = window.confirm(
            `Voulez-vous vraiment modifier "${data.titre}" ?`
        );
        if (confirmEdit) {
            axios
                .put(`http://10.0.50.5:3000/updateFilm/${id}`, data)
                .then(() => {
                    navigate(`/film/${id}`);
                })
                .catch((err) => console.log(err));
        }
    };

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Titre:</Form.Label>
                    <Form.Control
                        type="text"
                        name="titre"
                        value={data.titre || ""}
                        onChange={(e) => setData({ ...data, titre: e.target.value })}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Réalisateur:</Form.Label>
                    <Form.Control
                        type="text"
                        name="realisateur"
                        value={data.realisateur || ""}
                        onChange={(e) => setData({ ...data, realisateur: e.target.value })}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Genre:</Form.Label>
                    <Form.Control
                        type="text"
                        name="genre"
                        value={data.genre || ""}
                        onChange={(e) => setData({ ...data, genre: e.target.value })}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Année de sortie:</Form.Label>
                    <Form.Control
                        type="number"
                        name="annee"
                        value={data.annee || ""}
                        onChange={(e) => setData({ ...data, annee: e.target.value })}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Durée:</Form.Label>
                    <Form.Control
                        type="number"
                        name="duree"
                        value={data.duree || ""}
                        onChange={(e) => setData({ ...data, duree: e.target.value })}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Acteurs:</Form.Label>
                    <Form.Control
                        type="text"
                        name="acteurs"
                        value={data.acteurs || ""}
                        onChange={(e) => setData({ ...data, acteurs: e.target.value })}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Synopsis:</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="synopsis"
                        value={data.synopsis || ""}
                        onChange={(e) => setData({ ...data, synopsis: e.target.value })}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Envoyer
                </Button>
            </Form>
            <ToHomePage />
        </>
    );
}

export default EditFilm;
