import React, { Component } from "react";

class ImageUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            url: ""
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
        
    }

    render() {
        return (
            <div>
                <input id= "avatar" name ="Profile picture" label ="Profile picture" type="file" onChange = {this.handleChange}/>
                <button onClick = {this.handleUpload}>Upload avatar</button>
            </div>

        )
    }
}

export default ImageUpload;