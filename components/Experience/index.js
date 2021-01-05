import Slider from 'react-slick';
import Image from 'next/image';
import MdArrowRoundForward from 'react-ionicons/lib/MdArrowRoundForward';

import data from '../../data/index.json';
import Section from '../Section';
import utilStyles from '../../styles/utils.module.css';
import styles from './Experience.module.css';

export default function Experience() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Section>
      <Slider {...settings}>
        {data.experience.map((exp) => (
          <div className={`row ${styles.customSlider}`}>
            <div className="col-sm-6 text-center d-flex align-items-center justify-content-center">
              <Image
                width={exp.image.width}
                height={exp.image.height}
                src={exp.image.url}
                alt={exp.image.altText}
              />
            </div>
            <div className="col-sm-6 d-flex align-items-center justify-content-center">
              <div>
                <h5
                  className={`${utilStyles.customFont} text-uppercase ${utilStyles.bold} ${utilStyles.headings}`}
                >
                  🚀 {exp.title}
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
          </div>
        ))}
        {/* <div>
          <div className="col-sm text-center">
            <Image
              width={444}
              height={444}
              src="/images/interns.jpg"
              alt="Interns"
            />
          </div>
          <div className="col-sm">
            <h5 className="custom-font text-uppercase bold headings">
              🚀 Software Engineering Intern
            </h5>
          </div>
        </div>

        <div>
          <div className="col-sm text-center">
            <Image
              width={444}
              height={444}
              src="/images/interns.jpg"
              alt="Interns"
            />
          </div>
        </div> */}
      </Slider>
    </Section>
  );
}
