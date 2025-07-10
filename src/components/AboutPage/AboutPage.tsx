import styles from "./AboutPage.module.css";
import AboutImage from "../../assets/AboutImage.png";
import Arrow from "../../assets/arrow.png";

const AboutPage = () => {
  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.aboutWrapper}>
        <div>
          <a href="#" className={styles.arrowWrapper}>
            <img src={Arrow} alt="arrow" className={styles.arrowImage} />
          </a>
          <p className={styles.subtitle}>Meet your host</p>
          <h1 className={styles.aboutTitle}>Jacob Paulaner</h1>
          <p className={styles.aboutDesc}>
            Jacob has a background in audio engineering, and has been podcasting
            since the early days.
          </p>
          <p className={styles.aboutDesc}>
            He&apos;s here to help you level up your game by sharing everything
            he&apos;s learned along the way.
          </p>
        </div>
        <div>
          <img
            src={AboutImage}
            alt="about image"
            className={styles.aboutImage}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
