import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, Heading, Spacer, VStack } from "@chakra-ui/layout";
import {FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin} from 'react-icons/fa'
import Header from "./components/Header";
import Profile from "./components/Profile";
import Socials from "./components/Socials";

function App() {

  const {colorMode, toggleColorMode} = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    //vstack allows us to have a column from top to vottom 
    <VStack>
      <Flex w="100%">
        <Heading ml="8" size="md" fontweight='semibold' color='cyan.400'>abdirahman jama</Heading>

      <Spacer></Spacer>

      <IconButton icon = { isDark ? <FaSun/> : <FaMoon/> } isRound="true"  onClick={toggleColorMode}></IconButton>
     
      </Flex>
       <Header/>
      <Socials/>
      <Profile/>
     
    </VStack> 
  );
}

export default App;
