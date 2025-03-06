import {Link} from "react-router-dom";

const Navbar = ()=>{
    return(
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                
                <li><Link to="/Signup">Signup</Link></li>
                <li><Link to="/Login">Login</Link></li>
                <li><Link to="/Profile">Profile</Link></li>
                <li><Link to="/Logout">Logout</Link></li>
            </ul>
        </nav>
    )
}
export default Navbar;