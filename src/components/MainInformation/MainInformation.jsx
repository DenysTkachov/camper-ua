
import './MainInformation.module.css';

const MainInformation = () => {
  return (
    <div className="main-information">
      <header>
        <h1>Welcome to Camper Rentals</h1>
      </header>
      <section className="about-section">
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae orci quis velit commodo convallis.
          Sed sed bibendum leo, id fringilla magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Sed eleifend nisi ut nisi efficitur, non auctor libero lacinia. Donec varius libero
          id turpis finibus, ac ultricies nunc viverra. Praesent id libero eros.
        </p>
      </section>
      <section className="services-section">
        <h2>Our Services</h2>
        <ul>
          <li>Wide selection of campers</li>
          <li>Flexible rental options</li>
          <li>24/7 customer support</li>
        </ul>
      </section>
      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>
          Phone: 123-456-7890<br />
          Email: info@camperrentals.com
        </p>
      </section>
    </div>
  );
}

export default MainInformation;