
import './App.css';
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="main">
        <h2 className="main-header">React Crud Operations</h2>
        <nav className="nav">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/create'} className="nav-link">Create Component</Link></li>
            <li><Link to={'/read'} className="nav-link">Read Component</Link></li>
            <li><Link to={'/update'} className="nav-link">Update Component</Link></li>
          </ul>
        </nav>
          <Routes>
            <Route exact path='/create' element={<Create/>}/>
            <Route exact path='/read' element={<Read/>}/>
            <Route exact path='/update' element={<Update/>}/>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
