import Skeleton from './components/skeleton.js';
import Header from './components/header.js';
import Summary from './components/summary.js';
import { ChakraProvider } from '@chakra-ui/react';
import { Fragment } from 'react';
import theme from './components/theme.js';

function App() {
  return (
    <ChakraProvider theme = {theme}>
      <Fragment className="App">
        <Header />
        <Summary />
        <Skeleton />
      </Fragment>
    </ChakraProvider>
  );
}

export default App;
