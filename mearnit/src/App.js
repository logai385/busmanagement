import './App.css';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import Auth from './pages/Auth/Auth';
function App(props) {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/landing" component={Landing} />

        <Route exact path="/login" render={props=> <Auth {...props} authRoute="login"/>} />
        <Route exact path="/register" render={props=> <Auth {...props} authRoute="register"/>} />

      </Switch>
    </Router>
  );
}

export default App;
