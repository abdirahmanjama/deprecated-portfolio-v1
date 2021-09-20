import { Divider, VStack } from "@chakra-ui/layout";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { useMediaQuery } from "@chakra-ui/media-query";
import Contact from "./components/Contact";
import Blogs from "./components/Blogs";
import Home from "./components/Home";
import About from "./components/About";
import Error from "./components/Error";

function App() {
  const [isNotMobile] = useMediaQuery("(min-width:760px)");

  return (
    <>
      <Router>
        <VStack maxW="6xl" marginLeft="auto" marginRight="auto" width="80%">
        <Header />

          <Switch>
            <Route exact path="/"><Home/></Route>
            <Route path="/about"><About/></Route>
            <Route path="/blogs"><Blogs/></Route>
            <Route path="/404"><Error/></Route>
            <Redirect to="/404" />
          </Switch>
          <Footer />
        </VStack>
      </Router>
    </>
  );
}

export default App;
