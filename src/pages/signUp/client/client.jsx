import styles from "../../../Stayles/signUp.module.css"
import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ClientSignUp = () => {

    const navigate = useNavigate()

    return ( 
        <div className={styles.jobSeekerContainer}>
                <h2 className='text-xl '>Client SignUp</h2>
            <motion.div className={ styles.formContainer } 
            initial= {{ x:-100 }}
            animate= {{ x:0 }}
            transition={{ type:'tween',duration:3,stiffness:540  }}
            >
                <div className={styles.altLogIn}> 
                    <button>Continue With Google  </button>
                </div>
                <form className={ styles.formInputs }>
                    <div className={ styles.name }>
                        <label >First Name</label>
                        <input type="text" placeholder="e.g Jane"/>
                        <label >Last Name</label>
                        <input type="text" placeholder="e.g mwanika"/>
                    </div>

                    <motion.div className={ styles.otherInputs }
                   
                    
                    >
                        <label className={styles.respo} >First Name</label>
                        <input className={styles.respo} type="text" placeholder="e.g Jane"/>
                        <label className={styles.respo} >Last Name</label>
                        <input className={styles.respo} type="text" placeholder="e.g mwaniki"/>
                        <label>Your Email</label>
                        <input type="email" placeholder="e.g abc@gmail.com" />
                        <label>Phone</label>
                        <input type="number" placeholder="e.g +254....." />
                        <label>Gender</label>
                        <input type="text" placeholder="e.g Male/Female" />
                        <label>Create Password</label>
                        <input type="text" placeholder="Create your password" />
                        <label>Confirm Password</label>
                        <input type="text" placeholder="Confirm password" />
                    </motion.div>

                </form>
                <button onClick={()=> navigate('/create profile')}  className={styles.submitBtn}>Submit & Create Profile</button>
                <p>Have an account? <NavLink to='/login' className='text-blue-800' >Login</NavLink> </p>

            </motion.div>
        </div>
     );
}
 
export default ClientSignUp;