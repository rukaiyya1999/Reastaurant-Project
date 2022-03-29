import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home'
import Restorantlist from './components/Restorantlist'
import Restorantdetails from './components/Restorantdetails'
import Restorantsearch from './components/Restorantsearch'
import Restorantcreate from './components/Restorantcreate'
import Restorantupdate from './components/Restorantupdate'
import Restorantlogin from './components/Restorantlogin'
import Restologout from './components/Restologout'
import Protected from './components/Protected'
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
