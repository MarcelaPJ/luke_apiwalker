import { useState, useEffect } from "react";                // useEffect para traer los datos de la API cuando se carga el componente
import axios from "axios";                                  // axios para hacer las peticiones a la API
import { useParams } from "react-router-dom";               // useParams para obtener el id de la URL
import ErrorMsg from './ErrorMsg';

const People = () => {
    const [ people, setPeople ] = useState({});             // people es el estado que contiene los datos de la persona, setPeople es la función que actualiza el estado. El estado inicial es un objeto vacío.
    const [ error, setError ] = useState(false);            // error es el estado que contiene el mensaje de error, setError es la función que actualiza el estado. El estado inicial es false.
    const { id } = useParams();                             // useParams obtiene el id de la persona de la URL

    useEffect(() => {                                       // useEffect se ejecuta cuando se carga el componente
        axios.get(`https://swapi.dev/api/people/${id}`)     // axios hace una petición GET a la API de Star Wars
            .then((response) => {
                setError(false);                            // si la petición es exitosa, se actualiza el estado error a false
                console.log(response.data);
                setPeople(response.data)                   // si la petición es exitosa, se actualiza el estado people con los datos de la persona
            })
            .catch((err) => {
                console.log(err);
                setError(true);                             // si la petición falla, se actualiza el estado error a true y aparece mensaje de Obi-Wan
            })
    }, [id]);                                               // el segundo argumento de useEffect es un array de id. En este caso, useEffect se ejecuta cada vez que cambia el id de la persona.

    if (!error) {                                           // si no hay error (false), se muestra la información de la persona
        return (
            <div>
                <h1>{people.name}</h1>
                <p>Género: {people.gender}</p>
                <p>Color de pelo: {people.hair_color}</p>
                <p>Color de ojos: {people.eye_color}</p>
                <p>Mundo natal: {people.homeworld}</p>
            </div>
        );
    } else {                                                // si hay error (true), se muestra el mensaje de Obi-Wan
        return (
            <div>
                <ErrorMsg />
            </div>
        );
    }
}
export default People;