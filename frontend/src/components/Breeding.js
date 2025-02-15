import React from "react";
import "./Breeding.css";
import img1 from "../assets/5.png";
import img2 from "../assets/7.png";
import img3 from "../assets/9.png";
import img4 from "../assets/12.png";

const Breeding = () => {
  return (
    <div className="breeding-container">
      <h1 className="breeding-title">Cane Corso Breeding Guide</h1>
      <div className="divider2"></div>
      
      <section className="breeding-section">
        <img src={img1} alt="Healthy Cane Corso" className="breeding-img left" />
        <div>
          <h2>Choosing High-Quality Breeding Stock</h2>
          <p>
            Selecting the right breeding pair is crucial. Both the male and female should undergo 
            health testing to rule out hereditary conditions. A stable and well-socialized temperament 
            ensures that the puppies will be confident and balanced.
          </p>
        </div>
      </section>

      <section className="breeding-section">
        <div>
          <h2>Understanding the Female’s Reproductive Cycle</h2>
          <p>
            A female Cane Corso typically goes into heat twice a year. Watching for signs like 
            behavioral changes and increased affection can help determine the best time for breeding.
          </p>
        </div>
        <img src={img2} alt="Female Cane Corso" className="breeding-img right" />
      </section>

      <section className="breeding-section">
        <img src={img3} alt="Cane Corso Puppies" className="breeding-img left" />
        <div>
          <h2>Pregnancy and Care</h2>
          <p>
            Confirming pregnancy early is important. A nutrient-rich diet, regular veterinary check-ups, 
            and a well-prepared whelping space ensure the mother’s health and a safe delivery.
          </p>
        </div>
      </section>

      <section className="breeding-section">
        <div>
          <h2>Post-Birth Care and Socialization</h2>
          <p>
            After birth, monitoring the puppies for proper feeding and weight gain is essential. 
            Early socialization helps them grow into well-adjusted adults.
          </p>
        </div>
        <img src={img4} alt="Cane Corso Puppies with Mother" className="breeding-img right" />
      </section>

      <section className="breeding-final">
        <h2>Responsible Breeding Practices</h2>
        <p>
          Ethical breeding focuses on improving the breed, not just producing puppies for profit. 
          Avoid overbreeding and always ensure that the puppies are placed in loving homes.
        </p>
      </section>
    </div>
  );
};

export default Breeding;
