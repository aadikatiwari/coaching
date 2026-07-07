import React from "react";
import "./Footer.css";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaArrowRight,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Company Section */}

        <div className="footer-box">

          <h2 className="footer-logo">
            <span>CODEX</span> Technologies
          </h2>

          <p>
            CODEX Technologies is one of the leading IT Training Institutes
            providing classroom training, online training, internships,
            certifications, real-time projects, and placement assistance.
            Our mission is to make students industry-ready through
            practical learning.
          </p>

        </div>

        {/* Quick Links */}

        <div className="footer-box">

          <h3>Quick Links</h3>

          <ul>

            <li>
              <FaArrowRight />
              <a href="#">Home</a>
            </li>

            <li>
              <FaArrowRight />
              <a href="#">About Us</a>
            </li>

            <li>
              <FaArrowRight />
              <a href="#">Courses</a>
            </li>

            <li>
              <FaArrowRight />
              <a href="#">Services</a>
            </li>

            <li>
              <FaArrowRight />
              <a href="#">Blogs</a>
            </li>

            <li>
              <FaArrowRight />
              <a href="#">Contact Us</a>
            </li>

          </ul>

        </div>

        {/* Popular Courses */}

        <div className="footer-box">

          <h3>Popular Courses</h3>

          <ul>

            <li>
              <FaArrowRight />
              <a href="#">Java Full Stack</a>
            </li>

            <li>
              <FaArrowRight />
              <a href="#">Python Full Stack</a>
            </li>

            <li>
              <FaArrowRight />
              <a href="#">React JS</a>
            </li>

            <li>
              <FaArrowRight />
              <a href="#">AWS Cloud</a>
            </li>

            <li>
              <FaArrowRight />
              <a href="#">Data Science</a>
            </li>

            <li>
              <FaArrowRight />
              <a href="#">DevOps</a>
            </li>

          </ul>

        </div>

        {/* Services */}

        <div className="footer-box">

          <h3>Our Services</h3>

          <ul>

            <li>
              <FaArrowRight />
              <a href="#">Online Training</a>
            </li>

            <li>
              <FaArrowRight />
              <a href="#">Classroom Training</a>
            </li>

            <li>
              <FaArrowRight />
              <a href="#">Corporate Training</a>
            </li>

            <li>
              <FaArrowRight />
              <a href="#">Internships</a>
            </li>

            <li>
              <FaArrowRight />
              <a href="#">Real-Time Projects</a>
            </li>

            <li>
              <FaArrowRight />
              <a href="#">Placement Assistance</a>
            </li>

          </ul>

        </div>

        {/* Contact */}

        <div className="footer-box">

          <h3>Contact Us</h3>

          <div className="contact-item">

            <FaMapMarkerAlt />

            <p>
              123 IT Park,
              Gwalior, Madhya Pradesh,
              India
            </p>

          </div>

          <div className="contact-item">

            <FaPhoneAlt />

            <p>
              +91 9876543210
            </p>

          </div>

          <div className="contact-item">

            <FaEnvelope />

            <p>
              info@codextechnologies.com
            </p>

          </div>
          </div>

</div>

{/* Newsletter Section */}

<div className="newsletter">

  <h3>Subscribe to Our Newsletter</h3>

  <p>
    Get the latest course updates, interview tips, job openings,
    workshops, and technology news directly in your inbox.
  </p>

  <div className="newsletter-box">

    <input
      type="email"
      placeholder="Enter your email address"
    />

    <button>
      Subscribe
    </button>

  </div>

</div>

{/* Social Media */}

<div className="social-media">

  <a href="#">
    <FaFacebookF />
  </a>

  <a href="#">
    <FaInstagram />
  </a>

  <a href="#">
    <FaLinkedinIn />
  </a>

  <a href="#">
    <FaYoutube />
  </a>

</div>

{/* Bottom Footer */}

<div className="footer-bottom">

  <p>
    © {new Date().getFullYear()} CODEX Technologies.
    All Rights Reserved.
  </p>

  <div className="footer-policy">

    <a href="#">Privacy Policy</a>

    <span>|</span>

    <a href="#">Terms & Conditions</a>

  </div>

</div>

</footer>
);
}

export default Footer;