import styles from "./MainInformationContainer.module.css";

const MainInformation = () => {
  return (
    <div className={styles.MainInformationContainer}>
      <div className={styles.GreetingWrapper}>
        <h2 className={styles.Greeting}>
          
Explore the world with Camper-UA - your trusted partner for exhilarating expeditions and outdoor escapades! Embark on unforgettable journeys and create lasting memories as you traverse landscapes and immerse yourself in nature`s wonders. Whether you`re seeking thrilling adventures or serene retreats, Camper-UA has you covered with a wide range of options tailored to your preferences. Get ready to experience the great outdoors like never before with Camper-UA by your side!
        </h2>
      </div>
      <div className={styles.ImageWrapper}></div>
    </div>
  );
};


export default MainInformation;