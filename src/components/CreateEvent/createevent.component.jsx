import React from 'react';
import firebase from 'firebase';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';


class CreateEvent extends React.Component{
  constructor(){
    super();
    this.state = {
      id: '',
      eventtitle: '',
      date: '',
      time: '',
      artist: '',
      profile: '',
      eventurl: '',
      artistImage: null,
      artistImageURL: '',
      price: 0
        
    }
      this.uploadImage = this.uploadImage.bind(this)
  }

  handleImageURLstate = url => {
    console.log(this.state)
    console.log('namit')
    console.log(url)  
  }
  
  handleSubmit = event => {
    event.preventDefault();
    const db = firebase.firestore();
    if (this.state.id && this.state.eventtitle && this.state.date && this.state.time && this.state.artist && this.state.profile && this.state.eventtitle !== '' && this.state.price !== 0) {
      db.collection('events').add({
        id: this.state.id,
        eventtitle: this.state.eventtitle,
        date: this.state.date,
        time: this.state.time,
        artist: this.state.artist,
        profile: this.state.profile,
        eventurl: this.state.eventurl,
        artistImageURL: this.state.artistImageURL,
        price: this.state.price
      });
    } else {
      alert('Fill all the fields')
    }

    this.setState({
      id: '',
      eventtitle: '',
      date: '',
      time: '',
      artist: '',
      profile: '',
      eventurl: '',
      artistImageURL: '',
      price: 0
    })
    }
    


  handleChange = event => {
    const {value,name} = event.target

    this.setState({ [name]: value })
    console.log(this.state)
  }

  handleImage = event => {
    if (event.target.files[0]) {
      const artistImage = event.target.files[0]
      this.setState({artistImage : artistImage})
      console.log(this.state.artistImage)
    }
  }
  
  uploadImage = event => {
    var storageRef = firebase.storage().ref()
    const artistImage = this.state.artistImage
    const uploadTask = storageRef.child(`images/${artistImage.name}`).put(artistImage)

    

    uploadTask.on('state_changed', 
      function (snapshot) {
        console.log(snapshot)
      },
      function (error) {
        console.log(error)
      },
      function () {
        storageRef.child(`images/${artistImage.name}`).getDownloadURL().then( url => {
          console.log(url)
          
        }).catch(function(error) {

          switch (error.code) {
            case 'storage/object-not-found':
              // File doesn't exist
              console.log('storage/object-not-found')
              break;
        
            case 'storage/unauthorized':
              // User doesn't have permission to access the object
              console.log('storage/unauthorized')
              break;
        
            case 'storage/canceled':
              // User canceled the upload
              console.log('storage/canceled')
              break;
        
            case 'storage/unknown':
              // Unknown error occurred, inspect the server response
              console.log('storage/unknown')
              break;
            default:
              console.log('Error')
          }
        })
      }
    )
    }


    // Get URL
    getURL = event => {
      event.preventDefault()
      var storageRef = firebase.storage().ref()
      const artistImage = this.state.artistImage
      storageRef.child(`images/${artistImage.name}`).getDownloadURL().then(url => {
        this.state.artistImageURL = url
        console.log(this.state)
      })
    }
    
  

  render(){
    return(
     <div className = 'createevent'>      
      
      <h1 style={{margin: '5vh 0'}}>Create Event</h1>

      <FormInput
        type = 'text'
        name = 'eventtitle'
        value = {this.state.eventtitle} 
        label = 'Event Title' 
        onChange = {this.handleChange}
        required
      />
      <FormInput 
        type= 'text'
        name = 'artist' 
        value = {this.state.artist} 
        label = 'Artist Name'
        onChange = {this.handleChange}
        required
      />
      <FormInput 
        type = 'date'
        name = 'date' 
        value = {this.state.date} 
        onChange = {this.handleChange} 
        required
        />
      <FormInput 
        type = 'time'
        name = 'time' 
        value = {this.state.time} 
        onChange = {this.handleChange} 
        required
      />
      <FormInput 
        type = 'text'
        name = 'profile' 
        value = {this.state.profile} 
        label = 'Profile' 
        onChange = {this.handleChange} 
        required
      />
      <FormInput
        type = 'text'
        name = 'eventurl'
        value = {this.state.eventurl} 
        label = 'Event Url'
        onChange = {this.handleChange} 
        required
      />
      <FormInput
        type = 'text'
        name = 'id' 
        value = {this.state.id} 
        label = 'Event Id'
        onChange = {this.handleChange} 
        required
      />
      <FormInput
        type = 'text'
        name = 'price' 
        value = {this.state.price} 
        label = 'Event Ticket Price'
        onChange = {this.handleChange} 
        required
      />
      <input
        className = 'form-control'
        type = 'file'
        name = 'artist-image' 
        value = {this.state.artistImage} 
        label = 'Artist Image'
        onChange = {this.handleImage} 
        style={{marginBottom: '1.5rem'}}
        required
      />
  
    <div className = 'button'>
      <CustomButton type = 'submit' onClick = {this.uploadImage}>Upload</CustomButton>
      <CustomButton type = 'submit' onClick = {this.getURL}>Get URL</CustomButton>
      <CustomButton type = 'submit' onClick = {this.handleSubmit}>Submit</CustomButton>
    </div>
  </div>
    )
  }
}

export default CreateEvent;