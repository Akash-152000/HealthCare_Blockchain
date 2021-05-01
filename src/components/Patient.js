import React, { Component } from 'react';
import Navbar from './Navbar'
import Alert from './Dialog'
import Buttons from './Buttons'
import Profile from './Profile'
import UploadProfile from './UploadProfile'
import './Patient.css'


class Patient extends Component {

  render() {
    return (
      <div className="super">
      {
        this.props.account=="0x8c883D229fc97F477153a6ba56367E2FBf73b310" || this.props.account=="0xE2a6078e50592330C3113161325cE01f364Ac00C"?  
          this.props.account=="0x8c883D229fc97F477153a6ba56367E2FBf73b310" && this.props.profiles.length==0 ?
            <UploadProfile account={this.props.account} uploadProfile={this.props.uploadProfile} captureFile={this.props.captureFile}/>
          :
            this.props.account=="0xE2a6078e50592330C3113161325cE01f364Ac00C" && this.props.profiles.length==0 ?
              <UploadProfile account={this.props.account} uploadProfile={this.props.uploadProfile} captureFile={this.props.captureFile}/>
            :
              this.props.account=="0x8c883D229fc97F477153a6ba56367E2FBf73b310" && this.props.profiles.length==0 ?
                <UploadProfile account={this.props.account} uploadProfile={this.props.uploadProfile} captureFile={this.props.captureFile}/>

              :<div className="row ">
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