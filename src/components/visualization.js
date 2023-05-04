import React, {useState, Fragment} from 'react';
import Skeleton from './skeletonjson';
import { ChevronDownIcon } from '@chakra-ui/icons';
import {
    Button,
    Text, 
    VStack, 
    Container, 
    Flex, 
    HStack} from '@chakra-ui/react';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
  } from '@chakra-ui/react'
// import skel from './data/skeleton.json';

const visuals = ['skel_with_slider', 'skel_gif', 'cart_vis'];

function Visualization(){

    const [visual, setVisual] = useState(0);

    function chooseVisual(){
        console.log("visual", visuals[visual])
        if (visuals[visual] === 'skel_with_slider'){
            return <Skeleton/>
        }
        else if (visuals[visual] === 'skel_gif'){
            return <Text>yo</Text>
        }
        else {
            return <Text>damn</Text>
        }
    }

    function handleVisualChange(event){
        const vis = event.target.value;
        setVisual(vis);
    }

    return (
        <Fragment>
            <HStack bg = "#0f4d92">
                <Container width = '20%'></Container>
                <Flex width = "60%" bg = "#B0DAFF" minWidth = '700px'>
                    <Container display = 'flex' justifyContent= 'center' alignItems='center'>
                        <VStack>
                            <Menu>
                                <MenuButton as = {Button} rightIcon = {<ChevronDownIcon/>}>
                                    Visualizations
                                </MenuButton>
                                <MenuList>
                                    <MenuItem onClick = {handleVisualChange} value = '0'>Skeleton with Slider</MenuItem>
                                    <MenuItem onClick = {handleVisualChange} value = '1'>Skeleton GIF</MenuItem>
                                    <MenuItem onClick = {handleVisualChange} value = '2'>Cartesian Visualization</MenuItem>
                                </MenuList>
                            </Menu>
                            <Fragment>
                                {/* If 'skel_with_slider' then show the <Skeleton/> component*/}
                                {chooseVisual()}
                            </Fragment>
                        </VStack>
                    </Container>
                </Flex>
                <Container width = '20%'></Container>
            </HStack>
        </Fragment>
    );
}

export default Visualization;