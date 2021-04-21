import './App.css'

import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Summary from './pages/Summary/Summary'
import Vote from './pages/Vote/Vote'

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/stats/:code" component={Summary} />
                <Route path="/:code" component={Vote} />
                <Route path="/" component={Home} />
            </Switch>
        </Router>
    )
}

export default App
