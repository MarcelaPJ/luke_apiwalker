import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ErrorMsg from './ErrorMsg';

const Planets = () => {
    const [ planets, setPlanets] = useState({});
    const [ error, setError ] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/starships/${id}`)
            .then((response) => {
                setError(false);
                console.log(response.data);
                setPlanets(response.data)
            })

            .catch((err) => {
                console.log(err);
                setError(true);
            })
    }, [id]);

    if (!error) {
        return(
            <div>
                <h1>{planets.name}</h1>
                <p>Clima: {planets.climate}</p>
                <p>Terreno: {planets.terrain}</p>
                <p>Superficie del agua: {planets.surface_water}</p>
                <p>Población: {planets.population}</p>
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

export default Planets;