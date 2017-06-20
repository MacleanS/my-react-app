import React from "react";

export class LoginButton extends React.Component {

  render(){
    return(
      <div className="fb-login-button" data-max-rows="1" data-size="large" data-button-type="continue_with" data-show-faces="false" data-auto-logout-link="true" data-use-continue-as="true"></div>
    )
  }
}

export default LoginButton;