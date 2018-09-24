import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import IconBar from '../iconBar/IconBar'
import Navbar from '../nav/Nav'

class Events extends Component {
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />
    return (
      <div>
        <div>
          <Navbar />
        </div>
        <div className="container">
          <div className="row">
            <div className="col s12 m10 offset-m1 l6 offset-l3">
              <div className="card z-depth-0">
                <IconBar />
              </div>
              <div className='card z-depth-0'>
                <i class="fas fa-user fa-2x"></i>
                <p>CREADORA: Antonella Caroca</p>
                <h5>NOMBRE EVENTO:</h5>
                <h4>Coding in sign language!</h4>
                <h5>¿CUÁNDO?</h5>
                <h4>5/Noviembre/2018</h4>
                <h5>DESCRIPCIÓN DEL EVENTO:</h5>
                <p>Programación accesible en lengua de señas para la comunidad sorda! Vengan a este super evento que incluye a destacados hackers internacionales y la comunidad sorda!</p>
                <i class="far fa-calendar-check"></i>
              </div>

               <div className='card z-depth-0'>
                <i class="fas fa-user fa-2x"></i>
                <p>CREADORA: Antonella Caroca</p>
                <h5>NOMBRE EVENTO:</h5>
                <h4>Coding in sign language!</h4>
                <h5>¿CUÁNDO?</h5>
                <h4>5/Noviembre/2018</h4>
                <h5>DESCRIPCIÓN DEL EVENTO:</h5>
                <p>Programación accesible en lengua de señas para la comunidad sorda! Vengan a este super evento que incluye a destacados hackers internacionales y la comunidad sorda!</p>
                <i class="far fa-calendar-check"></i>
              </div>
    
              </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  }
}

export default compose(
  connect(mapStateToProps),
)(Events)
