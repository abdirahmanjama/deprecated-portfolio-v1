import { VStack } from "@chakra-ui/layout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Blogs from "./components/Blogs";
import Error from "./components/Error";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";


function App() {

  return (
    <>
      <Router>
        <VStack maxW="6xl" marginLeft="auto" marginRight="auto" width="80%">
        <Header />
          <Switch>
            <Route exact path="/"><Home/></Route>
            <Route path="/blogs"></Route>
            <Route component={Error}/>
          </Switch>
          <Footer />
        </VStack>
      </Router>
    </>
  );
}

export default App;
