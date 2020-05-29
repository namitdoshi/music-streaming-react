import React from 'react';
import CreateEvent from '../../components/CreateEvent/createevent.component'

class Admin extends React.Component{
   
  render(){
    return(
      <div className='container'>
        <CreateEvent/>
      </div>
      )
  }
    
}
export default Admin;