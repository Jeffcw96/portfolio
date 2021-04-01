import './App.css';
import ProjectDetails from './component/ProjectDetails'
import Main from './component/Main'
import { CSSTransition } from 'react-transition-group'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const notFoundPage = () => (
  <div>404 - Page Not Found</div>
)


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/project/:id" component={ProjectDetails} />
        <Route component={notFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;
