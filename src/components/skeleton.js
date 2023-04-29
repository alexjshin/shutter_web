import React, { Fragment } from 'react';
import Plot from 'react-plotly.js';
import skel from './data/skeleton.json';

function Skeleton(){
    return (
        <Fragment>
            <Plot data = {skel.data} layout = {skel.layout}></Plot>
        </Fragment>
    );
}

export default Skeleton;