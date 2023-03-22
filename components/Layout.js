import { useRouter } from 'next/router';
import Head from 'next/head';
import styles from '../styles/Layout.module.css';
import Footer from './Footer';
import Showcase from './Showcase';
import Header from './Header';

export default function Layout({ title, keywords, description, children }) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description}></meta>
        <meta name='keywords' content={keywords}></meta>
      </Head>
      <Header />
      {(router.pathname = '/' && <Showcase />)}
      <div className={styles.container}>{children}</div>
      <Footer></Footer>
    </div>
  );
}
Layout.defaultProps = {
  title: 'DJ Events find the hottest parties',
  description: 'Find latest dj events',
  keywords: 'edm, music, dj',
};
