import { BrowserRouter as Router, Route } from 'react-router-dom';

// Pages
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <div className="w-full md:w-3/4 h-auto xl:min-h-default mt-5 rounded overflow-hidden shadow-xl bg-white grid grid-cols-6">
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/forgotpassword" component={ForgotPassword} />
        <Route path="/profile/:username" component={Profile} />
      </div>
    </Router>
  );
}

export default App;
