import React, { Component } from 'react';
import Navbar from './Navbar'
import Dialog from './Dialog'
import Buttons from './Buttons'
import Profile from './Profile'
import './Patient.css'


class Patient extends Component {

  render() {

    return (
    <div className="row ">
      <div className="column">
        <Buttons account={this.props.account} 
                  images={this.props.images}
                  captureFile={this.props.captureFile}
                  uploadImage={this.props.uploadImage}
                  buttonFunction={this.buttonFunction}
                  tipImageOwner={this.props.tipImageOwner}/>
      </div>
      <div className="column1">
        <Profile/>
      </div>
    </div>

    );
  }
}

export default Patient;