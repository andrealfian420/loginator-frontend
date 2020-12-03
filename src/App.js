import { BrowserRouter as Router, Route } from 'react-router-dom';

// Pages
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <div className="w-full md:w-3/4 mt-5 rounded overflow-hidden shadow-xl bg-white grid grid-cols-6">
        <Route exact path="/" component={Login} />
      </div>
    </Router>
  );
}

export default App;
