import React, { Component } from 'react';
import Navbar from './Navbar'
import Dialog from './Dialog'
import Profile from './Profile'
import Log from './Log'
import './Patient.css'


class DocPatient extends Component {

 
  render() {

    return (
    <div className="row ">
      <div className="column" >
        <Log images={this.props.images} account={this.props.account} date={ this.props.currentDateTime }/>
      </div>
      <div className="column1">
        <Profile/>
      </div>
    </div>
    );
  }
}

export default DocPatient;