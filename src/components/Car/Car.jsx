
import { useDispatch } from "react-redux";
import { useState } from "react";
import PropTypes from 'prop-types';
import { toggleFavourite } from "../../redux/cars/carsSlice";
import { useIsFavourite } from "../../hooks/useIsFavourite";
import { Icon } from "../Icon/Icon.jsx";
import { CarModal } from "../CarModal/CarModal.jsx";
import { Details } from "../Details/Details";
import { Detail } from "../Details/Detail";
import styles from "./Car.module.css";


export const Car = ({ car, hidden }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const toogleFavouriteCar = (id) => {
    dispatch(toggleFavourite(id));
  };

  const isFavourite = useIsFavourite(car._id);

  return (
    <li className={`${styles.carItem} ${hidden ? styles.hidden : ""} ${styles.fadeIn}`}>
      <div
        className={styles.carImage}
        style={{
          backgroundImage: `url(${
            car.gallery[0] ||
            "https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg"
          })`,
        }}
      ></div>
      <div>
        <div className={styles.headInfocontainer}>
          <p className={styles.headName}>{car.name}</p>
          <div className={styles.priceContainer}>
            <p className={styles.headInfo}>€{car.price}.00</p>
            <button
              className={styles.favouriteButton}
              onClick={() => toogleFavouriteCar(car._id)}
            >
              <Icon
                width={24}
                height={24}
                iconId={isFavourite ? "heart-red" : "heart"}
              />
            </button>
          </div>
        </div>
        <div className={styles.locationAndRating}>
          <div className={styles.reviewsAndStarContainer}>
            <Icon width={16} height={16} iconId={"star-yellow"} />
            <p>{car.rating}</p>
            <span>{car.reviews.length || 0} Reviews</span>
          </div>
          <p>{car.location}</p>
        </div>
        <p className={styles.description}>{car.description}</p>
        <div className={styles.tagsContainer}>
          <Detail detail={"adults"} value={car.adults} iconId={"people"} />
          <Detail detail={car.transmission} value={""} iconId={"automatic"} />
          <Details details={car.details} />
        </div>
        <button className={styles.showMoreBtn} onClick={openModal}>Show more</button>
      </div>
      <CarModal modalIsOpen={modalIsOpen} closeModal={closeModal} car={car} />
    </li>
  );
};


Car.propTypes = {
  car: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    gallery: PropTypes.arrayOf(PropTypes.string),
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number,
    reviews: PropTypes.arrayOf(PropTypes.object),
    location: PropTypes.string,
    description: PropTypes.string,
    adults: PropTypes.number,
    transmission: PropTypes.string,
    details: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  hidden: PropTypes.bool,
};



// export default Car;