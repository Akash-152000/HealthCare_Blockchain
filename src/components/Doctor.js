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
	  return(
	    <React.Fragment>
        {this.props.account=="0x27cdC5f98122F6a8649A12924a43be7e9C7fFC69"?
           this.props.images.map((image, key) => {
                  return(
                    <div className="card mb-4" key={key} >
                      <ul id="imageList" className="list-group list-group-flush">
                        <li className="list-group-item">
                          <p class="text-center"><iframe src={`https://ipfs.infura.io/ipfs/${image.hash}`} width="500px" height="500px"/></p>
                          <p>{image.description}</p>
                          <p>{this.props.date}</p>
                        </li>    
                      </ul>
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