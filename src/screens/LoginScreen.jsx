import { useState } from "react"
import "./LoginScreen.css"
import SignUpScreen from "./SignUpScreen"

export default function LoginScreen() {

    const [signIn, setSignIn] = useState(false)

    return (
        <div className="loginScreen">
            <div className="loginScreen_bg">
                <img className="loginScreen_logo" src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png" alt="netflix image "></img>
                <button className="loginScreen_signIn" onClick={() => setSignIn(true)}>Sign In</button>
                <div className="loginScreen_gradient"></div> {/* to give parent div's body a size so that bg image is displayed */}
                {signIn ? <SignUpScreen></SignUpScreen> : 
                (
                <>
                    <div className="loginScreen_body">
                        <h1>Unlimited films, TV programmes and more.</h1>
                        <h2>Watch anywhere. Cancel at anytime.</h2>
                        <h3>Ready to watch? Enter your email to create or restart your membership</h3>
                        <div className="loginScreen_input">
                            <form>
                                <input type="email" placeholder="Email Address"></input>
                                <button className="loginScreen_getStarted" onClick={() => setSignIn(true)}>GET STARTED</button>
                            </form>
                    </div>
                    </div>
                </>
                )}
            </div> 
        </div>
    )
}