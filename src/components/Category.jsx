import React, { useContext } from 'react';
import { Box, Image, Flex, Text } from '@chakra-ui/react';
import { Contexts } from '../context/Contexts';
import { Link } from 'react-router-dom';

function Category() {
  const { expenseCategories, budgetAmount } = useContext(Contexts);

 

  return (
    <Box
      maxW={{ base: '19.6885rem', md: '22.6885rem', lg: '550px' }}
      mb={'100px'}
      mt={8}
      ml={{ base: '5', sm: '8' }}
    >
      <Text fontSize={'21px'} as="b">
        Category Breakdown
      </Text>
      <Box>
        
      </Box>
      {expenseCategories < 0 ? (
        <Flex>
          <Box>
            <Text>No buget Yet</Text>
            <Link to='/add-new-buget' ><button><Text>Click here to Add New Budget</Text></button></Link>
          </Box>
        </Flex>
      ) : (
        <Box  mt={4}>
        {expenseCategories.map((budget, index) => (
          <ul key={index}>
            <Box mt={2} w="317px" h={'47px'}>
              <Flex
                justifyContent={{
                  base: 'space-around',
                  sm: 'space-between',
                  md: 'space-between',
                }}
              >
                <Flex>
                  <Box>
                    <Flex>
                      <Box h={'46px'} w={'46px'}  my="5"
                          mx="auto">
                        
                        {budget?.selectedOption?.image}
                      </Box>

                      <Box mt={2} ml={{ base: '1', sm: '2'}}>
                        <Text as="b">{budget?.selectedOption?.label}</Text>
                        <Text>{budget.averagePercentage}%</Text>
                      </Box>
                    </Flex>
                  </Box>
                </Flex>

                <Flex right={0} justify="right" align="center">
                  <Box mb= '15px'>
                    <Text fontSize="16px" color={'rgba(0, 18, 51, 1)'} as="b">
                      ₦{budget.amount}/
                    </Text>
                    <Text
                      fontSize="16px"
                      as="b"
                      color={'rgba(193, 196, 205, 1)'}
                    >
                      ₦{budgetAmount}
                    </Text>
                  </Box>
                </Flex>
              </Flex>
            </Box>
          </ul>
        ))}
      </Box>
      )}
    </Box>
  );
}

export default Category;
