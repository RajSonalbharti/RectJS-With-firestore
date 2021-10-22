import NavBar from './components/NavBar'
import {BrowserRouter} from 'react-router-dom'
import {Route,Switch} from 'react-router-dom'
import Todo from './components/Todo'
import Login from './components/Login';
import Signup from './components/Signup';
import React,{useState,useEffect} from 'react'
import {auth} from './firebase'


function App() {

  const [user,setUser] = useState(null)
  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
      if(user) setUser(user)
      else setUser(null)
    })
  },[])

  return (
    <BrowserRouter>
    <NavBar user={user} />
    <Switch>
      <Route exact path ="/">
        <Todo user={user} />
      </Route>
      <Route path ="/login">
        <Login />
      </Route>
      <Route path ="/signup">
        <Signup />
      </Route>
    </Switch>
    </BrowserRouter>
   
  );
}

export default App;
