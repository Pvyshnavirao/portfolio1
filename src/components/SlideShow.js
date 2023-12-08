import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const SlideShow = () => {
  useEffect(() => {}, []);

  return (
    <>
      <div
        id="carouselExample"
        className="carousel slide"
        data-bs-ride="carousel"
        style={{ maxWidth: "600px", margin: "auto" }}
      >
        <div className="carousel-inner">
         
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="d-block w-100"
              alt="Slide 2"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.slu.edu/library/services/academic-technology-commons/_img/academic-technology-commons-01.jpg"
              className="d-block w-100"
              alt="Slide 3"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://excelerateuserprofile.s3.ap-south-1.amazonaws.com/university_images/SLU.png"
              className="d-block w-100"
              alt="Slide 4"
            />
          </div>
          <div className="carousel-item active">
            <img
              src="data:image/jpeg;base64,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"
              className="d-block w-100"
              alt="Slide 1"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default SlideShow;