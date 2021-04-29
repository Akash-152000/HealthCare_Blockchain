import React, { Component } from 'react';
import Navbar from './Navbar'
import Dialog from './Dialog'
import Profile from './Profile'
import Log from './Log'
import './Patient.css'


class DocPatient1 extends Component {

 
  render() {
    return (
    <div className="row">
      <div className="column">
        <form onSubmit={(event) => {
                  event.preventDefault()
                  const description = this.imageDescription.value
                  const num=1
                  this.props.uploadImage1(description,num)
              
                  }} >
                    <div className="form-group mr-sm-2">
                      <br></br>
                        <textarea
                          id="imageDescription"
                          row="4"
                          type="text"
                          ref={(input) => { this.imageDescription = input }}
                          className="form-control"
                          placeholder="Prescribe to Patient1."
                          required />
                    </div>
                  <button type="submit" className="btn btn-primary btn-block btn-lg">Upload!</button>
                </form>
          <Log images={this.props.images} medicines={this.props.medicines} account={this.props.account} date={ this.props.currentDateTime }/>
      </div>
    </div>
    );
  }
}

export default DocPatient1;