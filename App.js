
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home'
import Restorantlist from './Restorantlist'
import Restorantdetails from './Restorantdetails'
import Restorantsearch from './Restorantsearch'
import Restorantcreate from './Restorantcreate'
import Restorantupdate from './Restorantupdate'
import Restorantlogin from './Restorantlogin'
import Restologout from './Restologout'
import Protected from './Protected'
function App() {
  return (
    <div className="App">
    <Router>

    <Protected exact path='/' component={Home} />
    <Protected exact path='/list' component={Restorantlist} />
    <Protected exact path='/Search' component={Restorantsearch} />
    <Protected exact path='/Create' component={Restorantcreate} />
    <Protected exact path='/Update/:id' component={Restorantupdate} />

    <Route path='/logout'>
    <Restologout/>
    </Route>

    <Route path='/login'
    render={props=>(
    <Restorantlogin {...props}/>
    )}
    >
    </Route>
    </Router>
    </div>
  );
}
export default App;
