import { useSelector } from "react-redux";
import { selectFilteredCars } from "../../redux/cars/carsSelectors";
import { Car } from "../Car/Car";
import styles from "./CatalogCampers.module.css";
import { useState } from "react";

const CatalogCampers = () => {
  const [visibleCars, setVisibleCars] = useState(4);
  const filteredCars = useSelector(selectFilteredCars);

  const loadMore = () => {
    setVisibleCars((prevVisibleCars) => prevVisibleCars + 4);
  };

  const allCarsDisplayed = visibleCars >= filteredCars.length;

  return (
    <div className={styles.ListContainer}>
      <ul className={styles.CarList}>
        {filteredCars.map((car, index) => (
          <Car key={car.id} car={car.car} hidden={index >= visibleCars} />
        ))}
      </ul>
      {!allCarsDisplayed && (
        <button
          className={styles.LoadMore}
          onClick={loadMore}
          disabled={allCarsDisplayed}
        >
          Load more
        </button>
      )}
    </div>
  );
}; 


export default CatalogCampers