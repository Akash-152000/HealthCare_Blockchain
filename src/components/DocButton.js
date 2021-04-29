import React, { Component} from 'react'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import Upload from './Upload'
import Log from './Log'
import Patient from './Patient'
import './App.css'

class DocButton extends Component {

  constructor(props) {
      super(props)
      this.state = {
        bool:"one" 

      }
      this.handleClick1 = this.handleClick1.bind(this);
      this.handleClick2 = this.handleClick2.bind(this);
    }

    handleClick1 = () =>{
      this.setState({ bool:"two" });
  }
    handleClick2 = () =>{
      this.setState({ bool:"three" });
  }

  render() {
    console.log("im in doc button",this.props.medicines)
    return (
    <div>
      <button type="button" class="btn btn-outline-primary" data-mdb-ripple-color="dark" onClick={this.handleClick1}>
        <a href="/DocPatient">Akash</a>
      </button>
      <button type="button" class="btn btn-outline-secondary" data-mdb-ripple-color="dark" onClick={this.handleClick2}>
        <a href="/DocPatient">Rohit</a>
      </button>

    </div>
    );
  }
}

export default DocButton;
