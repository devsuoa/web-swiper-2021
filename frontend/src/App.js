import "./App.css";

import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Summary from "./pages/Summary/Summary";
import Vote from "./pages/Vote/Vote";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/vote">
                    <Vote />
                </Route>
                <Route path="/stats">
                    <Summary />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
