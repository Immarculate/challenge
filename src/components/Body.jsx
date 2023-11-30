import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import money from '../Assets/money.png';
import { Box, Text, Image, Input, Flex } from '@chakra-ui/react';
import ExpensesOverview from './ExpensesOverview';
import CategoryOverview from './CategoryOverview';
import Category from './Category';
import NoBudget from './NoBudget';
import ChartBox from './ChartBox';
import add from '../Assets/add.svg';
import { Contexts } from '../context/Contexts';


const Body = () => {
  const [currentOverview, setCurrentOverview] = useState('expenses');
  const { budgetAmount } = useContext(Contexts);

  const displayOverview = () => {
    if (budgetAmount > 0) {
      if (currentOverview === 'expenses') {
        return <ExpensesOverview />;
      } else {
        return <CategoryOverview />;
      }
    } else {
      return <NoBudget />;
    }
  };

  return (
    <Box minH={'100vh'} mb={10}>
      <Box mt={10} ml={8}>
        <Text fontSize={{ base: '28px', md: '28px', lg: '47px' }} as="b">
          Budget
        </Text>
      </Box>

      <Box mt={5} mb={2} mx={8}>
        <Box mb={2}>
          <Flex alignItems={'center'}>
            <Box>
              <Flex alignItems={'center'}>
                <Image src={money} alt="icon" />
              </Flex>
            </Box>
            <Text ml={2} fontsize="14px">
              Monthly Budget
            </Text>
          </Flex>
        </Box>
        <Flex>
          <Input
            type="number"
            w={{
              base: '255px',
              sm: '331px',
              xs: '310px',
              md: '390px',
              lg: '550px',
            }}
            backgroundColor="rgba(0, 0, 0, 0.03)"
            minH="3.1875rem"
            {...budgetAmount}
          />
          <Link to="/add-new-buget">
            <Image
              mt="7px"
              mb="10px"
              ml={{ base: '-50px', sm: '-50px', xm: '-50px', md: '-60px' }}
              w={{ base: '38px', sm: '', md: '48px' }}
              h={{ base: '38px', md: '48px' }}
              
              src={add}
              alt="add"
              pos={'absolute'}
            />
          </Link>
        </Flex>
      </Box>

      <ChartBox setCurrentOverview={setCurrentOverview} />

      {displayOverview()}

      <Category />
    </Box>
  );
};

export default Body;
