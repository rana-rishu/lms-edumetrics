import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ReviewDashboard() {
  const [reviews, setReviews] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchReviews = async () => {
      const { data } = await axios.get("http://localhost:5000/reviews");
      setReviews(data);
    };
    fetchReviews();
  }, []);

  // Extract unique colleges from reviews
  const colleges = [...new Set(reviews.map((review) => review.collegeName))];

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Dashboard</h2>
      <ul>
        {colleges.map((college, index) => (
          <li key={index} className="mb-4">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => navigate(`/college/${college}`)}
            >
              {college}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReviewDashboard;
