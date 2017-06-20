import React from "react";
import Header from "./Header";
import LoginButton from "./Login-button"
import MainBody from "./MainBody";
import Modal from "./Modal";

class Layout extends React.Component {

  render(){

    const title = "Welcome";

    return(
      <div>
        <nav className="nav">
          <div className="nav-left">
            <div className="nav-item">
              <Header title={title}/>
            </div>
          </div>
          <div className="nav-right">
            <div className="nav-item">
              <LoginButton/>
            </div>
          </div>
        </nav>
        <MainBody/>
        <Modal/>
      </div>

    )
  }
}

export default Layout;