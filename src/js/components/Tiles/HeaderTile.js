import React from "react";

class HeaderTile extends React.Component {

  constructor(){
    super();
    this.title = 'Here is some basic information about you'
  }

  render(){
    return(

        <article className="tile is-child notification is-warning">
          <p className="title">{this.title}</p>
        </article>

    )
  }
}

export default HeaderTile;