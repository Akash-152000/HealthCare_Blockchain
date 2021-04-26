import React, { Component } from 'react';
import Navbar from './Navbar'
import Dialog from './Dialog'
import Buttons from './Buttons'


class Doctor extends Component {

 
  render() {

    return (
    <div>
      <Buttons account={this.props.account} 
                images={this.props.images}
                captureFile={this.props.captureFile}
                uploadImage={this.props.uploadImage}
                buttonFunction={this.buttonFunction}
                tipImageOwner={this.props.tipImageOwner}/>

    </div>

    );
  }
}

export default Doctor;