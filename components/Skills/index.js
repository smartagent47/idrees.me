import IosConstruct from 'react-ionicons/lib/IosConstruct';
import styles from './Skills.module.css';
import utilStyles from '../../styles/utils.module.css';
import Section from '../Section';
import data from '../../data/index.json'

export default function Skills() {
  return (
    <Section id={styles.education}>
      <div className="col-sm-12 text-center">
        <h2 className={utilStyles.bold}>
          <IosConstruct fontSize="2rem" />
        </h2>
        <h6
          className={`${utilStyles.customFont} text-uppercase ${utilStyles.bold} text-center mt-3`}
        >
          {data.skills.map(skill => (
              <span style={{marginRight: '5px'}}><span className={utilStyles.dot}></span>{skill}</span>
          ))}
        </h6>
      </div>
    </Section>
  );
}