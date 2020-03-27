import React from 'react';
import { ThemeProvider, CSSReset } from "@chakra-ui/core"
import ChatScreen from './chatscreen/ChatScreen';

function Lib(props) {
    return (
        <ThemeProvider>
        <CSSReset />
        <ChatScreen {...props} />
        </ThemeProvider>
    );
  }

export default Lib;
