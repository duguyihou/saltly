import Home from '@modules/home'
import NotFound from '@modules/notfound'
import Post from '@modules/post'
import Welcome from '@modules/welcome'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Welcome} />
        <Route path="/home" exact component={Home} />
        <Route path="/post/:id" component={Post} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

export default App
