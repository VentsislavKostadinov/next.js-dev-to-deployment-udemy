import Link from "next/dist/client/link";
import styles from '../styles/Footer.module.scss';

export default function Footer() {
    return (
        <div className={styles.footer}>
        <p>Copyright &copy; DJ Events 2022</p>
        <p className={styles.link}>
            <Link href='/about' >About this Project</Link>
        </p>
        </div>
    )
}