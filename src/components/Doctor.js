import React, { Component } from 'react';
import Navbar from './Navbar'
import Alert from './Dialog'
import DocButton from './DocButton'
import Profile from './Profile'
import UploadProfile from './UploadProfile'
import './Patient.css'


class Doctor extends Component {

 
  render() {
    console.log("lkmclskdc",this.props.profiles.length)
    return (
      <div>
      {
        this.props.account=="0xE24c1eE4f2E6446955A64C4DFb16173C6815bb54"?  
              this.props.account=="0xE24c1eE4f2E6446955A64C4DFb16173C6815bb54" && this.props.profiles.length==0 ?
                <UploadProfile account={this.props.account} uploadProfile={this.props.uploadProfile} captureFile={this.props.captureFile}/>

              :<div className="row ">
                <div className="column">
                  <DocButton account={this.props.account} 
                           images={this.props.images}
                            captureFile={this.props.captureFile}
                            medicines={this.props.medicines}
                            uploadImage={this.props.uploadImage}
                            buttonFunction={this.buttonFunction}
                            profiles1={this.props.profiles1}
                            profiles2={this.props.profiles2}
                            tipImageOwner={this.props.tipImageOwner}/>
               </div>
            <div className="column1">
              <Profile profiles={this.props.profiles}/>
            </div>
          </div>
        :<Alert/>
      }
    </div>
    );
  }
}

export default Doctor;
