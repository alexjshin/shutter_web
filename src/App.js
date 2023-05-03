import Skeleton from './components/skeleton.js';
import Header from './components/header.js'
import { ChakraProvider } from '@chakra-ui/react';
import { Fragment } from 'react';

function App() {
  return (
    <ChakraProvider>
      <Fragment className="App">
        <Header />
        <Skeleton />
      </Fragment>
    </ChakraProvider>
  );
}

export default App;
