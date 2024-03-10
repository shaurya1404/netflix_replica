import Navbar from "../NavBar"
import "./ProfileScreen.css"
import { useSelector } from 'react-redux'
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js';
const auth = getAuth();


export default function ProfileScreen() {

    const user = useSelector(state => state.users);
    console.log(user);

    return (
        <div className="profileScreen">
            <Navbar></Navbar>
            <div className="profileScreen_body">
                <h1>Edit Profile!</h1>
                <div className="profileScreen_info">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"></img>
                    <div className="profileScreen_details">
                        <h2>{user.email}</h2>
                        <div className="profileScreen_plans">
                            <button onClick={() => auth.signOut()} className="profileScreen_signOut">Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}