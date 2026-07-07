import React, { useState } from "react";
import "./Blogs.css";

import {
  FaCalendarAlt,
  FaUser,
  FaArrowRight,
  FaSearch,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

function Blogs() {
  const [search, setSearch] = useState("");
  const [showMore, setShowMore] = useState(false);

  const blogs = [
    {
      id: 1,
      title: "Top 10 Skills Every Full Stack Developer Should Learn in 2026",
      category: "Web Development",
      author: "Codex Team",
      date: "July 5, 2026",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
      description:
        "Discover the latest technologies and skills every full stack developer should master to build a successful IT career.",
    },

    {
      id: 2,
      title: "Why React JS is Still the Most Popular Frontend Framework",
      category: "React JS",
      author: "John Smith",
      date: "July 2, 2026",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
      description:
        "React continues to dominate frontend development. Learn why companies still prefer React for modern applications.",
    },

    {
      id: 3,
      title: "Career Opportunities in Artificial Intelligence",
      category: "Artificial Intelligence",
      author: "Sarah Johnson",
      date: "June 28, 2026",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
      description:
        "AI is transforming every industry. Explore career paths, salaries, and required skills for AI professionals.",
    },

    {
      id: 4,
      title: "AWS vs Azure vs Google Cloud",
      category: "Cloud Computing",
      author: "Cloud Expert",
      date: "June 25, 2026",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
      description:
        "Confused about choosing a cloud platform? Here's a detailed comparison between AWS, Azure and GCP.",
    },

    {
      id: 5,
      title: "How to Crack Your First Software Interview",
      category: "Career",
      author: "Placement Team",
      date: "June 20, 2026",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800",
      description:
        "Resume tips, interview questions, communication skills and coding preparation to help you land your dream job.",
    },

    {
      id: 6,
      title: "Top Programming Languages to Learn in 2026",
      category: "Programming",
      author: "Codex Faculty",
      date: "June 18, 2026",
      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800",
      description:
        "Python, Java, JavaScript, Go or Rust? Learn which programming languages are most in demand.",
    },
  ];

  const extraBlogs = [
    "Complete Java Interview Guide",
    "Python Projects for Beginners",
    "Machine Learning Roadmap",
    "Docker & Kubernetes Tutorial",
    "DevOps Career Guide",
    "Cyber Security Essentials",
    "Blockchain for Beginners",
    "UI/UX Design Principles",
  ];

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="blogs">

      <div className="blogs-heading">

        <h5>OUR BLOGS</h5>

        <h2>
          Latest Articles &
          <span> Career Insights</span>
        </h2>

        <p>
          Read the latest technology blogs, interview tips,
          career guidance and programming tutorials from
          industry experts.
        </p>

      </div>

      <div className="blog-search">

        <FaSearch className="search-icon"/>

        <input
          type="text"
          placeholder="Search Blog..."
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
        />

      </div>

      <div className="blog-grid">

        {filteredBlogs.length > 0 ? (

          filteredBlogs.map((blog)=>(

            <div className="blog-card" key={blog.id}>

              <img
                src={blog.image}
                alt={blog.title}
              />

              <div className="blog-content">

                <span className="category">
                  {blog.category}
                </span>

                <h3>{blog.title}</h3>

                <div className="blog-info">

                  <span>
                    <FaUser/>
                    {blog.author}
                  </span>

                  <span>
                    <FaCalendarAlt/>
                    {blog.date}
                  </span>

                </div>

                <p>
                  {blog.description}
                </p>

                <button className="read-btn">

                  Read More

                  <FaArrowRight/>

                </button>

              </div>

            </div>

          ))

        ) : (

          <div className="no-blog">

            <h2>No Blog Found</h2>

          </div>

        )}

      </div>
      <div className="explore-blogs">

<button
  className="explore-btn"
  onClick={() => setShowMore(!showMore)}
>
  {showMore ? (
    <>
      Show Less <FaChevronUp />
    </>
  ) : (
    <>
      Explore More Blogs <FaChevronDown />
    </>
  )}
</button>

{showMore && (

  <div className="more-blogs">

    {extraBlogs.map((blog, index) => (

      <div className="more-blog-card" key={index}>

        <div className="more-blog-content">

          <h4>{blog}</h4>

          <p>
            Learn industry best practices, practical concepts,
            interview preparation, and real-world project ideas
            from our expert trainers.
          </p>

          <button className="small-read-btn">
            Read Article
            <FaArrowRight />
          </button>

        </div>

      </div>

    ))}

  </div>

)}

</div>

</section>
);
}

export default Blogs;