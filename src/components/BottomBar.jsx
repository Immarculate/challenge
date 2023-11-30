import React, { useState } from 'react';
import home from '../Assets/home.png';
import profile from '../Assets/profile.svg';
import file from '../Assets/file.svg';
import volume from '../Assets/volume.svg';
import circle from '../Assets/circle.svg';
import { Image, Box, Flex, Text } from '@chakra-ui/react';
import {
  BottomNavigation,
  BottomNavigationItem,
  BottomNavigationLabel,
} from 'chakra-ui-bottom-navigation';

const BottomBar = () => {
  const [value, setValue] = useState(0);
  return (
    <BottomNavigation
      backgroundColor="#FFFFFF"
      w="100%"
      h="87px"
      left={0}
      value={value}
      onChange={setValue}
    >
    <Box ml={{xm: "2", md: '2', xs: '2'}}>
    <Flex justify={'space-between'}>
      <Box  m={{sm: '4', base: '3', md: "4"}}>
      <Flex align={'center'} justify={'center'}><Image src={home} alt="home" /></Flex>
        <Text fontSize={{base: '13px', md: '15px'}}>Home</Text>
      </Box>

      <Box m={{sm: '4', base: '2.5', md: "4"}}>
      <Flex  align={'center'} justify={'center'}><Image src={file} alt="home" /></Flex>
        <Text fontSize={{base: '13px', md: '15px'}}>Reports</Text>
      </Box>

      <Box m={{sm: '4', base: '2.5', md: "4"}}>
      <Flex align={'center'} justify={'center'}><Image src={circle} alt="home" /></Flex>
      
        <Text fontSize={{base: '13px', md: '15px'}}>Chat</Text>
      </Box>

      <Box m={{sm: '4', base: '2.5', md: "4"}}>
      <Flex align={'center'} justify={'center'}><Image src={volume} alt="home" /></Flex>
        <Text fontSize={{base: '13px', md: '15px'}}>Budget</Text>
      </Box>

      <Box m={{sm: '4', base: '2.5', md: "4"}}>
       <Flex align={'center'} justify={'center'}><Image src={profile} alt="home" /></Flex>
        <Text fontSize={{base: '13px', md: '15px'}}>Profile</Text>
      </Box>
    </Flex>
    </Box>
      
    </BottomNavigation>
  );
};

export default BottomBar;
