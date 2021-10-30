import Code from '@modules/code'
import Home from '@modules/home'
import NotFound from '@modules/notfound'
import Thought from '@modules/thought'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/thought" exact component={Thought} />
        <Route path="/code" exact component={Code} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

export default App
