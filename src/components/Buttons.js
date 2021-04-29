import React, { Component} from 'react'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import Upload from './Upload'
import Log from './Log'
import Patient from './Patient'
import './App.css'

class Buttons extends Component {

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

    return (
    <div>
      <button type="button" class="btn btn-outline-primary" data-mdb-ripple-color="dark" onClick={this.handleClick1}>
        Upload
      </button>
      <button type="button" class="btn btn-outline-secondary" data-mdb-ripple-color="dark" onClick={this.handleClick2}>
        History 
      </button>


      {
          (() => {
             if (this.state.bool=="one")
                return( 
                  <div style={{ marginLeft: '20%', marginTop: '60px', width: '100%', height:'100%' }}>

                  </div>
                  )
             if (this.state.bool=="two")
                return (
                    <div style={{ marginLeft: '30%', marginTop: '60px', width: '50%',border:'solid 1px', height:'100%'  }}>
                      <Upload account={this.props.account} images={this.props.images}
                          captureFile={this.props.captureFile}
                          uploadImage={this.props.uploadImage}
                          tipImageOwner={this.props.tipImageOwner}/>  
                    </div>
                  )
             else
                return (
                  <div style={{ marginLeft: '30%', marginTop: '60px', width: '75%',border:'solid 1px', height:'100%'  }}>
                    <Log images={this.props.images} medicines={this.props.medicines} account={this.props.account} date={ this.props.currentDateTime }/>
                    
                  </div>
                  )
          })()
      }



    </div>
    );
  }
}

export default Buttons;
