import React from 'react';
import firebase from 'firebase';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import storage from '../../Firebase/firebase.utils';
import './createevent.styles.scss'



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
      eventUrl: '',
      artistImage: null,
      artistImageURL: '',
      linkUrl1: '',
      linkUrl: '',
      genre: '',
      description: '',
      price: '',
      eventDuration: ''
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
    if (this.state.id && this.state.eventtitle && 
      this.state.date && this.state.time && 
      this.state.artist && this.state.genre && this.state.description &&
      this.state.profile && this.state.eventtitle !== '') {
      const eventRef = db.collection('events').add({
        id: this.state.id,
        eventtitle: this.state.eventtitle,
        date: this.state.date,
        time: this.state.time,
        artist: this.state.artist,
        profile: this.state.profile,
        eventUrl: this.state.eventUrl,
        artistImageURL: this.state.artistImageURL,
        linkUrl: this.state.linkUrl,
        linkUrl1: this.state.linkUrl1,
        genre:this.state.genre,
        description: this.state.description,
        price: this.state.price,
        eventDuration: this.state.eventDuration

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
      eventUrl: '',
      artistImageURL: '',
      linkUrl1: '',
      linkUrl: '',
      genre: '',
      description: '',
      price: '',
      eventDuration: ''
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
      this.state.artistImage = artistImage
      console.log(this.state.artistImage)
    }
  }
  
  uploadImage = event => {
    var storageRef = firebase.storage().ref()
    const artistImage = this.state.artistImage
    const uploadTask = storageRef.child(`images/${artistImage.name}`).put(artistImage)

    var tempURL = ''

    uploadTask.on('state_changed', 
      function (snapshot) {

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
        type = 'text'
        name = 'time'
        label =  'Time' 
        value = {this.state.time} 
        onChange = {this.handleChange} 
        required
      />
      <FormInput 
        type = 'text'
        name = 'linkUrl' 
        value = {this.state.linkUrl} 
        onChange = {this.handleChange} 
        label = 'Social Link'
        required
      />
       <FormInput 
        type = 'text'
        name = 'linkUrl1' 
        label = 'Social Link'
        value = {this.state.linkUrl1} 
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
        name = 'genre' 
        label = 'Genre'
        value = {this.state.genre} 
        onChange = {this.handleChange} 
        required
      />
       <FormInput 
        type = 'text'
        name = 'description' 
        label = 'Description'
        value = {this.state.description} 
        onChange = {this.handleChange} 
        required
      />
       <FormInput 
        type = 'text'
        name = 'eventDuration' 
        label = 'Event Duration'
        value = {this.state.eventDuration} 
        onChange = {this.handleChange} 
        required
      />
      <FormInput
        type = 'text'
        name = 'eventUrl'
        value = {this.state.eventUrl} 
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
        label = 'Price'
        value = {this.state.price} 
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