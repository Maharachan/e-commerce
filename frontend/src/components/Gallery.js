import React from "react";
import "./Gallery.css";
import img1 from "../assets/5.png"; // Replace with actual image paths
import img2 from "../assets/6.png";
import img3 from "../assets/7.png";
import img4 from "../assets/8.png";
import img5 from "../assets/9.png";
import img6 from "../assets/10.png";
import img7 from "../assets/11.png";
import img8 from "../assets/12.png";

function Gallery() {
  return (
    
    <section className="gallery-container">
        <h2 className="gallery-heading1">Our Gallery</h2>
        <div className="divider1"></div>
      <div className="gallery1-columns">

        <div className="column1">
          <img src={img1} alt="Gallery  1" className="img-small1" />
          <img src={img2} alt="Gallery  2" className="img-small1" />
          <img src={img1} alt="Gallery  1" className="img-small1" />
          <img src={img2} alt="Gallery  2" className="img-small1" />
          <img src={img2} alt="Gallery  2" className="img-small1" />
        </div>
        <div className="column1">
          <img src={img3} alt="Gallery  3" className="img-large1" />
          <img src={img4} alt="Gallery  4" className="img-large1" />
          <img src={img3} alt="Gallery  3" className="img-large1" />
          <img src={img4} alt="Gallery  4" className="img-large1" />
        </div>
        <div className="column1">
          <img src={img5} alt="Gallery  5" className="img-small1" />
          <img src={img6} alt="Gallery  6" className="img-small1" />
          <img src={img1} alt="Gallery  1" className="img-small1" />
          <img src={img2} alt="Gallery  2" className="img-small1" />
          <img src={img2} alt="Gallery  2" className="img-small1" />
        </div>
        <div className="column1">
          <img src={img7} alt="Gallery 7" className="img-large1" />
          <img src={img8} alt="Gallery  8" className="img-large1" />
          <img src={img3} alt="Gallery  3" className="img-large1" />
          <img src={img4} alt="Gallery  4" className="img-large1" />
        </div>
      </div>

      
    </section>
  );
}

export default Gallery;
