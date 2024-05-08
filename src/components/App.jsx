import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import './App.css';
import MainInformation from './MainInformation/MainInformation';

// const HomePage = lazy(() => import('./pages/HomePage'));
const CatalogPage = lazy(() => import('./pages/CatalogPage'));
const FavoritesPage = lazy(() => import('./pages/FavoritesPage'));

function App() {
  return (
    <Router>
      <div className="App">
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={MainInformation} />
            <Route path="/catalog" component={CatalogPage} />
            <Route path="/favorites" component={FavoritesPage} />
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;