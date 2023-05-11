import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import axios from "axios";

import { Card } from 'react-bootstrap';
import ToHomePage from "./ToHomePage";

function Film() {
    const [data, setData] = useState([])
    const { id } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3000/film/${id}`)
            .then(res => {
                setData(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    const handleDeleteClick = (id, name) => {
        const confirmDelete = confirm(`Voulez-vous vraiment supprimer "${name}" ?`);
        if (confirmDelete) {
            axios.delete(`http://localhost:3000/delete/${id}`)
                .then(res => {
                    navigate('/');
                })
                .catch(err => console.log(err));
        } else {
            return;
        }
    };

    return (
        <>
            <h1>{data.titre}</h1>
            <div className="row">
                <div className="col-md-4">
                    {data.img && (
                        <Card.Img src={data.img} alt={data.titre} />
                    )}
                </div>
                <div className="col-md-8">
                    <Card style={{ width: "100%" }}>
                        <Card.Body>
                            <button className="btnAction" onClick={() => handleDeleteClick(data._id, data.titre)}>X</button>
                            <button className="btnAction" onClick={() => navigate(`/edit/${data._id}`)}>📝</button>
                            <Card.Text>
                                <strong>Réalisateur:</strong> {data.realisateur}
                                <br />
                                <strong>Année:</strong> {data.annee}
                                <br />
                                <strong>Durée:</strong> {data.duree} minutes
                                <br />
                                <strong>Genre(s):</strong>{' '}
                                {data.genre && data.genre.join(", ")}
                                <br />
                                <strong>Acteur(s):</strong>{' '}
                                <br />
                                {data.distribution && data.distribution.length > 0 ? (
                                    data.distribution.map((person, index) => (
                                        <span key={index}>
                                            {person.nom} - Rôle: {person.role}
                                            <br />
                                        </span>
                                    ))
                                ) : (
                                    <span>N/A</span>
                                )}
                                <br />
                                <strong>Synopsis:</strong> {data.synopsis}
                            </Card.Text>
                        </Card.Body>
                        <ToHomePage />
                    </Card>
                </div>
            </div>
        </>
    );
}
export default Film;