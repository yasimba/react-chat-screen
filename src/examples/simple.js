import React, { useState, useEffect } from 'react'
import ChatScreen from '../lib';


function Example(){
    const[messageList, setMessageList] = useState([])
    const[msg, setMsg] = useState('')
    useEffect(()=> {        
        let authorObj = {
            author: 'self',
            type: 'text',
            data: { 
                text: 'hi'
             }
        }
        setMessageList(messageList => [...messageList,  authorObj]);        
    }, [])
 

    const onSend = () => {    
        let authorObj = {
            author: 'other',
            type: 'text',
            data: { 
                text: msg
             }
        }      
        setMessageList(messageList => [...messageList,  authorObj]);
        setMsg('')        
    }
    return (
        <div >     
         <ChatScreen            
            messageList={messageList}
            onSend={onSend}
            sendLabel={true}
            isWidget = {false}
            otherBgColor="lime"            
            value = {msg}
            onChange = {(e)=> setMsg(e.target.value)}       
        />
        </div>
    ) 
}

export default Example;