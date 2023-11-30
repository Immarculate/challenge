import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';
import leftarrow from '../../Assets/leftarrow.svg';
import AddAmount from './AddAmount';
import { Link, Routes, Route } from 'react-router-dom';
import AddBudget from './AddBudget';

const Body2 = () => {
  return (
    <Box h={'100vh'}>
      <Link to="/">
        <Image
          w={'19.61px'}
          h={'14.99px'}
          mt={'25px'}
          ml={'25px'}
          top={'10px'}
          src={leftarrow}
          alt="back"
        />
      </Link>
      <Box mt={'25px'}>
        <Text ml={'30px'} fontWeight={'228px'} fontSize="28px" as="b">
          Create New Budget
        </Text>
      </Box>

      <Box>
        <Routes>
          {/* <Route exact path="/create-budget" element={<AddBudget />} /> */}
          <Route exact path="/" element={<AddAmount />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default Body2;
