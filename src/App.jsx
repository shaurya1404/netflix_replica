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

  const user = true
  console.log(user)
  const dispatch = useDispatch();

  useEffect(() => {
    if(user) {
      dispatch(
        login({
          uid: user.uid,
          email: user.email
        })
      )
    }
    else {dispatch(logout())}
    // const toUnmount = auth.onAuthStateChanged(userAuth => {
    //   console.log(userAuth);
    //   if(userAuth) {
    //     //Logged In
    //     console.log(userAuth);
    //     dispatch(
    //       login({
    //         uid: userAuth.uid,
    //         email: userAuth.email
    //       })
    //     )
    //   }
    // });
    // return toUnmount; // cleaning up by using "return" keyword in use Effect to remove the listener onAuthStateChanged 
  }, [])

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
