import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/NamePage.css";
import posterImage from '/images/Screenshot (1134).png';

const NamePage = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return alert("Please enter your name!");
    localStorage.setItem("userName", name);
    navigate("/select");
  };

  return (
    <div className="container">
      {/* Video Background */}
      <video autoPlay loop muted className="video-bg" poster={posterImage}>
  <source src="/video.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

      {/* Form Card */}
      <div className="card">
      <h2 style={{ color: "white" }}>Your Name</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <button> Next → </button>
        </form>
      </div>
    </div>
  );
};

export default NamePage;


