import { Divider, VStack } from "@chakra-ui/layout";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <VStack maxW="6xl" marginLeft="auto" marginRight="auto" width="80%">
          <Header />
          <Hero />

          <Switch>
            <Route path="/"></Route>
            <Route path="/blogs"></Route>
          </Switch>
          <Skills />

          <Projects />
        
          <Footer />
        </VStack>
      </Router>
    </>
  );
}

export default App;
