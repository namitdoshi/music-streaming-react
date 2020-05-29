import React from 'react';

import EventTile from '../../components/Event-tile/event-tile.component'
import './eventdashboard.styles.scss';
import firebase from 'firebase';



// const EventDashboard = () => (
//   <div className='container events'>
//     <EventTile/ > 
//   </div>
// );

class EventDashboard extends React.Component {
  constructor () {
    super()
    const db = firebase.firestore();
  //   const eventRef = db.collection('events').doc('events.id').onSnapshot(function(doc) {
  //     console.log("Current data: ", doc.data());
  // });

  db.collection('events').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
      console.log(doc.data())
    })
  })

  }
  render () {
    return (
      <div className='container events'>
        <EventTile/ > 
      </div>
    )
  }
}

export default EventDashboard;