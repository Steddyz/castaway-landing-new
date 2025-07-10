import { reviewData } from "../../const/const";
import ReviewItem from "../ui/ReviewItem/ReviewItem";

import styles from "./Reviews.module.css";

const Reviews = () => {
  return (
    <section className={styles.reviewSection}>
      <div className={styles.reviewContainer}>
        {reviewData.map((review) => (
          <ReviewItem
            title={review.title}
            name={review.name}
            id={review.id}
            starCount={review.starCount}
          />
        ))}
      </div>
    </section>
  );
};

export default Reviews;
