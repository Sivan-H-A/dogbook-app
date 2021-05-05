import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import BreedsPage from './pages/BreedsPage/BreedsPage';
import BreedDetailsPage from './pages/BreedDetailsPage/BreedDetailsPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import BreedsNavbar from './components/BreedsNavbar/BreedsNavbar';

function App() {
  
  return (
    <div className="App">
      <HashRouter>
        <BreedsNavbar/>
        <Switch>
          <Route exact path="/" ><HomePage/></Route>
          <Route exact path="/breeds"><BreedsPage/></Route>
          <Route exact path="/breeds/:breed"><BreedDetailsPage/></Route>          
          <Route path="/"><NotFoundPage/></Route>          
        </Switch>        
      </HashRouter>
    </div>
  );
}

export default App;
