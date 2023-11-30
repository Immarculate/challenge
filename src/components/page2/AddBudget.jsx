import { Box, Flex, Input, Text, Image, Button } from '@chakra-ui/react';
import React, { useState, useContext } from 'react';
import next from '../../Assets/next.png';
import leftarrow from '../../Assets/leftarrow.svg';
import { Link } from 'react-router-dom';
import SelectCat from './SelectCat';
import { Contexts } from '../../context/Contexts';

const AddBudget = () => {
  const [input, setInput] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  

  const {
    expenseCategories,
    setExpenseCategories,
    budgetAmount,
    averagePercentage,
    setAveragePercentage,
  } = useContext(Contexts);

  
  const calculatePercentage = (amount, totalAmount) => {
    // Ensure inputValue is a valid number
    const numericValueA = parseFloat(amount);
    const numericValueB = parseFloat(totalAmount);
    if (isNaN(numericValueA) || isNaN(numericValueB) || numericValueA <= 0) {
      setAveragePercentage(null); // or handle the case accordingly
      return;
    }
    // Calculate the average percentage
    const calculatedPercentage = Math.floor(
      (numericValueA / numericValueB ) * 100
    );
    setAveragePercentage(calculatedPercentage);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const selectOption = option => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  function validateName(value) {
    let error;
    if (!value) {
      error = 'Amount is required';
    } else if (value.toLowerCase() !== 'naruto') {
      error = 'Amount is required';
    }
    return error;
  }

  const inputChange = e => {
    e.preventDefault();
    setInput(e.target.value);
    validateName(e.target.value);
    calculatePercentage(input, budgetAmount);
  };
 

  const onSubmit = e => {
    e.preventDefault();
    setExpenseCategories([
      ...expenseCategories,
      { selectedOption, amount: input, averagePercentage },
    ]);
    setInput('');
    setSelectedOption('');
    setAveragePercentage('');
  };

  const deleteList = index => {
    const newList = [...expenseCategories];
    newList.splice(index, 1);
    setExpenseCategories(newList);
  };

  const BudgetList = () => {
    return (
      expenseCategories.length >0 &&
      expenseCategories.map((budget, index) => (
        <ul key={index}>
          <Box
            ml={'25px'}
            w={{ base: '280px', sm: '300px', md: '320px' }}
            mb="10px"
          >
            <Flex align="center" justifyContent={'space-between'}>
              <Box mr="15px">
                <Flex align="center">
                  {budget?.selectedOption?.image}
                  {budget?.selectedOption?.label}
                </Flex>
              </Box>
              <Box>
                <Flex>
                  <Text>₦{budget.amount}</Text>
                  <Text ml="15px">{budget.averagePercentage}%</Text>
                </Flex>
              </Box>
              <Button
                ml="10px"
                mr={{ base: '-3px', sm: '-13px' }}
                onClick={() => deleteList(index)}
              >
                -
              </Button>
            </Flex>
          </Box>
        </ul>
      ))
    );
  };

  return (
    <Box mt={4} minH={'100vh'}>
      <Link to="/add-new-buget">
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
        <Text ml={'30px'} fontWeight={{base: '200px', md: '228px'}} fontSize={{base: '23px', md:"28px"}} as="b">
          Create New Budget
        </Text>
      </Box>

      <Box ml={'30px'}>
        <Text w={'256px'} fontSize="14px">
          How much would you like to spend on each category this month?
        </Text>

        <SelectCat
          selectOption={selectOption}
          selectedOption={selectedOption}
          isDropdownOpen={isDropdownOpen}
          toggleDropdown={toggleDropdown}
        />

        <Input
          placeholder="Amount (in ₦)"
          borderColor={'rgba(168, 175, 191, 1)'}
          variant="flushed"
          maxW={{ base: '15.1875rem', sm: '18.1875rem', lg: '20rem' }}
          h="51px"
          mt={2}
          type="number"
          onChange={inputChange}
          value={input}
          isDisabled={!selectedOption}
        />
      </Box>

      <Flex mt="15px" mb="18px" align="center" justifyContent={'space-between'}>
        <Box ml="30px">
          <Text color="rgba(4, 102, 200, 1)" fontSize={'14px'}>
            {averagePercentage && <p>% of budget: {averagePercentage}%</p>}
          </Text>
        </Box>
        <Flex
          alignContent="end"
          mr={{ base: '2px', sm: '10px', md: '8px', xs: '3px', xm: '-30px' }}
          justify="end"
          justifyContent={'space-around'}
        >
          <Button
            w="48px"
            h="48px"
            onClick={onSubmit}
            borderRadius={'50%'}
            isDisabled={!input || budgetAmount > input }
            backgroundColor={'rgba(4, 102, 200, 0.2)'}
          >
            <Text color={'rgba(4, 102, 200, 1)'} as="b">
              +
            </Text>
          </Button>
        </Flex>
      </Flex>
      <BudgetList />

      <Flex
        mb={{ base: '15px', sm: '20px' }}
        
        mt={{base: '120px', sm: '50px', xs: '110%', md: '80%', xm: '125%', lg: '85%'}}
        justifyContent={'space-between'}
        align="center"
      >
        <Box ml={'25px'}>
          {' '}
          <Text fontSize={{ base: '12px', sm: '12px', lg: '20px' }}>
            % of budget remaining : {averagePercentage}%
          </Text>
        </Box>
        <Box>
          <Flex align="center" justify="center">
            <Text
              ml={{ base: '70px', sm: '70px', md: '100px', xs: '100px' }}
              fontSize={{ base: '12px', sm: '16px', lg: '20px' }}
              as="b"
              color={'rgba(103, 162, 220, 1)'}
            >
              Done
            </Text>
            <Link to="/">
              <Image
                m={{ base: '1', sm: '2' }}
                w={{ base: '15px', sm: '19.61px' }}
                h={{ base: '10px', sm: '14.99px' }}
                ml={'2'}
                src={next}
                alt="next"
              />
            </Link>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default AddBudget;


