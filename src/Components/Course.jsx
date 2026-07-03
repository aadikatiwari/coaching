import React, { useState } from "react";
import "./Course.css";
import {
  FaStar,
  FaRegStar,
  FaRegClock,
  FaShareAlt,
  FaSearch,
} from "react-icons/fa";

const courses = [
  {
    title: "Amazon Web Services (AWS)",
    image: "https://cdn-icons-png.flaticon.com/512/873/873107.png",
    color: "linear-gradient(135deg,#ff9800,#f57c00)",
  },
  {
    title: "Manual Testing",
    image: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png",
    color: "linear-gradient(135deg,#33b5c7,#2497a8)",
  },
  {
    title: "Campus Recruitment Training (CRT)",
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135755.png",
    color: "linear-gradient(135deg,#79b36b,#285943)",
  },
  {
    title: "SEO Online Training",
    image: "https://cdn-icons-png.flaticon.com/512/2318/2318286.png",
    color: "linear-gradient(135deg,#ef2020,#a91d22)",
  },
  {
    title: "Unix / Linux",
    image: "https://cdn-icons-png.flaticon.com/512/6124995/6124995.png",
    color: "linear-gradient(135deg,#ff9800,#ff6f00)",
  },
  {
    title: "MuleSoft",
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968875.png",
    color: "linear-gradient(135deg,#2f6eb6,#16b9ea)",
  },
  {
    title: "Data Science & AI",
    image: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png",
    color: "linear-gradient(135deg,#f2b476,#c97b2f)",
  },
  {
    title: "R Programming",
    image: "https://cdn-icons-png.flaticon.com/512/2103/2103665.png",
    color: "linear-gradient(135deg,#7cd67a,#2e8540)",
  },
];

function Course() {
  const [search, setSearch] = useState("");

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="course-section">

      <h1 className="course-heading">Popular Courses</h1>

      {/* Search Bar */}

      <div className="search-box">
        <FaSearch className="search-icon" />

        <input
          type="text"
          placeholder="Search Course..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="course-grid">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course, index) => (
            <div className="course-card" key={index}>

              <div
                className="course-top"
                style={{ background: course.color }}
              >
                <img src={course.image} alt={course.title} />
              </div>

              <div className="course-content">

                <h3>{course.title}</h3>

                <div className="rating">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaRegStar />
                  <span>4.5</span>
                </div>

                <p>
                  <FaRegClock /> Duration : ---
                </p>

                <p>
                  <FaRegClock /> Start Date : Batch Starts Soon
                </p>

              </div>

              <div className="course-footer">

                <button className="enroll-btn">
                  ENROLL
                </button>

                <button className="share-btn">
                  <FaShareAlt /> Share
                </button>

              </div>

            </div>
          ))
        ) : (
          <h2 className="not-found">
            No Course Found
          </h2>
        )}
      </div>

    </section>
  );
}

export default Course;