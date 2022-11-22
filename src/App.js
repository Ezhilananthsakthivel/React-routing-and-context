import React from "react";
//import Test1 from "./components/Test1";
import { BrowserRouter as Router, HashRouter } from "react-router-dom";
import ThemeProvider from "./components/Context";
import Navigation from "./components/Navigation";
import Routing from "./components/Routing";
import UseRef from "./UseRef";

function App() {
  return (
    <ThemeProvider>
    <Router>
      <Navigation />
      <Routing />
    </Router>
    </ThemeProvider>
    
  )
}

// function App(){
//   return(
//     //<Test1/>
//     <UseRef/>
//   )
// }

export default App