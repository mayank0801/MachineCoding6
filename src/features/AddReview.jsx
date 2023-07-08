import { useContext, useState } from "react";

// import { AiOutlineCloseCircle } from "react-icons/ai";
import { DataContext } from "../Context/DataContext";
import "./AddReview.css";
export default function AddReview({ restaurantID, setModal }) {
  const { dispatch } = useContext(DataContext);
  const imgURL =
    "https://img.lovepik.com/original_origin_pic/18/07/25/48a1950bd8aa5758b0ff76e95e2fe9e5.png_wh300.png";
  const [reviewData, setReviewData] = useState({
    pp: imgURL,
    revName: "Mayank",
    comment: "",
    rating: ""
  });

  const onSubmit = () => {
    dispatch({
      type: "ADD_REVIEW",
      payload: { restaurantID: restaurantID, review: { ...reviewData } }
    });
    setReviewData({
      pp: "",
      revName: "Mayank",
      comment: "",
      rating: ""
    });
    setModal(false);
  };

  return (
    <div className="Addreview-card">
      <div className="review-card-container">
        <button onClick={() => setModal(false)}>Close</button>

        <h2>Add Your Review</h2>
        <span>
          <p>Rating</p>
          <select
            id="rating"
            onChange={(e) => {
              setReviewData({ ...reviewData, rating: e.target.value });
            }}
            value={reviewData?.rating}
          >
            <option>Select Your Rating</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </span>
        <span>
          <p>Comment</p>
          <textarea
            rows="1"
            value={reviewData?.comment}
            onChange={(e) =>
              setReviewData({ ...reviewData, comment: e.target.value })
            }
          />
        </span>
        <button className="btn-submit" onClick={onSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}
