import React from "react"

class Modal extends React.Component {

  constructor(){
    super();
    this.class = "modal";
    this.closeModal = function(){
      document.getElementById('post-modal').className = 'modal';
    }
  }

  render(){
    return(
      <div id="post-modal" className="modal">
        <div className="modal-background" onClick={this.closeModal}></div>
        <div className="box modal-panel">
          <div id="modal-content" className="modal-content">
          </div>
          <button className="modal-close" onClick={this.closeModal}></button>
        </div>
      </div>
    )
  }

}

export default Modal;