import MdSchool from 'react-ionicons/lib/MdSchool';
import IosRemove from 'react-ionicons/lib/IosRemove';
import styles from './Education.module.css';
import utilStyles from '../../styles/utils.module.css';
import Section from '../Section';

export default function Education() {
  return (
    <Section id={styles.education}>
      <div className="col-sm-12 text-center">
        <h2 className={utilStyles.bold}>
          <MdSchool fontSize="2rem" />
        </h2>
        <h4
          className={`${utilStyles.customFont} ${utilStyles.headings} text-uppercase ${utilStyles.bold} text-center`}
        >
          University of Mumbai, India
        </h4>
        <IosRemove />
        <p className={utilStyles.customFont}>
          8.07 GPA - Graduation: Summer 2021
        </p>
      </div>
    </Section>
  );
}
