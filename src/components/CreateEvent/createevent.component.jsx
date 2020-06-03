import React from 'react';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import storage from '../../Firebase/firebase.utils';

import firebase from 'firebase';


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
          artistImage: null
      }
  }
  
  handleSubmit = event => {
    event.preventDefault();
    const db = firebase.firestore();
    if (this.state.id && this.state.eventtitle && this.state.date && this.state.time && this.state.artist && this.state.profile && this.state.eventtitle !== '') {
      const eventRef = db.collection('events').add({
        id: this.state.id,
        eventtitle: this.state.eventtitle,
        date: this.state.date,
        time: this.state.time,
        artist: this.state.artist,
        profile: this.state.profile,
        eventurl: this.state.eventurl
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
          linkUrl:''

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
        name = 'linkUrl' 
        value = {this.state.linkUrl} 
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
        label = 'Youtube Url'
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
      <CustomButton type = 'submit' onClick = {this.handleSubmit}>Submit</CustomButton>
    </div>
  </div>
    )
  }
}

export default CreateEvent;