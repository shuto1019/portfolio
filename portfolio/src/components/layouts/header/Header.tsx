import styles from "./header.module.css";

console.log(styles);

function Header(){
    return(
        <header className={styles.header}>
            <nav className={styles.header__nav}>
                <ul className={styles.header__list}>
                <li className={styles.header__item}>
                    <a href="#services" className={styles.header__link}>Services</a>
                </li>
                <li className={styles.header__item}>
                    <a href="#projects" className={styles.header__link}>Projects</a>
                </li>
                <li className={styles.header__item}>
                    <a href="#about" className={styles.header__link}>About</a>
                </li>
                <li className={styles.header__item}>
                    <a href="#contact" className={styles.header__link}>Contact</a>
                </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;