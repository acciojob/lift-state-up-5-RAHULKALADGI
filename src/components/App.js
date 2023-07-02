
import React ,{useState} from "react";
import './../styles/App.css';

const App = ()=> {
    let [name , setName] = useState("");
    let [pass , setPass] = useState("");
    let [isLoggedIn , setIsLoggedIn] = useState(false);
    function func() {
        if(name && pass) {
            setIsLoggedIn(true);
        }
    }
    return (
        <div>
        <h1>Parent Component</h1>
        {!isLoggedIn ? (
        <div>
            <form>
            <label for="name">Username:</label>
            <input type="text" onChange={(event)=>setName(event.target.value)}/>
            <label for="password">Password:</label>
            <input type="password" onChange={(event)=>setPass(event.target.value)}/>
            <button onClick={func}>Login</button>
            </form>
        </div>
        ) : (
            <p>You are logged in!</p>
        )
        }
        </div>
    )
}

export default App
