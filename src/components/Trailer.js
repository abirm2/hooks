import React from 'react'

function Trailer(props) {
    const Tr= props.users.find(el=> el.id == props.match.params.id  )
    
    
    return (
        <div>
            
        </div>
    )
}

export default Trailer
