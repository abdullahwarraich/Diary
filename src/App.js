import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Diary from './pages/Diary'
import NotFound from './pages/NotFound'

const App = () => (
  <Router>
    <Switch>
      <Route exact path='/'>
        <Diary />
      </Route>
      <Route path='*' component={NotFound} />
    </Switch>
  </Router>
)

export default App
