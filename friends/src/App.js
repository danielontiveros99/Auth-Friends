
import './App.css';

//import link route switch and browser router
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom'

//import components
import Login from './components/Login'
import FriendsList from './components/FriendsList'
import AddFriend from './components/AddFriend'

function App() {
  return (
    <Router>
    <div className="App">
      {/* Building the page */}

     <h1> App goes here </h1>
      <ul>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='friends'>Friends's List</Link>
        </li>
        <li>
          <Link to='/add'>Add Friend</Link>
        </li>
        <li>
          {/* Stretch */}
          <Link>Delete Friend</Link>
        </li>
      </ul>    
      <Switch>
        <Route exact path='/login' component={Login}/>
        <Route path ='/protected' component={FriendsList}/>
        <Route path='/protected' component={AddFriend}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
