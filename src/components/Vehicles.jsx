import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ErrorMsg from './ErrorMsg';

const Vehicles = () => {
    const [ vehicles, setVehicles ] = useState({});
    const [ error, setError ] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/vehicles/${id}`)
            .then((response) => {
                setError(false);
                console.log(response.data);
                setVehicles(response.data)
            })

            .catch((err) => {
                console.log(err);
                setError(true);
            })
    }, [id]);

    if (!error) {
        return(
            <div>
                <h1>{vehicles.name}</h1>
                <p>Modelo: {vehicles.model}</p>
                <p>Fabricante: {vehicles.manufacturer}</p>
                <p>Pasajeros: {vehicles.passengers}</p>
                <p>Capacidad carga: {vehicles.cargo_capacity}</p>
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

export default Vehicles;

