import React from 'react';
import {Card} from 'reactstrap';
import EventTile from '../../components/Event-tile/event-tile.component'
import './eventdashboard.styles.scss';
import firebase from 'firebase';

import { withRouter } from 'react-router-dom';
import Profile from '../../pages/Profile.component'

class EventDashboard extends React.Component {
  constructor () {
    super();
    
   this.state = {
      events: null,
    }     
   }
   
   handleSubmit = () => {    
     this.props.history.push('/')
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
        //console.log(snapshot)
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
               <Card>
              <EventTile eventTitle={event.eventtitle} artitstName={event.artist} eventDate={event.date}
               eventTime={event.time} artistImageURL = {event.artistImageURL} eventDescription = {event.description}
                ticketPrice ={event.price} genre = {event.genre}/>
               
              <div style={{display: 'flex', justifyContent: 'flex-end', marginRight: '1rem', marginBottom: '1rem'}}>
                <Profile  profile ={event.profile}  price = {event.price}  
                eventtitle = {event.eventtitle} eventId = {event.id} artitstName = {event.artist} 
                socialUrl1 = {event.linkUrl} socialUrl2 = {event.linkUrl1}
                buttonLabel = 'View Details'> 
                </Profile>
              </div>
              </Card>
            </div>
         )
        })
       } 
      
      </div>
    )
  }
}

export default withRouter(EventDashboard);