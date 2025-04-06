import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/FinalPage.css";

const FinalPage = () => {
  const [paragraph, setParagraph] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/thank"); // Move to the Thank You page
  };

  return (
    <div className="final-container">
      {/* Video Background */}
      <video autoPlay loop muted className="video-bg">
        <source src="/video2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="final-card">
        <final-h2>Care to elaborate? We'd love to hear more!</final-h2>
        <form onSubmit={handleSubmit}>
        <textarea
  placeholder="Write your thoughts here..."
  value={paragraph}
  onChange={(e) => setParagraph(e.target.value)}
  rows="5"
  className="textarea"
/>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default FinalPage;
