import styles from "./Footer.module.css";
import Logo from "../../assets/Logo.png";
import Inst from "../../assets/inst.png";
import Facebook from "../../assets/facebook.png";
import Twitter from "../../assets/twitter.png";
import { socials } from "../../const/const";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.footerColumn}>
          <a href="#" className={styles.logoWrapper}>
            <img src={Logo} alt="logo" className={styles.logo} />
          </a>
          <a href="#" className={styles.footerSocial}>
            <img src={Inst} alt="instagram" />
          </a>
          <a href="#" className={styles.footerSocial}>
            <img src={Twitter} alt="twitter" />
          </a>
          <a href="#" className={styles.footerSocial}>
            <img src={Facebook} alt="facebook" />
          </a>
        </div>
        <div>
          <ul className={styles.menuList}>
            <li className={styles.menuItem}>Home</li>
            <li className={styles.menuItem}>About</li>
            <li className={styles.menuItem}>Episodes</li>
            <li className={styles.menuItem}>Contact</li>
          </ul>
        </div>
        <div>
          <ul className={styles.menuList}>
            <li className={styles.menuItem}>Style Guide</li>
            <li className={styles.menuItem}>Instructions</li>
            <li className={styles.menuItem}>Changelog</li>
            <li className={styles.menuItem}>Credit</li>
            <li className={styles.menuItem}>Powered by Webflow</li>
            <li className={styles.menuItem}>Licenses</li>
          </ul>
        </div>
        <div>
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
    </footer>
  );
};

export default Footer;
