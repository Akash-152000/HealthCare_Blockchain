import React, { Component } from 'react';
import Navbar from './Navbar'
import Alert from './Dialog'
import Buttons from './Buttons'
import Profile from './Profile'
import './Patient.css'


class Patient extends Component {

  render() {
    console.log("garmianee",this.props.medicines)
    return (
      <div>
      {
        this.props.account=="0x4bbc91Bf9bFB467D67e01e7BeCd6f7f4c07C762e" || this.props.account=="0x32ec2b53EfCc00ce7e6B3D2dF12C9f45d27c4BdA"?  
          <div className="row ">
            <div className="column">
              <Buttons account={this.props.account} 
                  images={this.props.images}
                        captureFile={this.props.captureFile}
                        medicines1={this.props.medicines1}
                        medicines2={this.props.medicines2}
                        uploadImage={this.props.uploadImage}
                        buttonFunction={this.buttonFunction}
                        tipImageOwner={this.props.tipImageOwner}/>
            </div>
            <div className="column1">
              <Profile/>
            </div>
          </div>
        :<Alert/>
      }
    </div>
    );
  }
}

export default Patient;