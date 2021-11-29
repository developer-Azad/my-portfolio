
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigation from './components/Shared/Navigation/Navigation';
import Home from './components/Home/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Navigation></Navigation>

      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/addNewService">
          
          </Route>
        <Route path="/login">
          
        </Route>
      </Switch>

    </BrowserRouter>
  );
}

export default App;
