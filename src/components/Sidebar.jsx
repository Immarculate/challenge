import React from 'react';
import { Box, Image, Text, Flex } from '@chakra-ui/react';
import home from '../Assets/home.png';
import profile from '../Assets/profile.svg';
import file from '../Assets/file.svg';
import volume from '../Assets/volume.svg';
import circle from '../Assets/circle.svg';

function Sidebar() {
  return (
    <Box w={'200px'} pos="sticky"  backgroundColor="white" h="100vh">
      <Box mt={'80px'}>
        <Box
         borderRadius={'5px'}
          h={'50px'}
          mx={7}
          my={3}
          _hover={{
            background: 'rgba(0, 0, 0, 0.03)',
            color: 'teal.500',
          }}
        >
          <Flex align="center" justifyContent={'space-around'}>
            <Image mt={3} src={home} alt="home" />
            <Text mt={3} as='b'>Home</Text>
          </Flex>
        </Box>

        <Box
          h={'50px'}
          borderRadius={'5px'}
          mx={7}
          my={3}
          _hover={{
            background: 'rgba(0, 0, 0, 0.03)',
            color: 'teal.500',
          }}
        >
          <Flex align="center" justifyContent={'space-around'}>
            <Image mt={3} src={file} alt="" />
            <Text mt={3} as='b'>Reports</Text>
          </Flex>
        </Box>

        <Box
          h={'50px'}
          mx={7}
          borderRadius={'5px'}
          my={3}
          _hover={{
            background: 'rgba(0, 0, 0, 0.03)',
            color: 'teal.500',
          }}
        >
          <Flex align={'center'} justify={'center'} justifyContent={'space-around'}>
            <Image mt={3} src={circle} alt="" />
            <Text mt={3} as='b'>Chat</Text>
          </Flex>
        </Box>

        <Box
          h={'50px'}
          borderRadius={'5px'}
          mx={7}
          my={3}
          _hover={{
            background: 'rgba(0, 0, 0, 0.03)',
            color: 'teal.500',
          }}
        >
          <Flex align={'center'} justify={'center'} justifyContent={'space-around'}>
            <Image mt={3} src={volume} alt="" />
            <Text mt={3} as='b'>Budget</Text>
          </Flex>
        </Box>

        <Box
          h={'50px'}
          borderRadius={'5px'}
          mx={7}
          my={3}
          _hover={{
            background: 'rgba(0, 0, 0, 0.03)',
            color: 'teal.500',
          }}
        >
          <Flex align={'center'} justify={'center'} justifyContent={'space-around'}>
            <Image mt={3}  src={profile} alt="" />
            <Text mt={3} as='b'>Profile</Text>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}

export default Sidebar;
