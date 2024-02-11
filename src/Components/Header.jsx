// ------easy to ginerate the start code using (rfce)

import "./Header.css";
import "./General.css";
import img from "../assets/profile-img.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from "react-router-dom";


function Header() {
    return(
        // <!-- -----------header------------------ -->
    
        <header id="header">

            <div className="flex-column d-flex">
                <div className="profile">
                    <img src={img} alt="" />
                    <h1>donor name</h1>
                </div>
                 {/* <!-- -------------------navbar--------- -->  */}
                <nav className="navbar">
                    <ul>
                        <li>
                            <NavLink  to="/donorName"><FontAwesomeIcon icon="fa-solid fa-house" className="color" /><span>Home</span></NavLink>
                        </li>
                        <li>
                            <NavLink to="/about"><FontAwesomeIcon icon="fa-solid fa-user" className="color" />
                                <span>About</span></NavLink>
                        </li>
                        <li>
                            <NavLink to="/healthStatus"><FontAwesomeIcon icon="fa-solid fa-file" className="color" /><span>Health
                                    Status</span></NavLink>
                        </li>
                        <li>
                            <NavLink to="/donationDate"><FontAwesomeIcon icon="fa-solid fa-calendar-days" className="color" />
                                <span>donation date</span></NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    

    )
}

export default Header;
