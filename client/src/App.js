import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import Home from "./pages/home/Home"
import {BrowserRouter as Router,
  Routes,
  Route,Navigate
} from "react-router-dom";

function App(){
  const token=localStorage.getItem("token")
  return(
    <Router>
      <Routes>
        <Route exact path="/" element={token?<Home/>:<Login/>}/>
        <Route exact path="/login" element={token?<Home/>:<Login/>}/>
        <Route exact path="/register" element={<Register/>}/>
      </Routes>
    </Router>
    
  )
}

export default App