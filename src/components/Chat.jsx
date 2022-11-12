import React, { Component } from 'react'
import QuadroOne from './QuadroOne';
import QuadroTow from './QuadroTow';

class Chat extends Component {
  render() {
    return (
      <div className='container-main'>
        <div>
        <QuadroOne />
        </div>
        <div>
        <QuadroTow />
        </div>
      </div>
    )
  }
}
export default Chat;
