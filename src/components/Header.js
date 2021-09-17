import { useColorMode, useColorModeValue } from '@chakra-ui/color-mode'
import { useMediaQuery } from '@chakra-ui/media-query';
import React from 'react'


const TEXT = [
    " Hi 👋",
    "My name is",
    "Abdirahman Jama",
  ];

function Header() {

    const [index, setIndex] = React.useState(0);

    const {colorMode} = useColorMode(); 
    const isDark = colorMode === 'dark';

    const [isNotSmallScreen] = useMediaQuery("(min-width:600px)");
    
    React.useEffect(() => {
        const intervalId = setInterval(() =>
          setIndex(index => index + 1),
          3000 // every 3 seconds
        );
        return () => clearTimeout(intervalId);
      }, []);

    return (
       <>
       </>
    )
}

export default Header
