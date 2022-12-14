import React from 'react'
import {Link} from "react-router-dom"
import "../css/Error.css"

const ErrorScreen = () => {

    return (
        <div className='container-404 alturaParaFooter container mt-5 text-center '>
            <img src="https://cdn.dribbble.com/users/366584/screenshots/2527274/media/d12508b6af16c7ffc53596fcecd96988.gif" alt="" />
            <div className="row">
                <div className="col ">
                <p>Esta pagina no se encuentra disponible en estos momentos. Disculpa las molestias</p>
                <Link to="/" className='btn btn-warning'>Pagina principal</Link>
                </div>
            </div>
        </div>

    )
}

export default ErrorScreen