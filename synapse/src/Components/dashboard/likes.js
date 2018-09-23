import React from 'react';

class LikeButton extends React.Component {
  constructor() {
    super();
    this.state = {
      liked: false
    };
    this.handleClick = this.handleClick.bind(this);
  } 
  
  handleClick() {
    this.setState({
      liked: !this.state.liked
    });
  }
  
  render() {
    
    const label = this.state.liked ? <i class="fas fa-heart"></i>: <i class="far fa-heart"></i>
    return (
      <div className="like">
        <button className="btn  orange darken-1" onClick={this.handleClick}>
          {label}</button>
        
      </div>
    );
  }
}

export default LikeButton;