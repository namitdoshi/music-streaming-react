import React from 'react';

import EventTile from '../../components/Event-tile/event-tile.component'
import './eventdashboard.styles.scss';


const EventDashboard = () => (
  <div className='container events'>
    <EventTile/>
  </div>
);

export default EventDashboard;