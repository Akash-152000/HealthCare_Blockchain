import React, { Component } from 'react';
import Navbar from './Navbar'
import Alert from './Dialog'
import DocButton from './DocButton'
import Profile from './Profile'
import './Patient.css'


class Doctor extends Component {

 
  render() {
    return (
      <div>
        {
            this.props.account=="0x73a2d52d6759f19dBb90e269179fC9F56d6b808f"?  
              <div className="row ">
                <div className="column">
                  <DocButton account={this.props.account} 
                          images={this.props.images}
                            captureFile={this.props.captureFile}
                            medicines={this.props.medicines}
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

export default Doctor;