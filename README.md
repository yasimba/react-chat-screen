To view in visual studio - command+shift+v (Mac)


### `SIMPLE DEMO`
![demo](/assets/demo.gif)


## Extremely Customizable
![demo2](/assets/demo2.gif)

## Widget Support
![demo3](/assets/demo3.png)



### `INSTALLATION`
- `npm install react-chat-screen`
- `yarn add react-chat-screen`


### `QUICKSTART`
```javascript
import React, { useState, useEffect } from 'react';
import ChatScreen from 'react-chat-screen';


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
```

### `Plenty of props to play with!`
```javascript 
    <ChatScreen            
            messageList={[]}
            onSend={()=>{}}
            sendLabel={false}
            isWidget = {false}
            otherBgColor={""}    
            selfBgColor={""}    
            headingBgColor={""}    
            errorBorderColor={""}
            focusBorderColor={""}
            value = {""}
            sendLabel={""}
            sendBtnColor={""}
            onChange = {()=>{}}       
        />
```


### `ROADMAP`
- [ ] Add more tests
- [ ] Add emoji support
- [ ] Add is-typing feature
- [ ] Add slack-like unread messages


### `CONTRIBUTING`
- Pull requests and Contributions are Welcome!
- `yarn test`