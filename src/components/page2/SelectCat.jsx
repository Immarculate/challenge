import React, { useState } from 'react';
import { Box, Image, Text } from '@chakra-ui/react';
import transport from '../../Assets/transport.png';
import rednocircle from '../../Assets/rednocircle.png';
import greennocircle from '../../Assets/greennocircle.png';
import tell from '../../Assets/tell.png';
import calender from '../../Assets/calender.png';
import setting from '../../Assets/setting.png';


const SelectCat = ({ selectOption, toggleDropdown, selectedOption, isDropdownOpen }) => {
    // const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    //   const [selectedOption, setSelectedOption] = useState(null);

      const options = [
        {
            percent: '20%',
            label: 'Food and Drink',
            image: <Image src={rednocircle} alt="icone" mr={2} h={5} w={5}  />,
          },
          {
            percent: '35%',
            label: 'Savings',
            image: <Image src={greennocircle} alt="icone" mr={2} h={5} w={5} />,
          },
          {
            percent: '70%',
            label: 'Transport',
            image: <Image src={transport} alt="icone" mr={2} h={5} w={5} />,
          },
          {
            percent: '70%',
            label: 'Telephone',
            image: <Image src={tell} alt="icone" mr={2} h={5} w={5} />,
          },
          {
            percent: '70%',
            label: 'Setting',
            image: <Image src={setting} alt="icone" mr={2} h={5} w={5} />,
          },
          {
            percent: '70%',
            label: 'Cloths',
            image: <Image src={calender} alt="icone" mr={2} h={5} w={5} />,
          },
      ];

   
  return (
    <Box className='container'>
         
          <Box maxW={{base: "15.1875rem", sm: '16.1875rem', lg: '20rem'}} className="dropdown">
            <Box className="dropdown-toggle" onClick={toggleDropdown}>
              {selectedOption && (
                <img src={selectedOption.image} alt={selectedOption.label} className="dropdown-option-image" />
              )}
              <span className="dropdown-option-label">
                {selectedOption ? selectedOption.label : 'Select an option'}
              </span>
              <span className="dropdown-caret"></span>
            </Box>
            <ul className={`dropdown-menu ${isDropdownOpen ? 'open' : ''}`}>
              {options.map((option, index) => (
                <li key={index} onClick={() => selectOption(option)}>
                  <img src={option.image} alt={option.label} className="dropdown-option-image" />
                  <span className="dropdown-option-label">{option.label}</span>
                </li>
              ))}
            </ul>
          </Box>
        </Box>
  )
}

export default SelectCat