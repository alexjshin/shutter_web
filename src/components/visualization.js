import React, {useState, Fragment} from 'react';
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
import Skeleton from './skeletonjson';
import SkeletonGIF from './skeletongif';
import ConnectedSkeleton from './skeletonconnected';

const visuals = ['skel_with_slider', 'skel_with_sidler_connected', 'skel_gif', 'cart_vis'];

function Visualization(){
    const [visual, setVisual] = useState(0);

    function chooseVisual(){
        console.log("visual", visuals[visual])
        if (visuals[visual] === 'skel_with_slider'){
            return <Skeleton/>
        }
        else if (visuals[visual] === 'skel_gif'){
            return <SkeletonGIF/>
        }
        else if (visuals[visual] === 'skel_with_sidler_connected'){
            return <ConnectedSkeleton/>
        }
        else {
            return <Text>something for now</Text>
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
                    <Container display = 'flex' justifyContent= 'center' alignItems='center' minWidth = '700px'>
                        <VStack minWidth = "700px" >
                            <Menu>
                                <MenuButton as = {Button} rightIcon = {<ChevronDownIcon/>}>
                                    Visualizations
                                </MenuButton>
                                <MenuList>
                                    <MenuItem onClick = {handleVisualChange} value = '0'>Skeleton with Slider</MenuItem>
                                    <MenuItem onClick = {handleVisualChange} value = '1'>Skeleton with Slider (lines)</MenuItem>
                                    <MenuItem onClick = {handleVisualChange} value = '2'>Skeleton GIF</MenuItem>
                                    <MenuItem onClick = {handleVisualChange} value = '3'>Cartesian Visualization</MenuItem>
                                </MenuList>
                            </Menu>
                            <Fragment>
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