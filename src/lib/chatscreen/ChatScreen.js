import React, {useEffect, useRef } from "react";
import { Box, Stack, Input, Text, Button } from "@chakra-ui/core";
import PropTypes from 'prop-types';
import moment from 'moment'
import './styles/chatscreen.scss'


function ChatScreen(props){    
    
    const messagesEndRef = useRef(null)
        useEffect(()=>{                 
            scrollToBottom()                                                      
    },[props.messageList])    

    const scrollToBottom = () => {        
        if(messagesEndRef.current !== null){
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" })       
        }           
      }
    
    const sendMessage = () => {
        
        if(props.value !== ""){                                                  
             props.onSend()
             scrollToBottom()    
        }                
    }

    const onKeyDown = (event) => {  
        if (event.key === 'Enter') {
          event.preventDefault();
          event.stopPropagation();
          sendMessage()
        }
        
      }
 
    return (
        
    <div id="chatview">
    <div className={props.isWidget ? "widget" : ""}>            
            <div  className="chatbox">  
            <br/>                              
                {
                props.messageList.map((message, key) => {                    
                    return(                             
                        <Stack                           
                        key = {key}
                        d="flex"                          
                        alignItems={
                            message.author === "self" ? 
                            "flex-end" : 
                            message.author === "other" ?                             
                            "baseline"
                            :
                            "center"
                        }                
                        spacing={4}>    
                          <br/>    
                          <Box                                           
                        as="button" rounded="sm"  
                        alignItems="center"                                                      
                         >
                             {`Sent at ${moment(new Date()).format("MMM Do YY")}`}
                             
                        </Box>
                                                   
                        <Box                                           
                        as="button" rounded="lg"  
                        bg={
                            message.author === "self" && message.type === "text"
                            ? props.selfBgColor ? props.selfBgColor : "#00FFFF" 
                            : 
                            message.author === "other" && message.type === "text"
                             ? 
                            props.otherBgColor ? props.otherBgColor : "#00FF00"
                            :
                            "white"
                         }  px={4}                                                                                                                
                         >
                        { 
                            message.type === 'text' 
                            ?
                            <Text                                                                            
                            mt={4}>{message.data.text ? message.data.text : "Invalid Input"}                         
                            </Text>
                            :
                            null
                        }                          
                        <div ref={messagesEndRef} ></div>
                         </Box>                             
                        </Stack>            
                    )                
                })}                                
            </div>      

        <div>     
            <Box bg={props.headingBgColor ? props.headingBgColor  : "white"} w="100%" h="30%" p={4}>
                {props.headerProps ? props.headerProps : null}
            </Box>      

            <Box bg={props.bgColor ? props.bgColor : ""} w="100%" h="250%" p={4} >                  
            <div className="textbox">            
            <Stack isInline spacing={2} align="center">
              <Input  isInvalid
             
              errorBorderColor={props.borderColor ? props.errorBorderColor : "lime"} 
              focusBorderColor={props.focusBorderColor ? props.focusBorderColor  
                : "lime"} variant="outline"  onKeyDown={e => onKeyDown(e)} 
                value={props.value} 
                onChange={props.onChange} align="bottom"
               placeholder="Enter Message" />
                {
                props.sendLabel ?  <Button variantColor={props.variantColor ? props.variantColor : "green"}             
                onClick={() => sendMessage()} type="submit">Send</Button>   : ""
                }                                                                                       
              </Stack>                            
            </div>
            
            </Box>
        </div>
      </div>
      </div>
      )
}

ChatScreen.propTypes = {
    messageList: PropTypes.array,
}

ChatScreen.defaultProps = {
    messageList: []
}
  

export default ChatScreen;
