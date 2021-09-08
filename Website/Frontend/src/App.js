import React from "react";
import QuestionsForm from "./Questions/questions";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import List from "./List/list";
import Front from "./Front/front";
import Contact from "./Contact/contact";
import Team from "./Team/team";
import How from "./How/How";
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Front} />
          <Route exact path="/questions" component={QuestionsForm} />
          <Route exact path="/list" component={List} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/how" component={How} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
