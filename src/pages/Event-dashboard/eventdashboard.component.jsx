import React from 'react';
import {Card} from 'reactstrap';
import EventTile from '../../components/Event-tile/event-tile.component'
import './eventdashboard.styles.scss';
import firebase from 'firebase';
import {firestore} from '../../Firebase/firebase.utils'
import { withRouter } from 'react-router-dom';
import Profile from '../../pages/Profile.component'

class EventDashboard extends React.Component {
  constructor () {
    super();
    
   this.state = {
      events: [],
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
     
       this.setState({ events: events, snapshot:snapshot})
        //console.log(snapshot)
    })
    .catch(error => console.log(error))}


  render () {
  
  //   const eventRef = db.collection('events').doc('events.id').onSnapshot(function(doc) {
  //     console.log("Current data: ", doc.data());
  //

  if(this.state.events.length === 0  )
  

    {
      //console.log(this.state.events)
     // console.log(this.state.snapshot)
    return (
      <div className='container' style={{textAlign: 'center', marginTop: '5vh'}}>
        <h3>Sorry No events available. Please stay tuned to our social platforms to stay updated about our events.
        <br/>
        
        <a href='https://www.instagram.com/artlive.in/' target='_blank'><i className="fab fa-instagram footer-icons" style={{color: '#000'}}></i></a>
        <a href='https://www.facebook.com/ART-LIVE-103822921381896' target='_blank' style={{paddingLeft: '1rem', color: '#000'}}><i className="fab fa-facebook-square footer-icons"></i></a>
        </h3>

      
      </div>

      
    )
  }
  else {
    // {
      // console.log(this.state.events)
    // }
    return (
     
      
      <div className='container events'>
      {  this.state.events &&
       this.state.events.map ( event => {
         return (
            <div key = {event.id}>
               <Card>
              <EventTile eventTitle={event.eventtitle} artitstName={event.artist} eventDate={event.date}
               eventTime={event.time} artistImageURL = {event.artistImageURL} eventDescription = {event.description}
               eventDuration = {event.eventDuration}     ticketPrice ={event.price} genre = {event.genre}/>
               
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
  }}
}

export default withRouter(EventDashboard);