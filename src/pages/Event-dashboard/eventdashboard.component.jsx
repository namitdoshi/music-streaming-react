import React from 'react';

import EventTile from '../../components/Event-tile/event-tile.component'
import './eventdashboard.styles.scss';
import firebase from 'firebase';
import CustomButton from '../../components/custom-button/custom-button.component';

import EventInfo from '../../components/Event/eventInfo.component'
import { withRouter } from 'react-router-dom';


class EventDashboard extends React.Component {
  constructor () {
    super();
    
   this.state = {
      events: null

    }     
   }
   handleClick = event =>{
     
    this.props.history.push(`/`)
}
  
   componentDidMount()
   {
   const db = firebase.firestore();
    db.collection('events')
    .get()
    .then( snapshot => {
      const events = [] 
      snapshot.forEach( doc => {
        const data = doc.data()
        events.push(data)
      })
       this.setState({ events: events})
        console.log(snapshot)
    })
    .catch(error => console.log(error))}
  render () {
  
  //   const eventRef = db.collection('events').doc('events.id').onSnapshot(function(doc) {
  //     console.log("Current data: ", doc.data());
  //
    
    return (
      <div className='container events'>
      {  this.state.events &&
       this.state.events.map ( event => {
         return (
            <div key = {event.id}>
              <EventTile eventTitle={event.eventtitle} artitstName={event.artist} eventDate={event.date} eventTime={event.time}/>
              <CustomButton type = 'submit' onClick = {this.handleClick}>Submit </CustomButton>
            </div>
         )
       }) }
       
      </div>
    )
  }
}

export default withRouter(EventDashboard);