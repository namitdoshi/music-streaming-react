import React from 'react';
import MusicPlayer from '../components/player/musicplayer'


class Stream extends React.Component{
   render(){
       return(<MusicPlayer url = "https://play.streamingvideoprovider.com/popplayer.php?it=aikcct6vfa8g&is_link=1&w=720&h=405&pause=1&title=Test+concert&skin=3&repeat=&brandNW=1&start_volume=100&bg_gradient1=%23ffffff&bg_gradient2=%23e9e9e9&fullscreen=1&fs_mode=2&skinAlpha=50&colorBase=%23250864&colorIcon=%23ffffff&colorHighlight=%237f54f8&direct=false&no_ctrl=&auto_hide=1&viewers_limit=0&cc_position=bottom&cc_positionOffset=70&cc_multiplier=0.03&cc_textColor=%23ffffff&cc_textOutlineColor=%23ffffff&cc_bkgColor=%23000000&cc_bkgAlpha=0.1&image=&mainBg_Color=%23ffffff&aspect_ratio=16%3A9&play_button=1&play_button_style=static&sleek_player=1&stretch="/>
       )
   }
}
    
export default Stream;
