// pages/about.js
import Image from 'next/image';
import styles from '../styles/About.module.css';

const About = () => (
    <div className={styles.container}>
        <div className={styles.imageContainer}>
            <Image
                src="/images/about.jpg"
                alt="Elizabeth Wangui"
                width={300}
                height={300}
                className={styles.profileImage}
            />
        </div>
        <div className={styles.textContainer}>
            <h1>About Me</h1>
            <p>
                Hello! I amm Elizabeth Wangui, a passionate web developer with experience in
                building modern web applications. I specialize in frontend development
                with a keen interest in creating visually appealing, user-friendly designs.
                My goal is to blend technology with creativity to produce efficient and
                engaging digital experiences.
            </p>
        </div>
    </div>
);

export default About;
