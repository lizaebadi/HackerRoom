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
    <Route path='/'  element={<SignUpForm navigate={ useNavigate() } />}/>
  </Routes>
  );
}

export default App;
