import React, { useState } from "react";
import "./Domains.css";

import {
  FaSearch,
  FaLaptopCode,
  FaCode,
  FaServer,
  FaCloud,
  FaDatabase,
  FaMobileAlt,
  FaRobot,
  FaShieldAlt,
  FaNetworkWired,
  FaPaintBrush,
  FaProjectDiagram,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

function Domains() {
  const [search, setSearch] = useState("");
  const [showMore, setShowMore] = useState(false);

  const domains = [
    {
      title: "Full Stack Development",
      icon: <FaLaptopCode />,
      courses: "25+ Courses",
      color: "#4CAF50",
    },
    {
      title: "Frontend Development",
      icon: <FaCode />,
      courses: "18+ Courses",
      color: "#2196F3",
    },
    {
      title: "Backend Development",
      icon: <FaServer />,
      courses: "20+ Courses",
      color: "#9C27B0",
    },
    {
      title: "Cloud Computing",
      icon: <FaCloud />,
      courses: "15+ Courses",
      color: "#03A9F4",
    },
    {
      title: "Data Science",
      icon: <FaDatabase />,
      courses: "12+ Courses",
      color: "#009688",
    },
    {
      title: "Mobile App Development",
      icon: <FaMobileAlt />,
      courses: "16+ Courses",
      color: "#FF9800",
    },
    {
      title: "Artificial Intelligence",
      icon: <FaRobot />,
      courses: "10+ Courses",
      color: "#E91E63",
    },
    {
      title: "Cyber Security",
      icon: <FaShieldAlt />,
      courses: "14+ Courses",
      color: "#F44336",
    },
    {
      title: "Networking",
      icon: <FaNetworkWired />,
      courses: "9+ Courses",
      color: "#3F51B5",
    },
    {
      title: "UI / UX Design",
      icon: <FaPaintBrush />,
      courses: "8+ Courses",
      color: "#795548",
    },
    {
      title: "DevOps",
      icon: <FaProjectDiagram />,
      courses: "11+ Courses",
      color: "#607D8B",
    },
    {
      title: "Software Testing",
      icon: <FaLaptopCode />,
      courses: "13+ Courses",
      color: "#8BC34A",
    },
  ];

  const extraDomains = [
    "AWS",
    "Microsoft Azure",
    "Google Cloud",
    "Salesforce",
    "Blockchain",
    "Machine Learning",
    "Deep Learning",
    "Power BI",
    "Tableau",
    "Linux Administration",
    "Docker",
    "Kubernetes",
  ];

  const filteredDomains = domains.filter((domain) =>
    domain.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="domains">

      <div className="domains-header">

        <h5>TECHNOLOGY DOMAINS</h5>

        <h2>
          Explore Our
          <span> Learning Domains</span>
        </h2>

        <p>
          Choose your preferred technology domain and start learning with
          industry experts through practical projects and hands-on sessions.
        </p>

      </div>

      <div className="domain-search">

        <FaSearch className="search-icon" />

        <input
          type="text"
          placeholder="Search technology domain..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      <div className="domains-grid">

        {filteredDomains.length > 0 ? (
          filteredDomains.map((domain, index) => (
            <div className="domain-card" key={index}>

              <div
                className="domain-icon"
                style={{ background: domain.color }}
              >
                {domain.icon}
              </div>

              <h3>{domain.title}</h3>

              <p>{domain.courses}</p>

              <button className="domain-btn">
                Explore Courses
              </button>

            </div>
          ))
        ) : (
          <div className="no-domain">
            <h3>No Domain Found</h3>
          </div>
        )}

      </div>

      <div className="more-domain-section">

        <button
          className="explore-domain-btn"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? (
            <>
              Show Less <FaChevronUp />
            </>
          ) : (
            <>
              Explore More Domains <FaChevronDown />
            </>
          )}
        </button>

        {showMore && (

          <div className="extra-domains">

            {extraDomains.map((item, index) => (

              <div className="extra-domain-card" key={index}>
                {item}
              </div>

            ))}

          </div>

        )}

      </div>

    </section>
  );
}

export default Domains;