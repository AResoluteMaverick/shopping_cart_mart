import styles from './Header.module.css'

export default function Title () {
    return (
        <div className={styles.titleDiv}>
            <h1 className={styles.LogoTitle}>Lux</h1>
        </div>
    )
}