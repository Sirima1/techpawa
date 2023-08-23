import styles from "../../Stayles/logo.module.css";

const Logo = ({w, h}) => {
    return ( 
        <div className={styles.logoContainer} style={{width: `${w}px`, height: `${h}px`}}>
            <h2>Gig</h2>
            <h1>Pawa</h1>
        </div>
     );
}
 
export default Logo;