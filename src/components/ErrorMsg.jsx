import React from "react";
import obi from './obi.gif';

const ErrorMsg = () => {
    return (
        <div>
            <h1>Estos no son los droides que estás buscando</h1>
            <img src={ obi } alt="Obi-Wan" />
        </div>
    )
}

export default ErrorMsg;