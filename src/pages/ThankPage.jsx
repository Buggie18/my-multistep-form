import { useNavigate } from "react-router-dom";
import "../styles/ThankPage.css";

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className="thank-container">
      {/* Video Background */}
      <video autoPlay loop muted className="video-bg">
        <source src="/video3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="thank-card">
        <h2>Thank You!</h2>
        <p >Your response has been recorded!</p>
      </div>
    </div>
  );
};

export default ThankYou;
