import React from 'react';

import firebase from 'firebase';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component'

class Contact extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name : '',
            email: '',
            number: '',
            subject: '',
            description: ''
        }
    }

    handleChange = event => {
        const {value,name} = event.target;
        this.setState({ [name]: value })
    }

    handleSubmit = event => {
        event.preventDefault();

        const db = firebase.firestore();
        if (this.state.name && this.state.email && this.state.number && this.state.subject && this.state.description !== '') {
            db.collection('contact').add({
             name : this.state.name,
             email: this.state.email,
             number: this.state.number,
             subject: this.state.subject,
             description: this.state.description
          }
          )
          alert('Thanks for contacting us! We will contact you soon !! ');
        }else{
            alert('Please fill all fields')
        }
       this.setState({
        name : '',
        email: '',
        number: '',
        subject: '',
        description: ''
       })
    }

    render(){
        return(
          <div>
            <FormInput name = 'name' value = {this.state.name} label = 'Full Name' type = 'text' required onChange = {this.handleChange} />
            
            <FormInput name = 'email' value = {this.state.email} label = 'Email' type = 'email' required onChange = {this.handleChange} />

            <FormInput name = 'number' value = {this.state.number} label = 'Contact' type = 'tel' required onChange = {this.handleChange} />
            
            <FormInput name = 'subject' value = {this.state.subject} label = 'Subject' type = 'text' required onChange = {this.handleChange} />

            <FormInput name = 'description' value = {this.state.description} label = 'Description' type = 'text' required onChange = {this.handleChange} />
            <div>
              <CustomButton type = 'submit' onClick = {this.handleSubmit}>Submit</CustomButton>   
            </div>
         </div>            
            )
    }
}

export default Contact;