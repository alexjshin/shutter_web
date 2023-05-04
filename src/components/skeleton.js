import React, { Fragment , useState} from 'react';
import Plot from 'react-plotly.js';
import {Heading, Container, Flex, HStack, VStack} from '@chakra-ui/react';
// import skel from './data/skeleton.json';

function importAll(r) {
    return r.keys().map(key => r(key))
}

// const jsonData = importAll(require.context('./data', false, /\.json$/))
const jsonContext = require.context('./data', false, /.json$/);
console.log('jsonContext:', jsonContext.keys());
const jsonData = importAll(jsonContext);

function Skeleton(){
    const [currentData, setCurrentData] = useState(jsonData[0])

    console.log('jsonData', jsonData);
    console.log('currentData', currentData);

    function handleSliderChange(event) {
        const index = event.target.value;
        setCurrentData(jsonData[index]);
    }

    return (
        <HStack bg = "#0f4d92">
            <Container width = '20%'></Container>
            <Flex width = "60%" bg = "#B0DAFF" minWidth = '700px'>
                <Container display = 'flex' justifyContent= 'center' alignItems='center'>
                    <VStack>
                        <Heading as = "h2" size = "xl">Visualizations</Heading>
                        <Fragment>
                            <input type="range" min = {0} max = {jsonData.length - 1} step = {1} onChange = {handleSliderChange} />
                        </Fragment>
                        <Flex>
                            {/* I want to center the following plot */}
                            <Plot align = 'center' data = {currentData.data} layout = {currentData.layout}></Plot>
                        </Flex>
                    </VStack>
                </Container>
                {/* <Plot data = {skel.data} layout = {skel.layout}></Plot> */}
            </Flex>
            <Container width = '20%'></Container>
        </HStack>
    );
}

export default Skeleton;