import styles from "./ReviewItem.module.css";
import Star from "../../../assets/star.png";

interface reviewProps {
  title: string;
  name: string;
  id: number;
  starCount: number;
}

const ReviewItem = ({ title, name, starCount }: reviewProps) => {
  return (
    <div className={styles.card}>
      <div>
        {[...Array(5)].map((_, i) => (
          <img
            key={i}
            src={i < starCount ? Star : ""}
            alt={i < starCount ? "Filled star" : "Empty star"}
            className={styles.star}
          />
        ))}
      </div>
      <p className={styles.title}>{title}</p>
      <p className={styles.author}>{name}</p>
    </div>
  );
};

export default ReviewItem;
