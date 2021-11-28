import React from 'react'

function Trailer(props) {
    const Tr= props.Movies.find((el)=> el.id == props.match.params.id );
    
    
    return (
        <div>
            <h1>{Tr.trailerlink}</h1>
            <h1>{Tr.description }</h1>
        </div>
    )
}

export default Trailer
