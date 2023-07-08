import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DataContext } from "../Context/DataContext";
import { BiArrowBack } from "react-icons/bi";
import { ExtractMenu } from "../utlis/utlis";
import AddReview from "../features/AddReview";
import { useClickOutside } from "../CustomHook/ClickOutside";
import { AiFillStar } from "react-icons/ai";

export default function RestaurantDetail() {
  const { res_id } = useParams();
  const { restaurantMenuList, state } = useContext(DataContext);

  const restaurantData = restaurantMenuList.find(
    ({ id }) => id === Number(res_id)
  );
  const restaurantMenu = ExtractMenu(restaurantData);

  const modalRef = useRef();
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  useClickOutside(modalRef, setModal);

  useEffect(() => {}, [state]);

  return (
    <div>
      <header>
        <BiArrowBack onClick={() => navigate("/")} />
      </header>
      <div className="detail-container">
        <section className="detail">
          <h3>{restaurantData.name}</h3>
          <p>{restaurantMenu}</p>
          <p>{restaurantData.address}</p>
          <p>{restaurantData.averageRating} Rating</p>
        </section>
        <button onClick={() => setModal(!modal)}>Add New Review</button>
      </div>

      <div className="review-container">
        {restaurantData?.ratings?.map((review) => (
          <div>
            <div className="review-card">
              <span className="review-card-header">
                <img src={review?.pp} alt="review-img" />
                <h3>{review?.revName}</h3>
              </span>
              <p>
                {review.rating}
                <AiFillStar color={"yellow"} />
              </p>
            </div>
            <p className="reviewComment">{review?.comment}</p>
          </div>
        ))}
      </div>

      {modal && (
        <div className="Modal-wrapper">
          <div className="Modal" ref={modalRef}>
            <AddReview restaurantID={res_id} setModal={setModal} />
          </div>
        </div>
      )}
    </div>
  );
}
