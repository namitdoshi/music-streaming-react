import React from 'react';
import Iframe from 'react-iframe'
import { auth } from '../../Firebase/firebase.utils';
import { firestore } from '../../Firebase/firebase.utils'

class MusicPlayer extends React.Component{

  render(){
    const queryString = window.location.search;
    const eventId = queryString.slice(10)
    console.log(eventId)

    if (auth.currentUser != null) {
      var eventURL = ''
      firestore.collection('events').where('id', '==', eventId).get()
      .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
              eventURL = doc.data().artistImageURL
          });
          console.log(eventURL)
      })
      .catch(function(error) {
          console.log("Error getting documents: ", error);
      });
      return( 
        <Iframe url="https://play.streamingvideoprovider.com/popplayer.php?it=aikcct6vfa8g&is_link=1&w=720&h=405&pause=1&title=Test+concert&skin=3&repeat=&brandNW=1&start_volume=100&bg_gradient1=%23ffffff&bg_gradient2=%23e9e9e9&fullscreen=1&fs_mode=2&skinAlpha=50&colorBase=%23250864&colorIcon=%23ffffff&colorHighlight=%237f54f8&direct=false&no_ctrl=&auto_hide=1&viewers_limit=0&cc_position=bottom&cc_positionOffset=70&cc_multiplier=0.03&cc_textColor=%23ffffff&cc_textOutlineColor=%23ffffff&cc_bkgColor=%23000000&cc_bkgAlpha=0.1&image=&mainBg_Color=%23ffffff&aspect_ratio=16%3A9&play_button=1&play_button_style=static&sleek_player=1&stretch="
        width="450px"
        height="450px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"
        allow = 'fullscreen'/>
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