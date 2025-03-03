import './App.css';
import { Route, Switch, Link } from 'wouter';
import Home from './pages/Home';
import Settings from './pages/Settings';
import Error from './pages/Error';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <div className="content">
      <nav className="mb-4 p-4 bg-gray-100">
        <Link href="/" className="mr-4">Home</Link>
        <Link href="/settings" className="mr-4">Settings</Link>
        <Link href="/error" className="mr-4">Error</Link>
        <Link href="/not-found" className="mr-4">Page that doesn't exist (404)</Link>
      </nav>
      
      <div className="p-4">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/settings" component={Settings} />
          <Route path="/error" component={Error} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
