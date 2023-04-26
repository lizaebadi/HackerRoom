import logo from './logo.svg';
import './App.css';
import {
  useNavigate,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import SignUpForm from '../../../../../acebook-team-fire/frontend/src/components/user/SignUpForm';

function App() {
  return (
    <Routes>
      <Route path='/'  element={<Navigate to="/signup" />}/>
      <Route path='/signup'  element={<SignUpForm navigate={ useNavigate() } />}/>
      <Route path='/login'  element={<LoginForm  navigate={ useNavigate() }/>}/>
    </Routes>
  );
}

export default App;
