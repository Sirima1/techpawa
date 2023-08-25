import {  NavLink } from "react-router-dom";
import Logo from "../companyLogo/logo";
import styles from "../../Stayles/navBar.module.css"
import { BiMenu } from 'react-icons/bi'

const NavBar = () => {
    
    return ( 
        <div  className={`${ styles.navGenDiv } text-bold bg-blue-950 pt-0 white `}>
            <div className={ styles.navBarContainer }>
                <div className={styles.logo}>
                    <Logo h={ 150 } w={ 170 } />
                </div>
                <div className={ `${ styles.altNavLink } font-semibold` }>
                    <NavLink to="/signup">SignUp</NavLink>
                    <NavLink to="/Login">Log In</NavLink>
                    <BiMenu style={{width: "30px", height:"30px"}} />
                </div>
                <div className={`${ styles.navLinks } text-white`}>
                    <NavLink className='text-white' to="/">Home</NavLink>
                    <NavLink to="/Work">Find Work</NavLink>
                    <NavLink to="/About">About Us</NavLink>
                    <NavLink to="/signup">SignUp</NavLink>
                    <NavLink to="/Login">Log In</NavLink>
                </div>
            </div>
            </div> 
     );
}
 
export default NavBar;