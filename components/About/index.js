import Image from 'next/image';
import Link from 'next/link';
import LogoGithub from 'react-ionicons/lib/LogoGithub';
import LogoLinkedin from 'react-ionicons/lib/LogoLinkedin';
import LogoTwitter from 'react-ionicons/lib/LogoTwitter';

import Section from '../Section';

import styles from './About.module.css';
import utilStyles from '../../styles/utils.module.css';

export default function About() {
  const iconStyle = {
    marginRight: '5px',
    cursor: 'pointer',
  };

  return (
    <Section id={styles.aboutMe}>
      <div className="col-sm">
        <div className={styles.aboutImage}>
          <Image src="/images/me.jpg" alt="It's me!" width={300} height={444} />
        </div>
      </div>
      <div className="col-sm">
        <div className={styles.aboutWrapText}>
          <h6 class={utilStyles.customFont}>
            <span className={`${utilStyles.bold} ${utilStyles.headings}`}>
              Hey, it's me
            </span>
          </h6>
          <p>
            I am passionate about building amazing software. I've built APIs,
            managed databases, written scripts and even configured servers. If
            you are interested, you can view some good {''}
            <Link
              href="#work"
              as="work"
              className={`${utilStyles.bold} ${utilStyles.underlineBlack}`}
            >
              <u>work</u>
            </Link>{' '}
            down below.
          </p>
          <p>
            Need something built or simply want to have chat? Reach out to me on
            social media or send me an {''}
            <Link
              className={`${utilStyles.bold} ${utilStyles.underlineBlack}`}
              href="mailto:&#105;&#100;&#114;&#101;&#101;&#115;&#46;&#121;&#100;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;"
            >
              email.
            </Link>
          </p>
          <div className={styles.icons}>
            <Link
              href="https://github.com/theIYD"
              target="_blank"
              className="mr-2"
            >
              <LogoGithub fontSize="1.5rem" style={iconStyle} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/idrees-dargahwala/"
              target="_blank"
              className="mr-2"
            >
              <LogoLinkedin fontSize="1.5rem" style={iconStyle} />
            </Link>
            <Link
              href="https://twitter.com/theIYD"
              target="_blank"
              className="mr-2"
            >
              <LogoTwitter fontSize="1.5rem" style={iconStyle} />
            </Link>
          </div>
          <hr />
          <h6 className={utilStyles.customFont}>
            <span className={`${utilStyles.bold} ${utilStyles.headings}`}>
              My Interests
            </span>
          </h6>
          <p>
            When I'm off work, I enjoy spending my time doing any of the
            following:
          </p>
          <ul className={utilStyles.customUl}>
            <li>
              <span className={utilStyles.dotBlack}></span> I love reading
              books; 📖
            </li>
            <li>
              <span className={utilStyles.dotBlack}></span> I am watching a
              movie or a series online; 📺
            </li>
            <li>
              <span className={utilStyles.dotBlack}></span> Playing games on my
              console; 🎮
            </li>
            <li>
              <span className={utilStyles.dotBlack}></span> And I'm
              <span className={utilStyles.bold}> networking</span> with new
              people around and learning various things. 🙋‍♂️
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
