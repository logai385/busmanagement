import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Auth from "./pages/Auth/Auth";
import AuthContextProvider from "./services/AuthContext";
import Dashboard from "./pages/Dashboard/Dashboard";
function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/landing" component={Landing} />
          <Route exact path="/dashboard" component={Dashboard} />

          <Route
            exact
            path="/login"
            render={(props) => <Auth {...props} authRoute="login" />}
          />
          <Route
            exact
            path="/register"
            render={(props) => <Auth {...props} authRoute="register" />}
          />
        </Switch>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
