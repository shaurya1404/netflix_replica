import HomeScreen from './screens/HomeScreen'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import LoginScreen from './screens/LoginScreen';
import { useEffect } from 'react';
import { useDispatch, Provider, useSelector } from 'react-redux'
import { store } from './app/store';
import { login, logout } from './features/userSlice';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js';
import ProfileScreen from './screens/ProfileScreen';
const auth = getAuth();


function App() {

  const user = useSelector((state) => state.users)
  console.log(user)
  const dispatch = useDispatch();

  useEffect(() => {
    const toUnmount = auth.onAuthStateChanged(userAuth => {
      console.log(userAuth);
      if(userAuth) {
        //Logged In
        console.log(userAuth);
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email
          })
        )
      }
      else {dispatch(logout())}
    });
    return toUnmount; // cleaning up by using "return" keyword in use Effect to remove the listener onAuthStateChanged 
  }, [dispatch])

  return (
    <>
       <div className='app'>
        <Router>
          {!user ?  <LoginScreen/> :
          (<Routes>
            <Route exact path='/profile' element={<ProfileScreen/>}>
            </Route>
            <Route exact path='/' element={<HomeScreen/>}>
            </Route>
          </Routes>) 
          }
        </Router>
        </div>
    </>   
  )
}

export default App
