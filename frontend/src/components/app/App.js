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
import WallComputer from '../wallComputer/WallComputer'
import WallServer from '../wallServerSmall/wallServer';
import PrivateRoute from '../token/PrivateRoute';
import Settings from '../settings/Settings';
import Desk from '../desk/Desk';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to="/login" />}/>
      <Route path='/game'  element={
      <PrivateRoute>
        <MainGame navigate={ useNavigate() } />
      </PrivateRoute>
      }/>
      <Route path='/settings' element={
        <PrivateRoute>
          <Settings navigate={ useNavigate() } />
        </PrivateRoute>
      }/>
      <Route path='/signup'  element={<SignUpForm navigate={ useNavigate() } />}/>
      <Route path='/login'  element={<LogInForm  navigate={ useNavigate() }/>}/>
      <Route path='/wallComputer' element={<PrivateRoute><WallComputer navigate={useNavigate()} /></PrivateRoute>} />
      <Route path='/wallServer' element={<PrivateRoute><WallServer navigate={useNavigate()} /></PrivateRoute>} />
      <Route path='/desk' element={<PrivateRoute><Desk navigate={useNavigate()} /></PrivateRoute>} />
    </Routes>
  );
}

export default App;
