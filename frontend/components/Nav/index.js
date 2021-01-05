import Link from 'next/link';

import styles from './Nav.module.css';
import utilStyles from '../../styles/utils.module.css';

export default function Nav({ items }) {
  return (
    <div id={styles.navStickyWrapper}>
      <nav id={styles.nav} className={styles.customNav}>
        <ul className={utilStyles.clearfix}>
          {items.map((item) => (
            <li className={!item.visible ? styles.mobile : null}>
              <Link href={`#${item.href}`}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
