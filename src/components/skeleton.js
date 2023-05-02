import React, { Fragment , useState} from 'react';
import Plot from 'react-plotly.js';
// import skel from './data/skeleton.json';

function importAll(r) {
    return r.keys().map(key => r(key))
}

const jsonData = importAll(require.context('./data', false, /\.json$/))

function Skeleton(){
    const [currentData, setCurrentData] = useState(jsonData[0])

    function handleSliderChange(event) {
        const index = event.target.value;
        setCurrentData(jsonData[index]);
    }

    return (
        <Fragment>
            <Fragment class = "">
                <input type="range" min = {0} max = {jsonData.length - 1} step = {1} onChange = {handleSliderChange} />
            </Fragment>
            <Plot data = {currentData.data} layout = {currentData.layout}></Plot>
            {/* <Plot data = {skel.data} layout = {skel.layout}></Plot> */}
        </Fragment>
    );
}

export default Skeleton;