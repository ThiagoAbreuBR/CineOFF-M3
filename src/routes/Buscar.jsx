import React from "react";
import { useState } from "react";
import SearchResults from "./SearchResults"

function Buscar() {
    const [data, setData] = useState([]);

    const handleInputChange = (e) => {
        e.preventDefault()
        const { value } = e.target;

        if (!value) return;

        const url = `https://testeapi-xawn.onrender.com/filmesemCartaz?q=${value}`

        fetch(url)
            .then((response) => response.json())
            .then(( data ) => setData(data));
    }
    console.log(data)


    return (
        <div>
            <form>
                <input type="text" name="search" id="search" onChange={handleInputChange} />
            </form>
            <SearchResults data={data}/>
        </div>
    )
}

export default Buscar