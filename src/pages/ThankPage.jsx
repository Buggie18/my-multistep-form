import { useNavigate } from "react-router-dom";
import "../styles/ThankPage.css";
import posterImage from '/images/Screenshot (1136).png';


const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className="thank-container">
      {/* Video Background */}
       <video autoPlay loop muted className="video-bg" poster={posterImage}>
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
