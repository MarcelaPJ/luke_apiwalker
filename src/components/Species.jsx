import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ErrorMsg from './ErrorMsg';


const Species = () => {
    const [ species, setSpecies] = useState({});
    const [ error, setError ] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/starships/${id}`)
            .then((response) => {
                setError(false);
                console.log(response.data);
                setSpecies(response.data)
            })

            .catch((err) => {
                console.log(err);
                setError(true);
            })
    }, [id]);

    if (!error) {
        return(
            <div>
                <h1>{species.name}</h1>
                <p>Clasificación: {species.classification}</p>
                <p>Designación: {species.designation}</p>
                <p>Lenguaje: {species.lenguage}</p>
                <p>Mundo natal: {species.homeworld}</p>
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

export default Species;

