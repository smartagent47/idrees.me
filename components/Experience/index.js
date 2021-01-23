import MdArrowRoundForward from 'react-ionicons/lib/MdArrowRoundForward';
import MdFolder from 'react-ionicons/lib/MdFolder';

import data from '../../data/index.json';
import Section from '../Section';
import utilStyles from '../../styles/utils.module.css';
import styles from './Experience.module.css';

export default function Experience() {
  return (
    <Section>
      <h4
          className={`${utilStyles.customFont} ${utilStyles.headings} text-uppercase ${utilStyles.bold} text-center mt-2`}
        >
          Work
        </h4>
      <div className={`${styles.cards} mt-5`}>
      {data.experience.map((exp, index) => (
        <div key={index} className="d-flex align-items-center justify-content-center card shadow rounded border-0 py-4">
          <div className="card-body">
            <h5
              className={`${utilStyles.customFont} text-uppercase ${utilStyles.bold} ${utilStyles.headings}`}
            >
              {exp.title}
            </h5>
            <ul className={utilStyles.customUl}>
              {exp.content.map((text) => (
                <li>
                  <MdArrowRoundForward /> {text}
                </li>
              ))}
            </ul>
            <span
              className={`${utilStyles.customFont} text-uppercase ${utilStyles.color444}`}
            >
              {exp.name}
            </span>
            <span> | </span>
            <span className={`${utilStyles.customFont} text-uppercase`}>
              {exp.date}
            </span>
          </div>
        </div>
    ))}
      </div>
    </Section>
  );
}
