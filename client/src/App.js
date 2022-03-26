import './App.sass';
import 'materialize-css/sass/materialize.scss'
import getRoutes from "./routes";
import {BrowserRouter as Router} from "react-router-dom";


function App() {
  const routes = getRoutes(false)

  return (
     <Router>
        <div className="container">
           {routes}
        </div>
     </Router>
  );
}

export default App;
