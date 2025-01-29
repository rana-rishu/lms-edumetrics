import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function CollegePage() {
  const { collegeName } = useParams(); // Get college name from the URL
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const { data } = await axios.get("http://localhost:5000/reviews");
      const filteredReviews = data.filter(
        (review) => review.collegeName === collegeName
      );
      setReviews(filteredReviews);
    };
    fetchReviews();
  }, [collegeName]);

  const averageRating = (field) =>
    reviews.length
      ? (
          reviews.reduce((sum, r) => sum + r[field], 0) / reviews.length
        ).toFixed(1)
      : 0;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">{collegeName}</h2>
      <div className="mb-4">
        <div>Placement: {averageRating("placement")}</div>
        <div>Faculty: {averageRating("faculty")}</div>
        <div>Infrastructure: {averageRating("infrastructure")}</div>
      </div>
      <ul>
        {reviews.map((review, index) => (
          <li key={index} className="border p-2 my-2 rounded">
            <div>Placement: {review.placement}</div>
            <div>Faculty: {review.faculty}</div>
            <div>Infrastructure: {review.infrastructure}</div>
            <p>{review.reviewText}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CollegePage;
