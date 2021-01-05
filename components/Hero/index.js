import Image from 'next/image';
import Nav from '../Nav';

import styles from './Hero.module.css';
import utilStyles from '../../styles/utils.module.css';

export default function Hero() {
  return (
    <header
      className={`d-flex w-100 justify-content-center align-items-center mx-auto flex-column ${styles.hero}`}
    >
      <div className={styles.coverContainer}>
        <main role="main" className={`inner ${styles.cover}`}>
          <Image
            src="/images/logo.png"
            width={500}
            height={500}
            layout="responsive"
          />
          <h1 className={styles.coverHeading}>Idrees Dargahwala</h1>
          <hr className={utilStyles.divide} />
          <h5>
            <span className={`${utilStyles.yellow} ${utilStyles.bold}`}>B</span>
            udding {''}
            <span className={`${utilStyles.yellow} ${utilStyles.bold}`}>S</span>
            oftware {''}
            <span className={`${utilStyles.yellow} ${utilStyles.bold}`}>E</span>
            ngineer
          </h5>
          <span className={styles.emoji}>👋</span>
        </main>
      </div>
      <Nav
        items={[
          {
            name: 'About me',
            href: 'about-me',
            visible: true,
          },
          {
            name: 'Education',
            href: 'education',
            visible: true,
          },
          {
            name: 'Experience',
            href: 'experience',
            visible: true,
          },
          {
            name: 'Skills',
            href: 'skills',
            visible: false,
          },
          {
            name: 'Work',
            href: 'work',
            visible: true,
          },
          {
            name: 'Contact',
            href: 'contact',
            visible: false,
          },
        ]}
      />
    </header>
  );
}
