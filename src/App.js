import { IconButton } from "@chakra-ui/button";
import { Flex, Heading, VStack } from "@chakra-ui/layout";
import {FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin} from 'react-icons/fa'

function App() {
  return (
    //vstack allows us to have a column from top to vottom 
    <VStack>
      <Flex w="100%">
        <Heading ml="8" size="md" fontweight='semibold' color='cyan.400'>abdirahman jama</Heading>
      </Flex>

      <IconButton icon = {<FaSun/>} isRound="true">

      </IconButton>
    </VStack> 
  );
}

export default App;
