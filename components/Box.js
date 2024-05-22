import React from 'react'

const Box = (props) => {
    //const nome = "Alan Dias"
    return (
        <>
            <div className="border border-danger mb-3">
                <h2 className="bg-danger text-white text-center">{props.titulo}</h2>
               {props.children}
            </div>
        </>
    )
}

export default Box