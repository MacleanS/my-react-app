import React from "react";

//import Tabs from "./Tabs";

import ProfileSummary from "./ProfileSummary";

class MainBody extends React.Component {

  render(){
    return(
      <div className="section">
        <div className="container">
            <ProfileSummary/>
        </div>
      </div>
    )
  }
}

export default MainBody;