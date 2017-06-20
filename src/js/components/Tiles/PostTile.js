import React from "react";

import PostButton from "../PostButton";

class PostTile extends React.Component {

  constructor(){
    super();
    this.title = 'Feel like posting something?';
    this.label = 'Post something here:';
  }

  render(){
    return(

      <article className="tile is-child notification is-danger">
        <p className="title">{this.title}</p>
        <div className="field">
          <label className="label">{this.label}</label>
          <p className="control">
            <input id="message-input" className="input" type="text" placeholder="Write something to post to Facebook"/>
          </p>
        </div>
        <div className="content">

          <PostButton/>

        </div>
      </article>

    )
  }
}

export default PostTile;

