import React from 'react';

import EventTile from '../../components/Event-tile/event-tile.component'
import './eventdashboard.styles.scss';
import firebase from 'firebase';

import {firestore} from '../../Firebase/firebase.utils'


class EventDashboard extends React.Component {
  constructor () {
    super();
    
   this.state = {
      events: null
    }     
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
            <div>
              <EventTile eventTitle={event.eventtitle} artitstName={event.artist} eventDate={event.date} eventTime={event.time}/>
            </div>
         )
       }) }
       
      </div>
    )
  }
}

export default EventDashboard;