import styles from "./SubscribeForm.module.css";
import Button from "../ui/Button/Button";
import { useState, type FormEvent } from "react";
import Effect3 from "../../assets/effects3.png";

const SubscribeForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setName("");
    setEmail("");
  };

  return (
    <section className={styles.subscribeSection} id="contact">
      <img src={Effect3} alt="effect" className={styles.effect3} />

      <div className={styles.subscribeWrapper}>
        <div>
          <p className={styles.subtitle}>Email Newsletter</p>
          <h4 className={styles.subcribeTitle}>Subscribe for updates</h4>
        </div>
        <div className={styles.formWrapper}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.subscribeFomWrapper}>
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={styles.subscribeInput}
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.subscribeInput}
              />
            </div>
            <Button value="Submit" type="submit" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default SubscribeForm;
