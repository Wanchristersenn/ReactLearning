import styles from './Header.module.css'
import igniteLogo from '../assets/ignite-icon.svg'

export const Header = () => {
  return (
    <header className={styles.header}>
    <strong > <img src={igniteLogo} alt="ignite-logo" /></strong>
    </header>
  );
};