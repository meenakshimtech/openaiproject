import logo from './logo.svg';
import './App.css';
import {HashRouter  as Router,Route,Routes,Switch} from 'react-router-dom'
import Signin from './components/auth/Signin'
import Signup from './components/auth/Signup'
import { AuthContext } from './context/AuthContext'
import { Protected } from './Protected'
import Dashboard from './Dashboard';


function App() {
  return (
    <div className="App">
      <AuthContext>



<Router>

<Routes>
      <Route path='/'  exact element={<Signin/>}  />
      <Route  path='/signup'  element={<Signup/>} />
      <Route  path='/dashboard'  element={<Protected><Dashboard/></Protected>} />
    
      </Routes>
      </Router></AuthContext> 

    </div>
  );
}

export default App;
