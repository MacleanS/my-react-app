import React from "react";

class FriendsTile extends React.Component {

  constructor(){
    super();
    this.title = 'Number of friends'
  }

  render(){
    return(

      <article className="tile is-child notification is-primary">
        <p className="title">{this.title}</p>
        <p id="number-of-friends"></p>
      </article>

    )
  }
}

export default FriendsTile;