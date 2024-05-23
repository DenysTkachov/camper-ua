// import React, { useEffect, useState } from "react";
// import Modal from "react-modal";
// import { CarImage } from "../Car/Car.styled";
// import { uid } from "uid";
// import { FeaturesPopUp } from "../FeaturesPopUp/FeaturesPopUp";
// import { ReviewsPopUp } from "../ReviewsPopUp/ReviewsPopUp";
// import { Icon } from "../Icon/Icon";
// import styles from "./Modal.module.css"; 

// const customStyles = {
//   overlay: {
//     position: "fixed",
//     width: "100vw",
//     height: "100vh",
//     padding: "40px 0 40px 0",
//     background: "rgba(0, 0, 0, 0.8)",
//   },

//   content: {
//     position: "relative",
//     width: "982px",
//     height: "700px",
//     margin: "0 auto",
//     top: "0",
//     borderRadius: "4px",
//     outline: "none",
//     padding: "20px 20px 40px 20px",
//   },
// };

// Modal.setAppElement("#root");

// const CarModal = ({ modalIsOpen, closeModal, car }) => {
//   const [showPopUp, setShowPopUp] = useState(false);

//   useEffect(() => {
//     const originalOverflow = document.body.style.overflow;
//     if (modalIsOpen) {
//       const scrollY = window.scrollY;
//       document.body.style.overflow = "hidden";
//       document.body.style.position = "fixed";
//       document.body.style.top = `-${scrollY}px`;
//     } else {
//       const scrollY = parseInt(document.body.style.top || "0");
//       document.body.style.overflow = originalOverflow;
//       document.body.style.position = "";
//       document.body.style.top = "";
//       window.scrollTo(0, scrollY * -1);
//     }

//     return () => {
//       document.body.style.overflow = originalOverflow;
//       document.body.style.position = "";
//       document.body.style.top = "";
//     };
//   }, [modalIsOpen]);

//   return (
//     <Modal
//       isOpen={modalIsOpen}
//       onRequestClose={closeModal}
//       style={customStyles}
//       contentLabel="Car Modal"
//     >
//       <div>
//         <button className={styles.closeModal} onClick={closeModal}>
//           <Icon width={32} height={32} iconId={"close"} />
//         </button>
//         <p className={styles.modalName}>{car.name}</p>
//         <div className={styles.modalLocationAndRating}>
//           <p>
//             {car.rating} <span>{car.reviews.length || 0} Reviews</span>
//           </p>
//           <p>{car.location}</p>
//         </div>
//         <p className={styles.modalPrice}>€{car.price}.00</p>
//         <div className={styles.imagesList}>
//           {car.gallery.map((el) => {
//             return <CarImage className={styles.carImage} $bgImage={el} key={uid()}></CarImage>;
//           })}
//         </div>
//         <p className={styles.modalDescription}>{car.description}</p>
//         <div className={styles.popUpsBtnContainer}>
//           <button
//             onClick={() => setShowPopUp(!showPopUp)}
//             className={`${styles.popupsBtns} ${showPopUp ? "" : styles.isOpen}`}
//           >
//             Features
//           </button>
//           <button
//             onClick={() => setShowPopUp(!showPopUp)}
//             className={`${styles.popupsBtns} ${showPopUp ? styles.isOpen : ""}`}
//           >
//             Reviews
//           </button>
//         </div>
//         {showPopUp ? (
//           <ReviewsPopUp reviews={car.reviews || []} />
//         ) : (
//           <FeaturesPopUp car={car} />
//         )}
//       </div>
//     </Modal>
//   );
// };

// export default CarModal;