import { useNavigate } from "react-router-dom";
import "./RestaurantCard.css";
export default function RestaurantCard({ restaurantData }) {
  const { name, menu, id } = restaurantData;
  const navigate = useNavigate();
  return (
    <div>
      <h3>Dishes By {name}</h3>
      <div className="restaurant-menu-container">
        {menu.map((menu) => (
          <div
            className="menu-container"
            onClick={() => navigate(`/restaurant/${id}`)}
          >
            <img className="menu-img" src={menu?.imgSrc} alt="menuimg" />
            <section className="menu-detail">
              <strong>{menu.name}</strong>
              <p>{`${menu.price} for ${menu.qty}`}</p>
              <p>{name}</p>
            </section>
          </div>
        ))}
      </div>
    </div>
  );
}
