import React from "react";

const SearchResults = (data) => {

    if(!data || !data.length) return null;

    data.map((id,titulo,poster) => {
        return (
            <div>
                <section>
                    <div className="catalogo">
                        <img key={id} src={poster} alt="" />
                        <h1 key={id}>{titulo}</h1>
                    </div>
                </section>
            </div>
        )
    })

}
export default SearchResults