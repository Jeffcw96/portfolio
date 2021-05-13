import './App.css';
import { ProjectDetailsProvider } from './context/ProjectDetailsProvider'
import ProjectDetails from './component/ProjectDetails'
import Main from './component/Main'
import { Switch, Route } from 'react-router-dom'

const notFoundPage = () => (
  <div>404 - Page Not Found</div>
)


function App() {
  return (
    <ProjectDetailsProvider>
      <Main />
    </ProjectDetailsProvider>

    // <Switch >
    //   <Route path="/" exact component={Main} />
    //   <Route path="/project/:id" component={ProjectDetails} />
    //   <Route component={notFoundPage} />
    // </Switch>
  );
}

export default App;
