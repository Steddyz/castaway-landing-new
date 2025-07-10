import styles from "./Hero.module.css";
import HeroIcon from "../../assets/HeroIcon.png";
import Effect1 from "../../assets/effects1.png";
import Effect2 from "../../assets/effects2.png";

import { socials } from "../../const/const";

const Hero = () => {
  return (
    <section className={styles.heroSection} id="hero">
      <img src={Effect1} alt="effect" className={styles.effect1} />
      <img src={Effect2} alt="effect" className={styles.effect2} />

      <div>
        <img src={HeroIcon} alt="HeroIcon" className={styles.heroImage} />
      </div>
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>
          Take your podcast to the{" "}
          <span className={styles.nextSpan}>next </span>
          <span className={styles.titleSpan}>level</span>
        </h1>
        <div>
          <p className={styles.subtitle}>Listen on</p>
          <div className={styles.listenOn}>
            {socials.map((icon) => (
              <div key={icon.id}>
                <a href="#" target="_blank">
                  <img
                    src={icon.imgUrl}
                    alt={icon.title}
                    rel="noopener noreferrer"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
