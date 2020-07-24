import React from 'react';


const card = (props)=>{
    return (
        <div className="card pt-2 text-center">
            <div className="card-body ">
                <h2>{props.name}</h2>
                <hr />
                <p>{props.speaker}</p>
                <p>{props.text}</p>
            </div>
        </div>
    )
}


export default card