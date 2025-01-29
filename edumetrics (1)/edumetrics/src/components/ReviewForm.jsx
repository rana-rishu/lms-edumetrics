import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ReviewForm() {
  const [collegeName, setCollegeName] = useState("");
  const [placement, setPlacement] = useState(5);
  const [faculty, setFaculty] = useState(5);
  const [infrastructure, setInfrastructure] = useState(5);
  const [reviewText, setReviewText] = useState("");

  // Sample list of colleges (you can fetch this from the backend if needed)
  const colleges = [
    "Select a College",
    "College A",
    "College B",
    "College C",
    "College D",
  ];
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (collegeName === "Select a College" || collegeName === "") {
      alert("Please select a valid college!");
      return;
    }

    const review = { collegeName, placement, faculty, infrastructure, reviewText };

    try {
      await axios.post("http://localhost:5000/reviews", review);
      alert("Review submitted!");
      setCollegeName("");
      setPlacement(5);
      setFaculty(5);
      setInfrastructure(5);
      setReviewText("");
    } catch (err) {
      console.error(err);
      alert("Error submitting review");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <h2 className="text-xl font-bold mb-4">Submit a Review</h2>

      {/* College Dropdown */}
      <div className="mb-4">
        <label htmlFor="collegeName" className="block font-semibold mb-2">
          Select College:
        </label>
        <select
          id="collegeName"
          value={collegeName}
          onChange={(e) => setCollegeName(e.target.value)}
          className="border rounded w-full p-2"
        >
          {colleges.map((college, index) => (
            <option key={index} value={college}>
              {college}
            </option>
          ))}
        </select>
      </div>

      {/* Placement Rating */}
      <div className="mb-4">
        <label>Placement: {placement}</label>
        <input
          type="range"
          min="1"
          max="5"
          value={placement}
          onChange={(e) => setPlacement(e.target.value)}
        />
      </div>

      {/* Faculty Rating */}
      <div className="mb-4">
        <label>Faculty: {faculty}</label>
        <input
          type="range"
          min="1"
          max="5"
          value={faculty}
          onChange={(e) => setFaculty(e.target.value)}
        />
      </div>

      {/* Infrastructure Rating */}
      <div className="mb-4">
        <label>Infrastructure: {infrastructure}</label>
        <input
          type="range"
          min="1"
          max="5"
          value={infrastructure}
          onChange={(e) => setInfrastructure(e.target.value)}
        />
      </div>

      {/* Review Text */}
      <div className="mb-4">
        <textarea
          placeholder="Write your review"
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          className="w-full border rounded p-2"
        />
      </div>

      {/* Submit Button */}
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Submit
      </button>
      <button className="bg-blue-500 text-white p-2 rounded" onClick={() => navigate(`/CollegePage`)}>
        See Reviews
      </button>

    </form>
  );
}

export default ReviewForm;
