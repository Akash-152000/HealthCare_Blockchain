import React, { Component } from 'react';
import Navbar from './Navbar'
import Dialog from './Dialog'
import DocButton from './DocButton'
import Profile from './Profile'
import './Patient.css'


class Doctor extends Component {

 
  render() {

    return (
    <div className="row ">
      <div className="column">
        <DocButton account={this.props.account} 
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

export default Doctor;