import React from 'react'
import { NavLink } from 'react-router-dom'

const IconBar = () => {
  return (
    <div className="card z-depth-0">
        <div className="row blue-text text-darken-2">
          <div className="blue-text text-darken-2 col s3">
            <NavLink  to='/'><i className="fas fa-home blue-text text-darken-2"></i> Inicio</NavLink></div>
            
            <div className="blue-text text-darken-2 col s3">
            <NavLink to='/friendlist'><i className="fas fa-user-friends blue-text text-darken-2 "></i> Amigos</NavLink></div>

           <div className="blue-text text-darken-2 col s3">
            <NavLink to='/events'> <i className="far fa-calendar-alt blue-text text-darken-2"></i>Eventos</NavLink></div>

           <div className="blue-text text-darken-2 col s3">
            <NavLink to='/challenge'><i className="fas fa-medal blue-text text-darken-2"></i>Desafíos</NavLink></div>
        </div>
    </div>
  )
}

export default (IconBar)