import { BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import './App.css'
import { AuthContextProvider } from './context/AuthContext';
import MyNavbar from './components/Navbar';

import PrivateRoute from './components/PrivateRoute';

import AdminArea from './components/AdminArea';
import LogIn from './components/LogIn';
import Menu from './pages/Menu';
import Tavolo from './pages/Tavolo';

function App() {

  return (
    <AuthContextProvider>
      <MyNavbar/>
      <Router>
        <Routes>
          <Route path='/' element={<Menu/>} />
          <Route path='/tavolo/:numeroTavolo' element={<Tavolo/>} />
          <Route path="admin" element={<PrivateRoute />}>
            <Route path="account" element={<AdminArea />} />
          </Route>
          <Route path="login" element={<LogIn />}></Route>
        </Routes>
      </Router>
    </AuthContextProvider>
  )
}

export default App
