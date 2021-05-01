import './App.css';
import { HashRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import BreedsPage from './pages/BreedsPage/BreedsPage';
import BreedDetailsPage from './pages/BreedDetailsPage/BreedDetailsPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact path="/" ><HomePage/></Route>
          <Route exact path="/breeds"><BreedsPage/></Route>
          <Route exact path="/breeds/:id"><BreedDetailsPage/></Route>          
          <Route path="/"><NotFoundPage/></Route>          
        </Switch>        
      </HashRouter>
    </div>
  );
}

export default App;
