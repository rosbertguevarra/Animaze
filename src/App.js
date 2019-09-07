import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./components/Main";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path exact="/" component={Main} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
