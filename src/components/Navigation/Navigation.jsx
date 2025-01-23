import { Link } from 'react-router-dom'
import styles from './navigation.module.css'

export default function Navigation() {
    return (
        <nav className={styles.container}>
            <Link to='/generate'>Генерировать QR код</Link>
            <Link to='/scan'>Сканировать QR код</Link>
            <Link to='/generateHistory'>История генерирования</Link>
            <Link to='/scanHistory'>История сканирования</Link>
        </nav>
    );
}