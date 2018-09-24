import React from 'react'
import {Link} from 'react-router-dom'
import SignedInLinks from '../nav/SignedInLinks'
import SignedOutLinks from '../nav/SignedOutLinks'
import { connect } from 'react-redux'

const NavLogin = (props) => {
  const { auth, profile } = props;
  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />; // operador ternario

  return (

    <nav className="nav-wrapper blue-grey darken-4">
    <div className="">
      <Link to='/' className="brand-logo">Synapse</Link>
      <span>{links}</span>
    </div>
  </nav>
  )
}
const mapStateToProps = (state) => {

  return{
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(NavLogin)