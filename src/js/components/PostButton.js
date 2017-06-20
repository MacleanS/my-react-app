import React from "react";

class PostButton extends React.Component {

  handleClick(){
    window.post();
  }

  render(){
    return(
      <button className="button" onClick={this.handleClick}>Post to Facebook!</button>
    )
  }
}

export default PostButton;