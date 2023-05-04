# Shutter Data Visualization

This project was created by: Alex Shin
Project Mentor: Sydney Thompson, Yale Interactive Machines Group

## To Run/View the Project

I have gone ahead and deployed the project for ease of access and viewing. You can view the project at: [https://main--ornate-sundae-b6f214.netlify.app/](https://main--ornate-sundae-b6f214.netlify.app/) or you can just click [here](https://main--ornate-sundae-b6f214.netlify.app/).

If you would like to download the project and run it locally, you can do so by following the instructions below:

1. Clone the repository to your local machine
2. Navigate to the project directory
3. Run `npm install` to install all the dependencies
4. Run `npm start` to start the project
5. The project should open in your default browser at [http://localhost:3000](http://localhost:3000) or whichever port you specify it to run on.

## Project Structure/Documentation

This website is built using React.js and also use Chakra UI components for styling and UI. All of the data analyzation and visualization generation was done in Juypter Notebook/Lab, exported as json files, and imported into this project. All of the json files are located in the `src/data/skeleton-json` and `src/data/skeleton-connected` which contain the json files for the interactive 3D model for the skeleton and the connected interactive 3D model for the skeleton, respectively. For documentation and for the purpose of understanding on how the interactive visualizations were made, I have include the Jupter Notebook Lab to create the 2 interactive visualizations. The `src/components` folder contains all of the React components that are used to render the visualizations. The `src/App.js` file is the main React component that renders all of the other components. The `src/index.js` file is the main file that renders the `App.js` component. The `src/index.css` file contains the global css styling for the project.

### Jupyter Notebook and Visualization Process
The first serveral weeks took the longest as the learning curve for exposing and familiarizing myself with the Shutter data took a long time. Furthermore, I had to allocate time to understanding and also familiarize myself with the amazing functions/visualizations my project mentor, Sydney Thompson, had already gotten done. Sydney provided me with three "combined" datasets, containing the points for all the Shutter data collected: the skeleton joints, angles, robot positions, Shutter camera positions, world_coordinates, etc. I combine all three datasets into one dataset, which I call "comb_df" in the Juypter Notebook. I then proceed to filter the column names of the combined dataset into skeleton components, robot components, and cart components (there should be comments in the notebook as well). The rows are then ordered by `resampled_time` and the 3D interactive plots are made using the Plotly library. The 3D interactive plots are then exported as json files and imported into the React project. The React project then renders the 3D interactive plots using the Plotly.js library.

### Components
Most of the modularized components in this project are relatively self-explanatory.

1. Header (header.js) - This component is the header of the website. It contains the Yale Interactive Machines Group logo.
2. Summary (summary.js) - This component contains the sections for the brief summaries for both what Shutter is as well as the general descriptions of the visualizations.
3. Visualization (visualization.js) - This component contains the sections for the 3D interactive visualizations. It also contains the buttons to toggle between the skeleton and the connected skeleton.
4. Skeleton (skeletonjson.js) - This component contains the 3D interactive visualization for the skeleton. (not connected with lines)
5. ConnectedSkeleton (skeletonconnected.js) - This component contains the 3D interactive visualization for the connected skeleton. (connected with lines)
6. SkeletonGIF (skeletongif.js) - This component contains the GIF for the skeleton with the coordinates for Shutter and the origin.
7. CartesianVis (CartesianVis.js) - This component contains 4 different images that give insight on the real world location of the Shutter deployment as well as how Shutter sees interactors/skeletons before it greets them or gets approached itself.
8. theme (theme.js) - This component contains the theme (which I only use for the fonts for the website)

All of the styling was done using Chakra UI components and by referencing the Chakra UI documentation [here](https://chakra-ui.com/docs/components)

## Complications/Issues
I faced an enormous amount of complications when it came to system/dependency compatibility between devices, versions, and environments. Thus, when running different notebooks there were a lot of issues I had when it came to running those notebooks on my local machine. A lot of time was spent trying to figure out how to work around those dependency issues and consequently understand the original functions and graphs whilst undergoing such complications. However, thanks to Sydney, I was able to get a lot of the functions and graphs to work on my local machine and she guided me on the meaning of all the data points and how they could be used to generate nice visualizations.

## Future Plans/Goals for the Project
It is a bit unfortunate that I was unable to get a "fully" complete interactive visualization that not only depicted how the skeleton moves over time, but also contained the camera and Shutter movements along with the world coordinates. Using a lot of the functions Sydney provided (not shown in this repository), given more time to work on this project, I would most likely take more time to understand more of the functions Syndey had moduralized away because some of the functions used certain packages not compatible with my local machine (or would be inefficient to install). Further, the ultimate goal of this project would be to combine this website with the existing Shutter website. This project was completed as "Directed Research (CPSC 290)" at Yale University, so the primary focus was to get the interactive visualizations done and the website up and running. To extend this into the future, this website should ideally be integrated with the official Shutter website, which can only be done if the same framework is used. 