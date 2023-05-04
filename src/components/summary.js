import React from 'react';
import {Container, 
        Flex, 
        VStack,
        HStack, 
        Heading, 
        Text,
        Button, 
        Divider} from '@chakra-ui/react';

function Summary(){
    return (
        <HStack bg = "#0f4d92" >
            <Container width = "20%" ></Container>
            <Flex align = 'center' justify = 'center' pt = "30px" bg = "#B0DAFF" width = "60%" minWidth= '700px'>
                <VStack pb = "20px">
                    <Heading as = 'h3' color = "black" size = {'xl'} align = 'center'>What is Shutter?</Heading>
                    <Text p = "5px 30px">
                        Shutter is the robot photographer developed here at the Yale Interactive Machines Group.
                        Equipped with multiple cameras, Shutter is designed to capture high-quality images from a
                        variety of angles and perspectives. But Shutter isn't just any ordinary photographer. It has
                        been specifically programmed to use artificial intelligence and machine learning techniques 
                        to make decisions about what to photograph and how to capture it.
                    </Text>
                    <Text p = "5px 30px">
                        The data collected by Shutter is incredible valuable for researchers in a wide range of fields, 
                        from computer vision and robotics to art and culture. By analyzing the images and other data 
                        collected by Shutter, researchers can gain insights into topics such as object recogiition, 
                        scene understanding, visual storytelling, and human-robot interaction.
                    </Text>
                    <Text p = "5px 30px" pb = "10px">  
                        Below are some interactive visualizations based on the data collected by Shutter. Before diving 
                        into the visualizations, we invite you to learn more about shutter and the data collection 
                        process. By providing this context, we hope to help you better understand and appreciate the 
                        significance of the data presented in the visualizations.
                    </Text>
                    <Button 
                        as = "a" 
                        href = "https://interactive-machines.gitlab.io/projects/photographer.html"
                        rel = "noopener noreferrer"
                        target = "_blank"
                        colorScheme = "blue"
                        >
                        Learn More About Shutter
                    </Button>
                    <Divider orientation = "horizontal" width = "100%" pt = "20px" />
                    <Heading as = 'h3' color = "black" size = {'xl'} align = 'center' pt = "10px">Visualizations</Heading>
                    <Text p = "5px 30px">
                        The visualizations shown below are generated from the data collected from the previous Shutter deployment.
                        All the Shutter data was analyzed and visualized using Python3, Juypter Lab, and visualization libraries including but not limited
                        to Plotly, Matplotlib, scipy, etc. The data was collected from the Shutter deployment using the Shutter's built-in sensors 
                        (kinect camera). There will be three different visualizations down below: a skeleton visualization with a slider, a skeleton 
                        visualization gif with key world and base coordinates, and an image of Shutter's relative location in the scene.
                    </Text>
                    <Heading as = 'h4' p = "5px 30px" pb = "10px" size = 'sm'>
                        Please choose a visualization from the dropdown menu to view:
                    </Heading>
                </VStack>
            </Flex>
            <Container width= "20%"></Container>
        </HStack>
    );
}

export default Summary;