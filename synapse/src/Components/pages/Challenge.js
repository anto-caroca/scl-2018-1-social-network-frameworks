import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import IconBar from '../iconBar/IconBar'
import Navbar from '../nav/Nav'


class Challenge extends Component {
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
        <div className="card z-depth-0">
                <div> <p>Matemática</p></div>
                <hr></hr>
                <div> <p>Historia</p></div>
                <hr></hr>
                <div> <p>Biología</p></div>
                <hr></hr>
                <div> <p>Lenguaje</p></div>
                <hr></hr>
                <div> <p>Inglés</p></div>
                <hr></hr>
                <div> <p>Física</p></div>
                <hr></hr>
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
)(Challenge)
