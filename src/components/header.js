import {React, Fragment} from 'react';
import {Flex, HStack, Image, Box} from '@chakra-ui/react';
import theme from './theme.js';


function Header (){
    return (
        <Fragment theme = {theme}>
            <Flex as = 'header' align = 'center' justify = "center" direction = "column" bg = "#286dc0" borderTop = "15px solid #0f4d92">
                <Box bg = "#286dc0">
                    <HStack >
                        <Box> <Image 
                            src = "https://interactive-machines.gitlab.io/assets/img_logo_transparent.png"
                            maxWidth = "300px"
                            maxHeight = "300px"
                            pl = "10px"
                            pt = "10px"
                            pb = "10px"
                        /></Box>
                        {/* <Heading as = 'h1' color = "white" size = {['2xl','3xl']} align = 'center'>Site Header</Heading> */}
                    </HStack>
                </Box>
            </Flex>
        </Fragment>
    );
}

export default Header;