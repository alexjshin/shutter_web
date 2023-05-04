import React, { Fragment , useState} from 'react';
import Plot from 'react-plotly.js';
import {Container, Flex, VStack, Heading, Text} from '@chakra-ui/react';

function importAll(r) {
    return r.keys().map(key => r(key))
}

const jsonContext = require.context('./data/skeleton-connected', false, /\.json$/);

// checking the console to make sure all the json files were imported properly
console.log('jsonContext:', jsonContext.keys());
const jsonData = importAll(jsonContext);

function ConnectedSkeleton(){
    const [currentData, setCurrentData] = useState(jsonData[0])
    const [sliderValue, setSliderValue] = useState(0)

    console.log('jsonData', jsonData);
    console.log('currentData', currentData);

    function handleSliderChange(event) {
        const index = event.target.value;
        setSliderValue(index);
        setCurrentData(jsonData[index]);
    }

    return (
        <Fragment>
        <Container display = 'flex' justifyContent= 'center' alignItems='center' pb = "30px" minWidth = "700px">
            <VStack>
                <Heading as = "h3" size = "md" pt = "10px">Description</Heading>
                <Fragment><Text>
                    This visualization is an interactive 3D visualization made using the Plotly library. You can click and drag 
                    to rotate the plot and view the skeleton from different persepctives. Furthermore, you can use the slider below 
                    to track the skeleton's movement over time. This visualization is specific to one time frame, where it tracks all 
                    the movement leading up to the moment the skeleton/interactor interacts with Shutter. This allows us to visualize how 
                    Shutter sees people before they interact with it or Shutter interacts with them. (This visualization is the same as "Skeleton
                    with Slider" except that the skeleton joints are connected with lines)
                </Text></Fragment>
                <Fragment>
                    <Heading as = "h3" size = "">Time Slider</Heading>
                    <input type="range" min = {0} max = {jsonData.length - 1} step = {1} value = {sliderValue} onChange = {handleSliderChange} style={{ width: '80%' }}/>
                </Fragment>
                <Flex>
                    {/* I want to center the following plot */}
                    <Plot align = 'center' data = {currentData.data} layout = {currentData.layout}></Plot>
                </Flex>
            </VStack>
        </Container>
        </Fragment>
    );
}

export default ConnectedSkeleton;