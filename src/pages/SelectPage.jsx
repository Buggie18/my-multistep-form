import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase"; // Import Firestore instance
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; // Firestore functions
import "../styles/SelectPage.css";
import posterImage from '/images/Screenshot (1135).png';

const options = [
  { label: "Excited", emoji: "🤩" },
  { label: "Happy", emoji: "😄" },
  { label: "Angry", emoji: "😡" },
  { label: "Sad", emoji: "😔" },
];

const SelectPage = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedEmoji, setSelectedEmoji] = useState(null); // Store emoji
  const [error, setError] = useState(""); // Error state
  const navigate = useNavigate();

  const handleSelect = (option, emoji) => {
    setSelectedOption(option);
    setSelectedEmoji(emoji); // Set emoji
    setError(""); // Clear error when user selects an option
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedOption) {
      setError("Please select an option before proceeding!");
      return;
    }

    try {
      // Store only the selected option and timestamp in Firebase
      await addDoc(collection(db, "votes"), {
        selection: selectedOption,
        timestamp: serverTimestamp(),
      });

      navigate("/final"); // Move to the next page
    } catch (error) {
      console.error("Error submitting selection:", error);
      setError("Something went wrong! Try again.");
    }
  };

  return (
    <div className="select-container">
    <video autoPlay loop muted className="video-bg" poster={posterImage}>
      <source src="/video1.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
      <div className="select-card">
        <select-h2>How are you feeling today?</select-h2>

        {selectedEmoji && (
  <div className={`emoji-display ${selectedEmoji ? "show" : ""}`}>
    {selectedEmoji}
  </div>
)}
        <form onSubmit={handleSubmit}>
          <div className="options">
            {options.map((option, index) => (
              <button
                type="button"
                key={index}
                className={`option-btn ${selectedOption === option.label ? "selected" : ""}`}
                onClick={() => handleSelect(option.label, option.emoji)}
              >
                {option.label}
              </button>
            ))}
          </div>
          {error && <p className="error">{error}</p>} {/* Display error message */}
          <button type="submit" className="next-btn">
            Next →
          </button>
        </form>
      </div>
    </div>
  );
};

export default SelectPage;
