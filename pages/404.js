import { FaExclamationTriangle } from 'react-icons/fa';

import Link from 'next/link';
import Layout from '@/components/Layout';
import styles from '../styles/404.module.css';

export default function NotFoundPage() {
  return (
    <Layout title='page not found'>
      <div className={styles.error}>
        <h1>
          <FaExclamationTriangle /> 404
        </h1>
        <h4>Nothing to see here</h4>
      </div>
      <Link href='/'>Go Home</Link>
    </Layout>
  );
}
