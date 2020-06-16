import React from 'react';
import Iframe from 'react-iframe'
import { auth } from '../../Firebase/firebase.utils';
import { firestore } from '../../Firebase/firebase.utils'

class MusicPlayer extends React.Component{

  constructor () {
    super()
    this.state = {
      eventURL: ''
    }
  }

  render(){
    const queryString = window.location.search;
    const eventId = queryString.slice(10)
    console.log(eventId)

    if (auth.currentUser != null) {
      var eventLink = ''
      firestore.collection('events').where('id', '==', eventId).get()
      .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
              // eventURL = doc.data().artistImageURL
              eventLink = 'https://player.cloud.wowza.com/hosted/kjjqhpbf/player.html'
              this.setState({eventURL: eventLink})
          });
          // loadScript(eventURL) 
          console.log(this.state.eventURL)
      })
      .catch(function(error) {
          console.log("Error getting documents: ", error);
      });
      // const URL = loadScript('//player.cloud.wowza.com/hosted/hgwpfnyc/wowza.js')
      return( 
        
      // <Iframe url='
      // ' />
      <div style={{display: 'flex', justifyContent: 'center'}}>
      {console.log(this.state.eventURL)}
        <Iframe url={this.state.eventURL}
        width="100%"
        height="1000px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"
        allow = 'fullscreen'/>
      </div>

      )
    } else {
      return (
        <div>
          <center><h2>The Page you're trying to access is Forbidden</h2></center>
          <center><h2>You must login to access the page</h2></center>
        </div>
      )
    }
  }
}
   


export default MusicPlayer;