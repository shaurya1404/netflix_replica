import Navbar from "../NavBar"
import "./ProfileScreen.css"
import { useSelector } from 'react-redux'


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
                    <div className="profileScreen_details"></div>
                </div>
            </div>
        </div>
    )
}