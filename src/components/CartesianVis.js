import React, {Fragment} from 'react';
import {Text, Heading, Image, Box, VStack, Container} from '@chakra-ui/react';
import img1 from './data/References/world_coordinates.png';
import img2 from './data/References/world_coord2.png';
import img3 from './data/References/coord_plane.png';
import img4 from './data/References/skeleton_ref.png';

function CartesianVis(){
    return (
        <Fragment>
            <Container minWidth = "700px">
                <Box>
                    <VStack>
                        <Heading as = "h3" size = "md" pt = "10px">Description</Heading>
                        <Fragment><Text>
                            These visualizations are images to help reference the points and vectors in the 3D cartesian coordinate system to real 
                            world objects. The first image is a reference to the world coordinate system, where the origin is on the lower left corner
                            of the door. The second image is the same reference but a different camera orientation. This allows us to keep the scene (i.e. 
                            the world) constant. The third image is a reference to those same points but on a 3D cartesian plane. The fourth image shows 
                            the reference points on the skeleton and displays how Shutter sees and analyzes the potential interactors/skeletons as they pass by.
                        </Text></Fragment>
                        <Container minWidth = "700px" display = 'flex' justifyContent= 'center' alignItems='center' > <Image
                            src = {img1}
                            minWidth = "675px"
                            p = "10px"
                        /></Container>
                        <Container  minWidth = "700px" display = 'flex' justifyContent= 'center' alignItems='center' ><Image 
                            src =  {img2}
                            minWidth= "675px"
                            p = "10px"
                        /></Container>
                            {/* <Heading as = 'h1' color = "white" size = {['2xl','3xl']} align = 'center'>Site Header</Heading> */}
                        <Container  minWidth = "700px" display = 'flex' justifyContent= 'center' alignItems='center' ><Image
                            src = {img3}
                            minWidth= "675px"
                            p = "10px"
                        /></Container>
                        <Container  minWidth = "675px" display = 'flex' justifyContent= 'center' alignItems='center' ><Image
                            src = {img4}
                            minWidth= "675px"
                            p = "10px"
                        /></Container>
                    </VStack>
                </Box>
            </Container>
        </Fragment>
    );
}   

export default CartesianVis;