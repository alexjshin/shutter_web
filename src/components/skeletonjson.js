import React, { Fragment , useState} from 'react';
import Plot from 'react-plotly.js';
import {Container, Flex, VStack} from '@chakra-ui/react';

function importAll(r) {
    return r.keys().map(key => r(key))
}

const jsonContext = require.context('./data/skeleton-json', false, /\.json$/);

// checking the console to make sure all the json files were imported properly
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
        <Fragment>
        <Container display = 'flex' justifyContent= 'center' alignItems='center' pb = "30px">
            <VStack>
                {/* <Heading as = "h2" size = "xl">Visualizations</Heading> */}
                {/* <Fragment><Text>

                </Text></Fragment> */}
                <Fragment>
                    <input type="range" min = {0} max = {jsonData.length - 1} step = {1} onChange = {handleSliderChange} />
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

export default Skeleton;