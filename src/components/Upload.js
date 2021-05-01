import React, { Component } from 'react';
import Navbar from './Navbar'
import Alert from './Dialog'


class Upload extends Component {
    
 

  render() {
    return (
    <div>
      {
        this.props.account=="0x8c883D229fc97F477153a6ba56367E2FBf73b310" || this.props.account=="0xE2a6078e50592330C3113161325cE01f364Ac00C"?
        <div className="container-fluid mt-5">
        <div className="row">
          <main role="main" className="col-lg-12 ml-auto mr-auto" style={{ maxWidth: '500px' }}>
            <div className="content mr-auto ml-auto">
              <p>&nbsp;</p>
              <h2>PATIENT REPORT Image</h2>
              <form onSubmit={(event) => {
                event.preventDefault()
                const description = this.imageDescription.value
                this.props.uploadImage(description)
            
                }} >
                <input type='file' accept=".jpg, .jpeg, .png, .bmp, .gif , .csv, .pdf,.txt" onChange={this.props.captureFile} />
                  <div className="form-group mr-sm-2">
                    <br></br>
                      <textarea
                        id="imageDescription"
                        row="4"
                        type="text"
                        ref={(input) => { this.imageDescription = input }}
                        className="form-control"
                        placeholder="Patient Details.."
                        required />
                  </div>
                <button type="submit" className="btn btn-primary btn-block btn-lg">Upload!</button>
              </form>
              <p>&nbsp;</p>
              {/* { this.props.images.map((image, key) => {
                return(
                  <div className="card mb-4" key={key} >
                    <ul id="imageList" className="list-group list-group-flush">
                      <li className="list-group-item">
                        <p class="text-center"><img src={`https://ipfs.infura.io/ipfs/${image.hash}`} style={{ maxWidth: '420px'}}/></p>
                        <p>{image.description}</p>
                      </li>    
                    </ul>
                  </div>
                )
              })} */}
            </div>
          </main>
        </div>
      </div>
      :<Alert />
      }
      
    </div>  
    );
  }
}

export default Upload;