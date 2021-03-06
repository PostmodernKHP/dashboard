import React from 'react';
import { Input,Button } from 'antd';
const ChatBar = (props) => {
  const onKeyChange = (e) => {
    props.onKeyChange(e.target.value)
  }
  return (
    <div className="chat-input">
      <Input style={{width: '35%', marginLeft: '5rem'}} value={props.Message} onChange={onKeyChange}/>
      <Button type='primary'style={{width: '10%', marginLeft: '1rem', backgroundColor: '#0b95c8'}}  onClick={props.onMessageSend}>Send</Button>
    </div>
  )

};

export default ChatBar;