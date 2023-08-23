import { NavLink, useNavigate } from "react-router-dom";
import styles from '../../Stayles/logIn.module.css';
import { motion } from "framer-motion";

const LogIn = () => {

    const navigate = useNavigate()

    return ( 
        <motion.div className={ `${styles.logInContainer}` }
        initial= {{ y:-100}}
        animate = {{ y:0 }}
        transition={{ duration:1,type:'tween',delay:0.5}}
        
        >
            <form onSubmit={ () => navigate( '/gigpawa' ) } className={ styles.logInForm }>
                <h1>LOG IN</h1>
                
                <div className={styles.logInFormInputs}>
                    <span>Email</span>
                    <input className={styles.input} type="email" placeholder='Enter your Email' />
                    <span>Password</span>
                    <input className={styles.input} type="password" placeholder='Enter your GigPawa Password' />
                </div>
                <input className={ styles.submitBtn } type="submit" value="LogIn"

                />
                <div className={styles.fogotNewAccount}>
                    <p>Forgot Password <NavLink to='/reset password' className='text-blue-800'>Password</NavLink> ? </p>
                    <p>Create <NavLink to='/signup' className='text-blue-800' >Account</NavLink>  </p>
                </div>
            </form>
        </motion.div>
     );
}
 
export default LogIn;