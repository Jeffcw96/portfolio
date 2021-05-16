import './App.css';
import { ProjectDetailsProvider } from './context/ProjectDetailsProvider'
import Main from './component/Main'

const notFoundPage = () => (
  <div>404 - Page Not Found</div>
)


function App() {
  return (
    <ProjectDetailsProvider>
      <Main />
    </ProjectDetailsProvider>
  );
}

export default App;
