import Decentragram from '../abis/Decentragram.json'
import React, { Component } from 'react';
import Navbar from './Navbar'
import Patient from './Patient'
import Home from './Home'
import Doctor from './Doctor'
import Web3 from 'web3';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Log from './Log'



//Declare IPFS
const ipfsClient = require('ipfs-http-client')
const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' }) // leaving out the arguments will default to these values

class App extends Component {

  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3
    // Load account
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
    // Network ID
    const networkId = await web3.eth.net.getId()
    const networkData = Decentragram.networks[networkId]

   

    if(networkData) {
      const decentragram = new web3.eth.Contract(Decentragram.abi, networkData.address)
      this.setState({ decentragram })
      const imagesCount = await decentragram.methods.imageCount().call()
      this.setState({ imagesCount })
      // Load images
      for (var i = 1; i <= imagesCount; i++) {
        const image = await decentragram.methods.images(i).call()
        this.setState({
          images: [...this.state.images, image]
        })
      }
      // Sort images. Show highest tipped images first
      this.setState({
        images: this.state.images.sort((a,b) => b.tipAmount - a.tipAmount )
      })
      this.setState({ loading: false})
    } else {
      window.alert('Decentragram contract not deployed to detected network.')
    }
  }

  captureFile = event => {

    event.preventDefault()
    const file = event.target.files[0]
    const reader = new window.FileReader()
    reader.readAsArrayBuffer(file)

    reader.onloadend = () => {
      this.setState({ buffer: Buffer(reader.result) })
      console.log('buffer', this.state.buffer)
    }
  }

  uploadImage = description => {
    console.log("Submitting file to ipfs...")

    //adding file to the IPFS
    ipfs.add(this.state.buffer, (error, result) => {
      console.log('Ipfs result', result)
      if(error) {
        console.error(error)
        return
      }

      this.setState({ loading: true })
      this.state.decentragram.methods.uploadImage(result[0].hash, description).send({ from: this.state.account }).on('transactionHash', (hash) => {
        this.setState({ loading: false })
      })
    })
  }

  tipImageOwner(id, tipAmount) {
    this.setState({ loading: true })
    this.state.decentragram.methods.tipImageOwner(id).send({ from: this.state.account, value: tipAmount }).on('transactionHash', (hash) => {
      this.setState({ loading: false })
    })
  }

  constructor(props) {
    super(props)
    this.state = {
      account: '',
      decentragram: null,
      images: [],
      loading: true,
      currentDateTime: Date().toLocaleString()
    }

    this.uploadImage = this.uploadImage.bind(this)
    this.tipImageOwner = this.tipImageOwner.bind(this)
    this.captureFile = this.captureFile.bind(this)
  }

  render() {
    return (
      <div>
      <Navbar account={this.state.account}/>      
        <Router>
        
          <Route path = "/Patient" exact render = {(props) =>(
            <>
              <Patient
                account={this.state.account} 
                images={this.state.images}
                captureFile={this.captureFile}
                uploadImage={this.uploadImage}
                tipImageOwner={this.tipImageOwner}/>
            </>
          )} />

          <Route path = "/Doctor" exact render = {(props) =>(
            <>
              <Doctor
                account={this.state.account} 
                images={this.state.images}
                captureFile={this.captureFile}
                uploadImage={this.uploadImage}
                tipImageOwner={this.tipImageOwner}/>
            </>
          )} />
          <Route path='/Home'><Home/></Route>
          <Route path='/Log'><Log images={this.state.images} account={this.state.account} date={ this.state.currentDateTime }/></Route>
        </Router>
        
      </div>
    );
  }
}

export default App;