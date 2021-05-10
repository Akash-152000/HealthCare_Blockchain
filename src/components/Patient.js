import React, { Component } from 'react';
import Navbar from './Navbar'
import Alert from './Dialog'
import Buttons from './Buttons'
import Profile from './Profile'
import UploadProfile from './UploadProfile'
import './Patient.css'


class Patient extends Component {

  render() {
    console.log("dcdc",this.props.account==this.props.account1 && this.props.profiles.length==0)
    console.log("aaadc", this.props.account==this.props.account3 && this.props.profiles.length==0)
    return (
      <div className="super">
      {
        this.props.account==this.props.account1 || this.props.account==this.props.account2?  
          this.props.account==this.props.account1 && this.props.profiles.length==0 ?
            <UploadProfile account={this.props.account} uploadProfile={this.props.uploadProfile} captureFile={this.props.captureFile} account1={this.props.account1}
                          account2={this.props.account2}
                          account3={this.props.account3}/>
          :
            this.props.account==this.props.account2 && this.props.profiles.length==0 ?
              <UploadProfile account={this.props.account} uploadProfile={this.props.uploadProfile} captureFile={this.props.captureFile} account1={this.props.account1}
                          account2={this.props.account2}
                          account3={this.props.account3}/>
            :
              this.props.account==this.props.account3 && this.props.profiles.length==0 ?
                <UploadProfile account={this.props.account} uploadProfile={this.props.uploadProfile} captureFile={this.props.captureFile} account1={this.props.account1}
                          account2={this.props.account2}
                          account3={this.props.account3}/>

              :<div className="row ">
                <div className="column">
                  <Buttons account={this.props.account} 
                      images={this.props.images}
                          captureFile={this.props.captureFile}
                          medicines1={this.props.medicines1}
                          medicines2={this.props.medicines2}
                          uploadImage={this.props.uploadImage}
                          buttonFunction={this.buttonFunction}
                          account1={this.props.account1}
                          account2={this.props.account2}
                          account3={this.props.account3}
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

export default Patient;