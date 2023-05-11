import { useState, useEffect } from 'react'

import axios from 'axios'
import { Card } from 'react-bootstrap';

import {Link} from "react-router-dom";

import '../style/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Accueil() {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/')
            .then(res => {
                setData(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <h1 className='categorie'>Liste de film d'animation japonaise</h1>
            <div className="d-flex flex-wrap">
                {data.map((film, index) => (
                    <div key={index} className="m-2">
                        <Card style={{ width: '18rem' }}>
                            {film.img && <Card.Img src={film.img} height="296px" />}
                            <Card.Body>
                                <Card.Title>{film.titre}</Card.Title>
                                <Card.Text>
                                    <strong>Réalisateur:</strong> {film.realisateur}
                                    <br />
                                    <strong>Année:</strong> {film.annee}
                                    <br />
                                    <strong>Durée:</strong> {film.duree} minutes
                                    <br />
                                    <strong>Genre(s):</strong>{' '}
                                    {film.genre && film.genre.map((genre, index) => (
                                        <span key={index}>{genre} </span>
                                    ))}
                                </Card.Text>
                            </Card.Body>
                            <div className="d-flex justify-content-center">
                                <Link to={`/film/${film._id}`}>
                                    Voir plus
                                </Link>
                            </div>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Accueil;
