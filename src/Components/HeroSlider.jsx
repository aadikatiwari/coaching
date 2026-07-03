import React, { useState, useEffect } from "react";
import "./HeroSlider.css";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600",
    title: "Become a Full Stack Developer",
    subtitle:
      "Master HTML, CSS, JavaScript, React, Node.js and MongoDB with industry experts.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600",
    title: "Learn from Real Projects",
    subtitle:
      "Build live projects, gain practical experience and become job ready.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1600",
    title: "100% Placement Assistance",
    subtitle:
      "Mock interviews, resume building and career guidance for your dream job.",
  },
];

function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="hero">

      {slides.map((slide, index) => (
        <div
          key={index}
          className={index === current ? "slide active" : "slide"}
          style={{
            backgroundImage: `url(${slide.image})`,
          }}
        >
          <div className="overlay">
            <div className="content">
              <h1>{slide.title}</h1>

              <p>{slide.subtitle}</p>

              <div className="buttons">
                <button className="btn1">Explore Courses</button>

                <button className="btn2">Register Now</button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button className="left" onClick={prevSlide}>
        ❮
      </button>

      <button className="right" onClick={nextSlide}>
        ❯
      </button>

      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={current === index ? "dot activeDot" : "dot"}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>

    </section>
  );
}

export default HeroSlider;