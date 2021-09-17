import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, Heading, Spacer, VStack } from "@chakra-ui/layout";
import {FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin, FaReact, FaDatabase, FaAws} from 'react-icons/fa'
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skill from "./components/Skill";
import Skills from "./components/Skills";

function App() {

  const {colorMode, toggleColorMode} = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    //vstack allows us to have a column from top to vottom 
    
    <VStack>
      {/* <Flex w="100%">
      <Heading ml="8" size="md" fontweight='semibold' color='cyan.400'>abdirahman jama</Heading>

      <Spacer></Spacer>

      <IconButton icon = { isDark ? <FaSun/> : <FaMoon/> } isRound="true"  onClick={toggleColorMode}></IconButton>
     
      </Flex> */}
      <Header/>
      <Hero/>
      <Skills/>
      <Projects/>
      <Footer/> 
     
    </VStack> 
  );
}

export default App;
