import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Component/Home/Home';
import NotFound from './Component/NotFound/NotFound';
import TeamList from './Component/TeamList/TeamList';
import TeamDetails from './Component/TeamDetails/TeamDetails';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  

  return (
    <div>
       {/* Banner Section */}
       {/* Banner Section */}


{/* ============== */}
       {/* Routes */}


       <Router>
         <Switch>
           <Route path="/home">
             <Home></Home>
           </Route>
           <Route exact path="/">
            <Home></Home>
           </Route>
           <Route path="/team/:teamId">
          <TeamDetails></TeamDetails>
        </Route>
           <Route path="*">
            <NotFound></NotFound>
           </Route>
         </Switch>
       </Router>
       <TeamList></TeamList>
       


    </div>

  );
}

export default App;
