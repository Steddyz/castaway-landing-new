import Button from "../Button/Button";
import styles from "./EpisodeItem.module.css";

interface episodeProps {
  id: string;
  title: string;
  description: string;
  img: string;
  optional: string;
}

const EpisodeItem = ({
  id,
  title,
  description,
  img,
  optional,
}: episodeProps) => {
  return (
    <div className={styles.episodeItem}>
      <div className={styles.epicodeImageWrapper}>
        <img src={img} alt={title} className={styles.epicodeImage} />

        <div>
          <div className={styles.episodeOptionalWrapper}>
            <div className={styles.episodeOptional}>{optional}</div>
          </div>
          <div className={styles.episodeTitleWrapper}>
            <div className={styles.episodeTitleId}>{id}</div>
            <div className={styles.episodeTitle}>{title}</div>
          </div>
          <p className={styles.episodeDesc}>{description}</p>
          <Button value={"View Episode Details"} />
        </div>
      </div>
    </div>
  );
};

export default EpisodeItem;
