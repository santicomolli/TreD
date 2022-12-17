import React from 'react'

const CardProyectos = () => {
    

    //De esta card yo tengo que traer unas imagen de el proyecto y cargarla, luego mandarle el id para que se pueda abrir en grande desp
    return (

        <div className="col"  align="center">
            <div className="card m-1 ms-1 destacadas">
                {/* <img src={producto.img} className="card-img-top" alt="..."/> */}
                <div className="card-body">
                    {/* <h6 className="card-title-destacadas">{producto.nombre}</h6> */}
                    {/* <Link to={`/productos/${producto._id}`} className="btn btn-card-product btn-success float-right img-wrap" data-abc="true">Ver producto</Link> */}
                </div>
            </div>
        </div>
    )
}

export default CardProyectos
