import './App.css';
import {
  useNavigate,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import SignUpForm from '../signup/SignUpForm';
import LogInForm from '../login/LogInForm';
import MainGame from '../game/MainGame';
import PrivateRoute from '../token/PrivateRoute';

function App() {
  window.addEventListener('beforeunload', () => {
    localStorage.removeItem('token');
  });

  return (
    <Routes>
      <Route path='/' element={<Navigate to="/login" />}/>
      <Route path='/game'  element={
      <PrivateRoute>
        <MainGame navigate={ useNavigate() } />
      </PrivateRoute>
      }/>
      <Route path='/signup'  element={<SignUpForm navigate={ useNavigate() } />}/>
      <Route path='/login'  element={<LogInForm  navigate={ useNavigate() }/>}/>
    </Routes>
  );
}

export default App;
