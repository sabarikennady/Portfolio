import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import AboutUs from "./pages/AboutUs";
import StyledNav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <StyledNav />
      <AboutUs />
    </div>
  );
}

export default App;
