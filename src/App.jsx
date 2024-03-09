import HomeScreen from './screens/HomeScreen'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import LoginScreen from './screens/LoginScreen';
import { useEffect } from 'react';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js';
const auth = getAuth();

function App() {

  const user = null;

  useEffect(() => {
    const toUnmount = auth.onAuthStateChanged(userAuth => {
      if(userAuth) {
        //Logged In
        console.log(userAuth)
      }
      else {
        //Logged Out
      }
    });
    return toUnmount; // cleaning up by using "return" keyword in use Effect to remove the listener onAuthStateChanged 
  })

  return (
      <div className='app'>
        <Router>
          {!user ? (<LoginScreen/>) : 
          (<Routes>
            <Route exact path='/' element={<HomeScreen/>}>
            </Route>
          </Routes>)
          }
        </Router>
      </div>
  )
}

export default App
