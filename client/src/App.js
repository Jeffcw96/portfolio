import './App.css';
import { ProjectDetailsProvider } from './context/ProjectDetailsProvider'
import Main from './component/Main'

function App() {
  return (
    <ProjectDetailsProvider>
      <Main />
    </ProjectDetailsProvider>
  );
}

export default App;
