import './App.css';
import ProjectDetails from './component/ProjectDetails'
import Main from './component/Main'
import { Switch, Route } from 'react-router-dom'

const notFoundPage = () => (
  <div>404 - Page Not Found</div>
)


function App() {
  return (
    <Switch >
      <Route path="/" exact component={Main} />
      <Route path="/project/:id" component={ProjectDetails} />
      <Route component={notFoundPage} />
    </Switch>
  );
}

export default App;
