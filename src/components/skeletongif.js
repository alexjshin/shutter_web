import React, {Fragment} from 'react';
import {Container, Image, VStack, Heading, Text} from '@chakra-ui/react';
// import GIFPlayer from 'react-gif-player';
import skelGIF from './data/skeleton-gif/skel.gif';

function SkeletonGIF(){
    return (
        <Fragment>
            <VStack>
                <Heading as = "h3" size = "md" pt = "10px">Description</Heading>
                <Fragment><Text>
                    This visualization is an 3D gif made using the MatPlotLib library. This visualization is similar to
                    the interactive visualization with the slider, but it contains the coordinates of the cart and Shutter 
                    which are the big green, red, and blue vectors on the right side of the visualization. The smaller red, green, 
                    and blue vectors on the left represent the origin and the reference point of the scene/world. Furthermore,
                    this gif has a vector that comes out from the skeleton's head that represents the direction the skeleton is 
                    facing (i.e. where their attention is directed at that moment in time).
                </Text></Fragment>
                <Fragment><Container pb = "30px" minWidth = "700px">
                    <Image src = {skelGIF} boxSize = "675px" objectFit='cover'/>
                </Container></Fragment>
            </VStack>
        </Fragment>
    );
}

export default SkeletonGIF;