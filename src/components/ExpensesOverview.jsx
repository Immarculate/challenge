import { Box, Image, Flex, Text } from '@chakra-ui/react';
import React, { useContext } from 'react';
import percentage from '../Assets/percentage.svg';
import { Contexts } from '../context/Contexts';
import { PieChart, Pie, Sector, Label, Cell, ResponsiveContainer } from 'recharts';

const ExpensesOverview = () => {
  const { budgetAmount, expenseCategories } = useContext(Contexts);

  const totalMoney = expenseCategories.reduce(
    (total, item) => total + parseInt(item.amount),
    0
  );

  const totalPercentage = expenseCategories.reduce(
    (total, item) => total + parseInt(item.averagePercentage),
    0
  );

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const data = expenseCategories.map(item => ({
    name: item.image,
    value: item.averagePercentage,
  }));

  return (
    <Box mx={8} mt={5}>
      <Flex justifyContent={'Center'}>
        <Box>
         
          <Box
            h="160px"
            w={'160px'}
            border={'10px solid blue'}
            borderRadius={'50%'}
            position="relative"
            borderColor={'#0466C8'}
          >
            <PieChart width={149} height={149}>
              <Pie 
                data={data}
                cx={65} // Center x-coordinate set to half of the box width
                cy={65.5} // Center y-coordinate set to half of the box height
                startAngle={90}
                endAngle={-10}
                innerRadius={61}
                outerRadius={70}
                fill="#8884d8"
                paddingAngle={0}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
                <Label value={`${totalPercentage}%`} position="center" fontSize={16} fill="#8884d8" />
              </Pie>
            </PieChart>
          </Box>
        </Box>
      </Flex>
      <Flex align={'center'} justifyContent={'Center'}>
        <Box mt={5}>
          <Flex align={'center'} justifyContent={'Center'}>
            <Text fontSize={{ base: '12px', sm: '14px', md: '18px' }}>
              Amount spent so far
            </Text>
          </Flex>
          <Flex>
            <Text
              mt={2}
              fontSize={{ base: '16px', sm: '16px', lg: '22px' }}
              as="b"
            >
              ₦{totalMoney}
            </Text>
            <Text
              mt={2}
              fontSize={{ base: '16px', sm: '16px', lg: '22px' }}
              color="rgba(4, 102, 200, 1)"
            >
              /₦{budgetAmount}
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default ExpensesOverview;
