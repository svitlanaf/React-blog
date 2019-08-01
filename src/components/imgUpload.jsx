import React, { Component } from "react";
import { storage } from "../firebase/firebase.utils";


class ImageUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            url: "",
            progress: 0
        }
    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    }

    handleChange = e => {
        if(e.target.files[0]) {
            const image = e.target.files[0];
            this.setState (() => ({image}));
        }
    }

    handleUpload = () => {
        const {image} = this.state;
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on('state_changed',
        (snapshot) => {
            //progress function
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            this.setState({progress});
        },
        (error) => {
            console.log(error);
        }, 
        () => {
            storage.ref('images').child(image.name).getDownloadURL().then(url => {
                console.log(url)
                this.setState({url})
            })
            //complete function

        });
    }

    render() {
        return (
            <div>
                <input id= "avatar" name ="Profile picture" label ="Profile picture" type="file" onChange = {this.handleChange}/>
                <button onClick = {this.handleUpload}>Upload avatar</button>
                <br />
                <img src={this.state.url || 'https://via.placeholder.com/200x200'} alt="Uploaded images" height="200" width ="200"/>
                <br/>
                <progress value={this.state.progress} max="100" />
                <br/>
            </div>

        )
    }
}

export default ImageUpload;