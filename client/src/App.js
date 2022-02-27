import Navbar from "./components/Headers/Navbar";
import MainSidebar from "./components/Sidebars/MainSidebar";
import Footer from "./components/Footers/Footer";
import Dashboard from "./pages/Dashboard/Dashboard";
import BusPages from "./pages/ManagementBus/BusPages";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Transporters from "./components/Test/Transporters";
import TransporterCU from "./components/Test/TransporterCU";
import SignDocument from "./components/Test/SignDocument";

function App() {
  return (
    <div className="App">
      {/* <Router>
        <Navbar />
        <MainSidebar />
        <div>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/qlbus" component={BusPages} />
          </Switch>
          <Footer />
        </div>
      </Router> */}
      <Router>
        <Switch>
          <Route exact path="/" component={SignDocument} />
          <Route exact path="/documents" component={SignDocument} />
          <Route exact path="/documents/add"  component={TransporterCU} />
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
