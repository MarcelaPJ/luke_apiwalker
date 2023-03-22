import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ErrorMsg from './ErrorMsg';

const Starships = () => {
    const [ starships, setStarships ] = useState({});
    const [ error, setError ] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/starships/${id}`)
            .then((response) => {
                setError(false);
                console.log(response.data);
                setStarships(response.data)
            })

            .catch((err) => {
                console.log(err);
                setError(true);
            })
    }, [id]);

    if (!error) {
        return(
            <div>
                <h1>{starships.name}</h1>
                <p>Modelo: {starships.model}</p>
                <p>Fabricante: {starships.manufacturer}</p>
                <p>Pasajeros: {starships.passengers}</p>
                <p>Capacidad carga: {starships.cargo_capacity}</p>
            </div>
        );
    } else {
        return (
            <div>
                <ErrorMsg />
            </div>
        );
    }
}

export default Starships;

