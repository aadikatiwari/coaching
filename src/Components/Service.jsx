import React from "react";
import "./Service.css";

import {
  FaChalkboardTeacher,
  FaLaptopCode,
  FaBuilding,
  FaUserGraduate,
  FaProjectDiagram,
  FaCertificate,
} from "react-icons/fa";

const services = [
  {
    icon: <FaChalkboardTeacher />,
    title: "Classroom Training",
    description:
      "Interactive classroom sessions conducted by experienced industry professionals with hands-on practical learning.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Online Training",
    description:
      "Attend live instructor-led online classes from anywhere with lifetime access to recorded sessions.",
  },
  {
    icon: <FaBuilding />,
    title: "Corporate Training",
    description:
      "Customized corporate learning solutions designed to improve employee skills and business productivity.",
  },
  {
    icon: <FaUserGraduate />,
    title: "Placement Assistance",
    description:
      "Resume building, mock interviews, aptitude preparation and job assistance with leading companies.",
  },
  {
    icon: <FaProjectDiagram />,
    title: "Real-Time Projects",
    description:
      "Gain practical experience by working on industry-level real-time projects using modern technologies.",
  },
  {
    icon: <FaCertificate />,
    title: "Certification Programs",
    description:
      "Earn globally recognized certificates after successful completion of training and assessments.",
  },
];

function Service() {
  return (
    <section className="services">

      <div className="service-heading">

        <span>OUR SERVICES</span>

        <h2>
          Learn Skills That Build Your Career
        </h2>

        <p>
          We provide industry-oriented training programs designed to prepare
          students and professionals for successful careers in software and IT.
        </p>

      </div>

      <div className="service-container">

        {services.map((service, index) => (

          <div className="service-card" key={index}>

            <div className="service-icon">
              {service.icon}
            </div>

            <h3>{service.title}</h3>

            <p>{service.description}</p>

            <button>
              Learn More →
            </button>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Service;