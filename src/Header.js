import {NavLink} from "react-router-dom";
import wingImage from "./img/wing.png"
const Header=()=>{
    const wing= {
        width: "60px",
        height: "60px",
      };
    return(
        <>
            <header>
                <img src={wingImage} style={wing} alt="logo"/>
                <nav>
                    <ul Style="list-style-type:none;">
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard">Dashboard</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
export default Header;