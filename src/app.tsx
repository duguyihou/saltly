import Code from '@modules/code'
import Home from '@modules/home'
import Life from '@modules/life'
import NotFound from '@modules/notfound'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/life" exact component={Life} />
        <Route path="/code" exact component={Code} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

export default App
