import Layout from "../components/Layout";
import styles from "../styles/404.module.scss";
import Link from "next/link";
import { FaExclamationTriangle } from "react-icons/fa";

export default function NotFoundPage() {
  return (
    <Layout title="Page not found">
      <div className={styles.error}>
        <h1>
          <FaExclamationTriangle />
          404
        </h1>
        <h4>Sorry, there is nothing here</h4>
        <Link href="/">Go Back</Link>
      </div>
    </Layout>
  );
}