import './App.css';
import ProjectDetails from './component/ProjectDetails'
import Main from './component/Main'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/project/:id" component={ProjectDetails} />
      </Switch>
    </Router>
  );
}

export default App;
