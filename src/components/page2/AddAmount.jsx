import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Image, Input, Text, Button } from '@chakra-ui/react';
import next from '../../Assets/next.png';
import { Contexts } from '../../context/Contexts';

const AddAmount = () => {

  const { budgetAmount, setBudgetAmount } = useContext(Contexts);


  const addBudgetAmount = (e) => {
    e.preventDefault();
    setBudgetAmount(e.target.value)
  }

  return (
    <Box h={'100vh'} overflow={'hidden'} mt={2}>
      <Box ml={'30px'}>
        <Text w={'256px'} fontSize="14px">
          How much would you like to budget for this month?
        </Text>
        <Input
          placeholder="Amount (in ₦)"
          borderColor={'rgba(168, 175, 191, 1)'}
          onChange={addBudgetAmount}
          value={budgetAmount}
          type="number"
          variant="flushed"
          w={{base: '250px', sm:"315px"}}
          h="51px"
          mt={2}
        />
      </Box>
      
     <Flex  alignItems={'flex-end'}>
     <Box display={'flex'}  mt={{base: '65vh', sm: '65vh', xs: '65vh', md: '65vh', xm: '65vh', lg: '65vh'}} mb={2}>
        <Flex align="center" justifyContent="space-between">
          <Box borderBottom={'1px solid blue'} ml={'28px'}>
          <Text fontSize="14px" color={'rgba(103, 162, 220, 1)'}>Create from spending pattern</Text>
          </Box>
          <Link to='/create-budget'><Button ml={{base: '20px', sm: '60px', md: '50px', xm: '90px'}} isDisabled={!budgetAmount}><Image w={'19.61px'} h={'14.99px'} ml={1} src={next} alt="next" /></Button></Link>
        </Flex>
      </Box>
     </Flex>
    </Box>
  );
};

export default AddAmount;
