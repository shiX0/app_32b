import './App.css';
import{
  BrowserRouter as Router,
  Routes,
  Route
}from 'react-router-dom'
import Homepage from './pages/homepage/Homepage';
import Loginpage from './pages/login/Loginpage';
import Registerpage from './pages/register/Registerpage';
import Navbar from './components/Navbar';


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        {/* register homepage */}
        <Route path='/' element={<Homepage/>} />


        {/* register route */}
        <Route path='/register' element={<Registerpage/>} />

        {/* login route */}
        <Route path='/login' element={<Loginpage/>} />
      </Routes>
    </Router>
  );
}

export default App;
