import PropTypes from 'prop-types';
import { uid } from 'uid';
import styles from './ReviewsPopUp.module.css';
import { Icon } from '../Icon/Icon';
import { FeedbackForm } from '../FeedbackForm/FeedbackForm';

export const ReviewsPopUp = ({ reviews }) => {
  const renderStars = (rating) => {
    const yellowStars = Math.floor(rating);
    const grayStars = 5 - yellowStars;

    const stars = [];
    for (let i = 0; i < yellowStars; i++) {
      stars.push(
        <Icon width={16} height={16} key={`star-${i}`} iconId="star-yellow" />
      );
    }
    for (let i = 0; i < grayStars; i++) {
      stars.push(
        <Icon width={16} height={16} key={`gray-star-${i}`} iconId="star" />
      );
    }
    return stars;
  };

  return (
    <div className={styles.reviewsContainer}>
      <ul className={styles.reviewList}>
        {reviews.map((review) => (
          <li className={styles.review} key={uid()}>
            <div className={styles.reviewHeader}>
              <p className={styles.reviewImageLetter}>
                {review.reviewer_name
                  ? review.reviewer_name.charAt(0).toUpperCase()
                  : 'A'}
              </p>
              <div className={styles.reviewHeaderWrapper}>
                <p className={styles.reviewerName}>
                  {review.reviewer_name ? review.reviewer_name : 'anonim'}
                </p>
                <div className={styles.starsContainer}>
                  {renderStars(review.reviewer_rating)}
                </div>
              </div>
            </div>
            <p className={styles.reviewComment}>{review.comment}</p>
          </li>
        ))}
      </ul>
      <FeedbackForm />
    </div>
  );
};

ReviewsPopUp.propTypes = {
    reviews: PropTypes.arrayOf(
      PropTypes.shape({
        reviewer_name: PropTypes.string,
        reviewer_rating: PropTypes.number.isRequired,
        comment: PropTypes.string.isRequired,
      })
    ).isRequired,
  };
  