import { useState } from "react";
import { useNavigate } from "react-router-dom";
import  './Menu.module.css';

const Menu = () => {
    const [option, setOption] = useState("");
    const [id, setId] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();

        navigate(`/${option}/${id}`);
    };

    return (
        <div>
            <form onSubmit={handleSearch}>
                <label> Search for: {" "}</label>
                <select onChange={(e) => setOption(e.target.value)}>
                    <option value="">Select...</option>
                    <option value="people">People</option>
                    <option value="films">Films</option>
                    <option value="planets">Planets</option>
                    <option value="starships">Starships</option>
                    <option value="species">Species</option>
                    <option value="vehicles">Vehicles</option>
                </select>
                <label>Id:</label>
                <input type="number" onChange={(e) => setId(e.target.value)}/>
                <button type="submit" value="Search"> Search </button> 
            </form>
        </div>
    )
}

export default Menu;