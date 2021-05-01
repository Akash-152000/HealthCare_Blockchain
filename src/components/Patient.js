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
        this.props.account=="0x272b4072de19DF4cf948Af98DaEa272CdAeD8267" || this.props.account=="0x87142617dd0627e9a4eeDcc0102Ef39ba6D6107A"?  
          this.props.account=="0x272b4072de19DF4cf948Af98DaEa272CdAeD8267" && this.props.profiles.length==0 ?
            <UploadProfile account={this.props.account} uploadProfile={this.props.uploadProfile} captureFile={this.props.captureFile}/>
          :
            this.props.account=="0x87142617dd0627e9a4eeDcc0102Ef39ba6D6107A" && this.props.profiles.length==0 ?
              <UploadProfile account={this.props.account} uploadProfile={this.props.uploadProfile} captureFile={this.props.captureFile}/>
            :
              this.props.account=="0x11b7d97F38B45116162F7F5613846f9D8faDa293" && this.props.profiles.length==0 ?
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