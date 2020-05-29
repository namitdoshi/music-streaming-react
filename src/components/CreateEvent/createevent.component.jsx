import React from 'react';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import {addEventItem} from '../../Firebase/firebase.utils';
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
            eventurl: ''
        }
    }
    handleSubmit = event => {
      event.preventDefault();
      const db = firebase.firestore();
      const eventRef = db.collection('events').add({
        id: this.state.id,
        eventtitle: this.state.eventtitle,
        date: this.state.date,
        time: '',
        artist: '',
        profile: '',
        eventurl: ''
      }); 

      this.setState({
            id: '',
            eventtitle: '',
            date: '',
            time: '',
            artist: '',
            profile: '',
            eventurl: ''
      })
      }
     

    handleChange = event => {
        const {value,name} = event.target

        this.setState({ [name]: value })
        console.log(this.state)
    }

   
  render(){
    return(
     <div className = 'createevent'>
       <form onSubmit = {this.handleSubmit}>
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
           type = 'text'
           name = 'date' 
           value = {this.state.date} 
           label = 'Date'
           onChange = {this.handleChange} 
           required
           />
         <FormInput 
           type = 'text'
           name = 'time' 
           value = {this.state.time} 
           label = 'Event Time' 
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
      </form>
    <div className = 'button'>
        <CustomButton type = 'submit' onClick = {this.handleSubmit}>Submit</CustomButton>
    </div>
  </div>
    )
  }
}

export default CreateEvent;