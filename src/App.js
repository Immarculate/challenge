import React from 'react';
import {
  ChakraProvider,
  Box,
  Flex,
  extendTheme,
  useMediaQuery,
} from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Body2 from './components/page2/Body2';
import { LayoutGroup } from 'framer-motion';
import BottomBar from './components/BottomBar';
import { BottomNavigationStyleConfig as BottomNavigation } from 'chakra-ui-bottom-navigation';
import Sidebar from './components/Sidebar';
import {  Routes, Route, useNavigate } from 'react-router-dom';
import { MyContextProvider } from './context/Contexts';
import AddBudget from './components/page2/AddBudget';
import Home from './components/bigscreen/Home';

const breakpoints = {
  base: "300px", // 0px
  sm: "350px", // ~480px. em is a relative unit and is dependant on the font-size.
  xs: '375px',
  xm: '400px',
  md: "568px", // ~768px
  lg: "100%", // ~992px
  xl: "80em", // ~1280px
  "2xl": "96em", // ~1536px
};

const theme = extendTheme({
  breakpoints,
  components: {
    BottomNavigation,
  },
});

function App() {
  const [isLargerThan800] = useMediaQuery('(min-width: 500px)');
  const [isLargerThan900] = useMediaQuery('(min-width: 800px)');
  const navigate = useNavigate();

  return (
    <ChakraProvider theme={theme}>
      <MyContextProvider>
      {!isLargerThan900 ? 
      <Box backgroundColor="rgba(0, 0, 0, 0.03);" w={{base: '100%', md: '100%', sm: '100%', lg: '100%'}}>
        {/* {!isLargerThan800 ? <Navbar hideFrom="md" /> : ''} */}
        <Flex>
          {isLargerThan800 ? <Sidebar /> : ''}
          
        <Routes>
          <Route path='/' element={<Body flex="1" />} />
          <Route path='/add-new-buget' element={<Body2 />}/>
          <Route exact path="/create-budget" element={<AddBudget />} />
        </Routes>
        </Flex>
        

        {window.location.pathname === '/' && (
        <LayoutGroup>
          <Box>{!isLargerThan800 && <BottomBar />}</Box>
        </LayoutGroup>
      )}
      </Box> 
      :  
      <Home/> }
      </MyContextProvider>
    </ChakraProvider>
  );
}

export default App;
