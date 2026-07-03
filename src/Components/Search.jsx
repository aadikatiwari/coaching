import React, { useState } from "react";
import "./Search.css";
import {
  FaSearch,
  FaLaptopCode,
  FaDatabase,
  FaCloud,
  FaMobileAlt,
  FaRobot,
  FaCode,
} from "react-icons/fa";

const courses = [
  {
    name: "React JS",
    category: "Frontend",
    icon: <FaLaptopCode />,
  },
  {
    name: "Angular",
    category: "Frontend",
    icon: <FaCode />,
  },
  {
    name: "Vue JS",
    category: "Frontend",
    icon: <FaCode />,
  },
  {
    name: "Java Full Stack",
    category: "Full Stack",
    icon: <FaLaptopCode />,
  },
  {
    name: "Python Full Stack",
    category: "Full Stack",
    icon: <FaLaptopCode />,
  },
  {
    name: "AWS",
    category: "Cloud",
    icon: <FaCloud />,
  },
  {
    name: "Microsoft Azure",
    category: "Cloud",
    icon: <FaCloud />,
  },
  {
    name: "DevOps",
    category: "Cloud",
    icon: <FaCloud />,
  },
  {
    name: "Data Science",
    category: "AI",
    icon: <FaDatabase />,
  },
  {
    name: "Machine Learning",
    category: "AI",
    icon: <FaRobot />,
  },
  {
    name: "Artificial Intelligence",
    category: "AI",
    icon: <FaRobot />,
  },
  {
    name: "Android",
    category: "Mobile",
    icon: <FaMobileAlt />,
  },
  {
    name: "Flutter",
    category: "Mobile",
    icon: <FaMobileAlt />,
  },
];

function Search() {
  const [search, setSearch] = useState("");

  const filteredCourses = courses.filter((course) =>
    course.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="search-section">

      <div className="search-container">

        <h1>
          Find Your <span>Dream Course</span>
        </h1>

        <p>
          Search from our professional courses and start learning with
          experienced trainers.
        </p>

        <div className="search-box">

          <input
            type="text"
            placeholder="Search courses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button>
            <FaSearch />
            Search
          </button>

        </div>

        {search !== "" && (
          <div className="search-results">

            {filteredCourses.length > 0 ? (
              filteredCourses.map((course, index) => (
                <div className="course-item" key={index}>

                  <div className="course-icon">
                    {course.icon}
                  </div>

                  <div>
                    <h3>{course.name}</h3>
                    <p>{course.category}</p>
                  </div>

                </div>
              ))
            ) : (
              <div className="no-course">
                No Course Found
              </div>
            )}

          </div>
        )}

      </div>
    </section>
  );
}

export default Search;