/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { EventProvider } from "./context/EventContext";
import AppRoutes from "./routes/AppRoutes";
import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/Header";

const App = () => {
  return (
    <EventProvider>
      <Router>
        <GlobalStyles />
        <Header />
        <AppRoutes />
      </Router>
    </EventProvider>
  );
};

export default App;
