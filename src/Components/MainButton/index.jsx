import styles from './MainButton.module.css';

export default function mainButton({ children, size }) {
    return (
        <button className={`
            ${styles.mainButton}
            ${styles[size]}
        `}>
            {children}
        </button>
    )
}