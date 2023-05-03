import React from 'react';
import {Container, Flex, HStack, Heading} from '@chakra-ui/react';

function Summary(){
    return (
        <HStack bg = "#0f4d92" >
            <Container width = "20%" ></Container>
            <Flex align = 'center' justify = 'center' pt = "30px" bg = "#B0DAFF" width = "60%" minWidth= '700px'>
                <Heading as = 'h3' color = "black" size = {'xl'} align = 'center'>What is Shutter?</Heading>
                
            </Flex>
            <Container width= "20%"></Container>
        </HStack>
    );
}

export default Summary;