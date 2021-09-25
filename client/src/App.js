import './Styles/App.css'
import Login from './Components/login';
import Register from './Components/register';
import Home from './Components/home';
import Sidebar from './Components/sidebar';
import SearchBar from './Components/searchBar';
import Bookmarks from './Components/bookmarks';
import Drafts from './Components/drafts';
import Profile from './Components/profile';
import Loader from './Components/loader'
import Editor from './Components/editor'
import PageNotFound from './Components/404';
import BlogPreviewer from './Components/blogPreviewer';
import Notification from './Components/notification';
import MobileNav from './Components/mobileNav';
import { MobileSidebar } from './Components/sidebar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import "highlight.js/styles/github.css";

function App() {

  const { notifications } = useSelector(state => state.userProfile);

  return (
    <Router>
      {/* Mobile Components Start*/}
      <MobileNav />
      <MobileSidebar />
      {/* Mobile Components End*/}
      <Notification notificationsArray={notifications} />
      <SearchBar />
      <Sidebar />
      <Loader />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/drafts" component={Drafts} />
        <Route exact path="/bookmarks" component={Bookmarks} />
        <Route exact path="/editor" component={Editor} />
        <Route exact path="/editor/draft/:id" component={Editor} />
        <Route exact path="/profile/:username" component={Profile} />
        <Route exact path="/blog/:id" component={BlogPreviewer} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
