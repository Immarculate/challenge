import React from 'react';
import { Box, Image, Flex, Text } from '@chakra-ui/react';

function NoBudget() {
  return (
    <Box mx={8} mt={5}>
    <Flex justifyContent={"Center"}>
      <Box>
      <Box h='150px' w={'150px'} border={'10px solid #0466C8'} borderRadius={'50%'}>
        <Image h={'150px'} w={'150px'} src={''} alt="icon" />
      </Box>
      </Box>
    </Flex>
    <Flex align={'center'} justifyContent={"Center"}>
      <Box mt={5}>
        <Flex align={'center'} justify={'center'} justifyContent={"Center"}><Text w={{base: '170px', sm: "185px", md: "200px", xs: '190px'}} fontSize={{base: "12px", sm: '14px', md: '18px'}}>You haven’t created a budget for this month yet</Text></Flex>
      </Box>
    </Flex>
  </Box>
  );
}

export default NoBudget;
