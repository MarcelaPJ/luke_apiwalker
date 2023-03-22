import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ErrorMsg from './ErrorMsg';

const Films = () => {
    const [ films, setFilms ] = useState({});
    const [ error, setError ] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/films/${id}`)
            .then((response) => {
                setError(false);
                console.log(response.data);
                setFilms(response.data)
            })

            .catch((err) => {
                console.log(err);
                setError(true);
            })
    }, [id]);

    if (!error) {
        return(
            <div>
                <h1>{films.title}</h1>
                <p>Episodio: {films.episode_id}</p>
                <p>Director: {films.director}</p>
                <p>Productor: {films.producer}</p>
                <p>Fecha de lanzamiento: {films.release_date}</p>
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

export default Films;

