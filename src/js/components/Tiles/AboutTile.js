import React from "react";


class AboutTile extends React.Component {

  constructor(){
    super();
    this.title = 'About you';
    this.firstName = 'First name';
    this.lastName = 'Last name';
    this.age = 'Age range';
    this.email = 'Email address';
  }

  render(){
    return(

      <article className="tile is-child notification is-success">
        <div className="content">
          <p className="title">{this.title}</p>
          <div className="content">
            <p>
              <strong>{this.firstName}</strong>
              <br/>
              <span id="first-name"></span>
            </p>
            <p>
              <strong>{this.lastName}</strong>
              <br/>
              <span id="last-name"></span>
            </p>
            <p>
              <strong>{this.age}</strong>
              <br/>
              <span id="age-range"></span>
            </p>
            <p>
              <strong>{this.email}</strong>
              <br/>
              <span id="email-address"></span>
            </p>
          </div>
        </div>
      </article>

    )
  }
}

export default AboutTile;



