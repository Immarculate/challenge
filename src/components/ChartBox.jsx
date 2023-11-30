import React from 'react';
import point from '../Assets/point.svg';
import { Link } from 'react-router-dom';
import {
  Box,
  Text,
  Image,
  Flex,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Button,
} from '@chakra-ui/react';

const ChartBox = ({ setCurrentOverview }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Box mt={5} mb={2} mx={8}>
        <Flex>
          <Box>
            <Flex alignItems={'center'}>
              <Box w={{ base: '100px', lg: '191px' }}>
                <Text fontSize={{ base: '12px', sm: '16px', lg: '20px' }}>
                  Last Month
                </Text>
              </Box>
              <Box
                borderBottom="1px solid blue"
                w={{ base: '80px', lg: '191px' }}
                ml={{ base: '-6', sm: '15px', md: '2' }}
              >
                <Text fontSize={{ base: '12px', sm: '16px', lg: '20px' }}>
                  This Month
                </Text>
              </Box>
            </Flex>
          </Box>

          <Flex
            align="center"
            justify="end"
            maxW={{ base: '19.6885rem', md: '22.6885rem', lg: '550px' }}
            ml={{ base: '70px', sm: '100px', xs: '100px', xm: '120px', md: '130px' }}
          >
            <Box onClick={onOpen}>
              <Image src={point} alt="" />
            </Box>
          </Flex>
        </Flex>
      </Box>
      <Modal onClose={onClose} isOpen={isOpen} motionPreset="slideInBottom">
        <ModalOverlay />
        <ModalContent
          maxW="200px"
          borderRadius={'5px'}
          minH="76px"
          mt={'250px'}
          ml={{ base: '100px', sm: '191px' }}
        >
          <ModalBody>
            <Flex align={'center'} justify={'center'}>
              <Box>
                <Box my={2} onClick={() => setCurrentOverview('expenses')}>
                  <Text fontSize={{ base: '13px', sm: '14px', md: '18px' }}>
                    Expenses overview
                  </Text>
                </Box>
                <Box my={2} onClick={() => setCurrentOverview('category')}>
                  <Text fontSize={{ base: '13px', sm: '14px', md: '18px' }}>
                    Category Overview
                  </Text>
                </Box>
              </Box>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ChartBox;
