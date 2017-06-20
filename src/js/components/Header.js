import React from "react";

class Header extends React.Component {

  render(){
    return(
      <header id="status">{this.props.title}</header>
    )
  }
}

export default Header;