import './App.css';
import { useState } from 'react';
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
import Bookshelf from '../bookshelf/bookShelf.js'
import PrivateRoute from '../token/PrivateRoute';
import Settings from '../settings/Settings';
import Desk from '../desk/Desk';

function App() {
  const [showIntro, setShowIntro] = useState(false)

  return (
    <Routes>
      <Route path='/' element={<Navigate to="/login" />}/>
      <Route path='/game'  element={
      <PrivateRoute>
        <MainGame navigate={useNavigate()} showIntro={showIntro} setShowIntro={setShowIntro} />
      </PrivateRoute>
      }/>
      <Route path='/settings' element={
        <PrivateRoute>
          <Settings navigate={ useNavigate() } />
        </PrivateRoute>
      }/>
      <Route path='/signup'  element={<SignUpForm navigate={ useNavigate() } />}/>
      <Route path='/login'  element={<LogInForm  navigate={ useNavigate() } showIntro={showIntro} setShowIntro={setShowIntro}/>}/>
      <Route path='/wallComputer' element={<PrivateRoute><WallComputer navigate={useNavigate()} /></PrivateRoute>} />
      <Route path='/wallServer' element={<PrivateRoute><WallServer navigate={useNavigate()} /></PrivateRoute>} />
      <Route path='/desk' element={<PrivateRoute><Desk navigate={useNavigate()} /></PrivateRoute>} />
      <Route path='/bookShelf' element={<PrivateRoute><Bookshelf navigate={useNavigate()} /></PrivateRoute>} />
    </Routes>
  );
}

export default App;
