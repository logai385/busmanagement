
import Dashboard from "./pages/Dashboard/Dashboard";
import BusPages from "./pages/ManagementBus/BusPages";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SignDocument from "./pages/SignDocument/SignDocument";
import AddSignDocument from "./pages/SignDocument/AddSignDocument";
import Login from "./pages/Auth/Login";
import Landing from "./pages/Layout/Landing";
import AuthContextProvider from "./Context/AuthContext";
import DashboardTemplate from "./templates/Dashboard/DashboardTemplate";

function App() {
  return (
  
      <AuthContextProvider>
        <Router>
          <Switch>
            <DashboardTemplate exact path="/dashboard" component={Dashboard} />
            <DashboardTemplate exact path="/qlbus" component={BusPages} />
            <DashboardTemplate exact path="/documents/" component={SignDocument} />
            <DashboardTemplate exact path="/documents/:action" component={AddSignDocument} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Landing} />
          </Switch>
        </Router>
      </AuthContextProvider>
  
  );
}

export default App;
