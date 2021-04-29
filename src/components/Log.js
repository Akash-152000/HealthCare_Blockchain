import React, { Component } from 'react';
import './App.js'
import Web3 from 'web3';
import Navbar from './Navbar'
import {Link} from 'react-router-dom';
import Alert from './Dialog'

// import ipfs from './ipfs';
// const ipfsClient = require('ipfs-http-client')
// const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' })


class Doctor extends Component{
  render(){
    console.log("looggg",this.props.medicines)
    return(
      <React.Fragment>
        {this.props.account=="0xa4B5CAFd253f8f1dd5933e83733D4FFb8e63589f"?
           this.props.medicines.map((image, key) => {
                  return(
                    <div>
                      <div className="card mb-4" key={key} >
                        <ul id="imageList" className="list-group list-group-flush">
                          <li className="list-group-item">
                            <p class="text-center"><iframe src={`https://ipfs.infura.io/ipfs/${this.props.images[key].hash}`} width="500px" height="500px"/></p>
                            <p><b>Patient message: </b>{this.props.images[key].description}</p>
                            <p><b>Prescription: </b>{image.prescription}</p>
                            
                            <p>{this.props.date}</p>
                          </li>    
                        </ul>
                      </div>

                    </div>
                  )
                })
          :<Alert />
      }

      </React.Fragment>
      )
  }

}

export default Doctor
