import { VStack } from "@chakra-ui/layout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Error from "./components/Error";
import Footer from "./components/Footer";
import Home from "./containers/Home";
import React from "react";

export default function App() {
  return (
    <div style={{ overflow: "hidden" }}>
      <Router>
        <VStack maxW="6xl" marginLeft="auto" marginRight="auto" width="80%">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/blogs"></Route>
            <Route component={Error} />
          </Switch>
          <Footer />
        </VStack>
      </Router>
    </div>
  );
}
