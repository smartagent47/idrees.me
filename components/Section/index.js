import styles from './Section.module.css';

export default function Section({ id, children }) {
  return (
    <section id={id} className={styles.padding}>
      <div className="container">
        <div className="row">{children}</div>
      </div>
    </section>
  );
}
