import logo from './logo.svg';
import './App.css';
import Signup from './components/signup';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

function Home() {
  return (
    <>
    <h1>Home</h1>
    </>
  );
}

function Features() {
  return (
    <>
    <h1>Features</h1>
    </>
  );
}

function Login() {
  return (
    <>
    <h1>Login</h1>
    </>
  );
}

function App() {
  return (
    <Router>
    <div className="App">
        <div class="container">
          <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
            <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
              <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"></svg>
            </a>

            <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
              <li><Link to="/home" className="nav-link px-2 link-secondary">Home</Link></li>
              <li><Link to="/features" className="nav-link px-2 link-secondary">Features</Link></li>
              <li><a href="#" class="nav-link px-2 link-dark">Pricing</a></li>
              <li><a href="#" class="nav-link px-2 link-dark">FAQs</a></li>
              <li><a href="#" class="nav-link px-2 link-dark">About</a></li>
            </ul>

            <div class="col-md-3 text-end">
              <Link to="/login">
              <button type="button" class="btn btn-outline-primary me-2">Login</button>
             </Link>
              <Link to="/signup">
              <button type="button" class="btn btn-primary">Sign-up</button>
             </Link>
            </div>
          </header>
      </div>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/features' element={<Features />}></Route>
          <Route exact path='/login' element={<Login />}></Route>
          <Route exact path='/signup' element={ <Signup /> }></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
