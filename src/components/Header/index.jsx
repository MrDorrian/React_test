import styles from './Header.module.scss';
import { Link } from "react-router-dom";
export const Header = () => {

  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <img
          src="https://www.squadhelp.com/html/html/static_images/logo.svg"
          alt=""
        />
      </div>
      <div className={styles.signIn}>
        <Link to="/signUp" className={styles.button}>Sign Up</Link>
        <Link to="/signIn" className={styles.button}>Sign In</Link>
      </div>
    </div>
  );
};
