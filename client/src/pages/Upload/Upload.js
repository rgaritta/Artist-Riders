import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import "./style.css";
import API from "../../utils/API";

const CLOUDINARY_UPLOAD_PRESET = 'wi81xmo6';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dml7tzpb4/upload';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    const username = this.props.auth.username;
    console.log(username);

    this.state = {
      uploadedFile: null,
      uploadedFileCloudinaryUrl: ''
    };
    
  }
  

  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });

    this.handleImageUpload(files[0]);
    
  }

  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                     .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                     .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url
        });

        API.saveRider({
          name: this.state.uploadedFile.name,
          user: this.props.auth.username,
          link: response.body.secure_url
        })
          .catch(err => console.log(err));
      }
    });
  
  
  }

  render() {
    return (
      <form>
        <Col size="md-12">
			<Jumbotron>
				<h1>Upload</h1>
        <h4>You can upload your riders here.</h4>
			</Jumbotron>
			</Col>
        <div className="FileUpload">
          <Dropzone
            onDrop={this.onImageDrop.bind(this)}
            multiple={false}
            accept=".doc, .pdf, .docx, .jpg">
            <div>Drop a DOC or PDF file or click to select a file to upload.</div>
          </Dropzone>
        

        <div>
          {this.state.uploadedFileCloudinaryUrl === '' ? null :
          <div>
            <p>{this.state.uploadedFile.name} was uploaded succesfully!</p>
            <a target="_blank" href={this.state.uploadedFileCloudinaryUrl}>Click here to view your upload</a>
          </div>}
        </div>
        </div>
      </form>
    )
  }
}
