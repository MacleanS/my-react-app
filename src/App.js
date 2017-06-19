import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
          <nav className="nav">
            <div className="nav-left">
              <div className="nav-item">
                <h2 id="status">
                </h2>
              </div>
            </div>
            <div className="nav-right">
              <a className="nav-item">
                <div className="fb-login-button" data-max-rows="1" data-size="large" data-button-type="continue_with" data-show-faces="false" data-auto-logout-link="true" data-use-continue-as="true"></div>
              </a>
            </div>
          </nav>
          <div className="container">
            <div className="box">
              <div className="tabs is-centered">
                <ActionLink tab="tab1"/>
                <ActionLink tab="tab2"/>
              </div>
              <div className="box">

                HI I'M CONTENT

              </div>
              {/*Put tab content here*/}

            </div>
          </div>
        </div>
    );

    function ActionLink(tab) {

      function switchTab(e) {

        console.log(tab.name);
        e.preventDefault();
        console.log('The link was clicked.');

      }

      return (
          <li className="is-active"><a href="#" onClick={switchTab}>Tab name</a></li>
     );
    }
  }
}

export default App;
