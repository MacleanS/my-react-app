import React from "react";

import AboutTile from "./Tiles/AboutTile";
import HeaderTile from "./Tiles/HeaderTile";
import FriendsTile from "./Tiles/FriendsTile";
import ProfileTile from "./Tiles/ProfileTile";
import PostTile from "./Tiles/PostTile";

class ProfileSummary extends React.Component {
  render(){

    return(
      <div className="container">
        <div className="tile is-ancestor">
          <div className="tile is-vertical is-8">
            <div className="tile">
              <div className="tile is-parent is-vertical">
                <HeaderTile/>
                <FriendsTile/>
              </div>
              <div className="tile is-parent">
                <ProfileTile/>
              </div>
            </div>
            <div className="tile is-parent">
              <PostTile/>
            </div>
          </div>
          <div className="tile is-parent">
            <AboutTile/>
          </div>
        </div>
      </div>


    )
  }
}

export default ProfileSummary;