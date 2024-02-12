import Rating from "../rating/rating";
import { ReviewProps } from "./reivew.props";
import styles from "./reivew.module.css";
import UserIcon from "./user.svg";
const Review = ({ review }: ReviewProps): JSX.Element => {
  return (
    <div className={styles.review}>
      <UserIcon className={styles.user} />
      <div className={styles.title}>
        <span className={styles.name}>{review.name}</span>
        <span>{review.title}</span>
      </div>

      <div className={styles.rating}>
        <Rating rating={review.rating} />
      </div>

      <div className={styles.description}>{review.description}</div>
    </div>
  );
};

export default Review;
