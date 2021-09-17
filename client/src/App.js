import './Styles/App.css'
import Login from './Components/login';
import Register from './Components/register';
import Home from './Components/home';
import Nav from './Components/sidebar';
import SearchBar from './Components/searchBar';
import Bookmarks from './Components/bookmarks';
import Drafts from './Components/drafts';
import Profile from './Components/profile';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  return (
    <Router>
      <SearchBar />
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/drafts" component={Drafts} />
        <Route exact path="/bookmarks" component={Bookmarks} />
        <Route exact path="/profile/:username" component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;
