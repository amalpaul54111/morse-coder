import styles from "./Header.module.css"
import github_logo from "./github_logo.png"

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.title}>
                Morse Coder
            </div>
            <div className={styles.github_logo}>
                <img src={github_logo} className={styles.github_logo}/>
            </div>
        </header>
    );
}

export default Header;