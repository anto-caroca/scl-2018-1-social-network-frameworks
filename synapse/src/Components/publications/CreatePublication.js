import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createPublication } from '../../store/actions/publicationActions'
import { Redirect } from 'react-router-dom'
import { deletePublication } from '../../store/actions/postDelete'

class CreatePublication extends Component {
  state = {
    
    content: '',
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createPublication(this.state);
  
  }
 
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' /> 
    return (
      <div className="card">
        <form className="white" onSubmit={this.handleSubmit}>
          
          <div className="input-field">
            <textarea id="content"  onChange={this.handleChange} rows="5"></textarea>
            <label htmlFor="content" >¿Que estás pensando?</label>
          </div>
          <div className="input-field center-align">
            <button className="btn teal lighten-2">Publicar</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createPublication: (publication) => dispatch(createPublication(publication)),
  
    deletePublication: (id) => dispatch(deletePublication(id))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CreatePublication)