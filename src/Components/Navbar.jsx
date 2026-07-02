import React from "react";
import "./Navbar.css";

function Navbar() {
  const menuItems = [
    {
      title: "Courses",
      submenu: [
        "All Courses",
        "Full Stack Courses",
        "Nasscom Courses",
        "Job Assistance Courses",
        "Certification Courses",
        "Trending Courses",
        "Internships",
      ],
    },
    {
      title: "Services",
      submenu: [
        "Classroom Training",
        "Online Training",
        "Weekend Training",
        "Workshops",
        "Real-Time Projects",
        "Internships",
        "Corporate Training",
      ],
    },
    {
      title: "Training",
      submenu: [
        "New Batches",
        "Interview Questions",
        "Blog",
        "Placement Registration",
        "Job Assistance",
      ],
    },
    {
      title: "About",
      submenu: [
        "About Codex Technologies",
        "Trainers Profile",
        "Our Theme",
        "Careers",
        "Testimonials",
        "News & Events",
      ],
    },
    {
      title: "Contact",
      submenu: [],
    },
  ];

  return (
    <nav className="navbar">
      <div className="logo">
        <span>CODEX</span> Technologies
      </div>

      <ul className="nav-menu">
        {menuItems.map((menu, index) => (
          <li key={index} className="nav-item">
            <a href="#">{menu.title}</a>

            {menu.submenu.length > 0 && (
              <ul className="dropdown">
                {menu.submenu.map((item, i) => (
                  <li key={i}>
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      <div className="buttons">
        <button className="login">Login</button>
        <button className="signup">Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbar;