import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HomePage from "./components/home";
import LoginPage from "./components/login";
import SignupPage from "./components/signup";
import Layout from "./containers/layout";
import PrivateRoute from "./containers/privateRoute";
import { useDispatch, useSelector } from 'react-redux';
import {useEffect} from 'react';
import {login, checkAuthState} from "./store/actions/auth";
import 'antd/dist/antd.css'; 

function App() {

  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

    useEffect(()=>{
      dispatch(checkAuthState());
    }, [!auth.user,dispatch]);

  return (
    <div className="App">
        <Router>
              <Route path="/login"  component={LoginPage}/>
              <Route path="/signup" component={SignupPage}/>
              <PrivateRoute exact path="/" component={HomePage} />
        </Router>
    </div>
  );
}

export default App;
