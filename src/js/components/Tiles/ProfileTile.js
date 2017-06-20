import React from "react";

class HeaderTile extends React.Component {

  constructor(){
    super();
    this.title = 'Your profile picture'
  }

  render(){
    return(

      <article className="tile is-child notification is-info profile-pic-box">
        <p className="title">{this.title}</p>
        <img id="profile-pic" />
      </article>

    )
  }
}

export default HeaderTile;

