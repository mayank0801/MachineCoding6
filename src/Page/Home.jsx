import { useContext } from "react";
import RestaurantCard from "../Component/RestaurantCard";
import { DataContext } from "../Context/DataContext";
import { filterFunction } from "../utlis/utlis";

export default function Home() {
  const { cuisine, dispatch, MenuTypeId, restaurantMenuList } = useContext(
    DataContext
  );
  const filterDataToDisplay = filterFunction(restaurantMenuList, MenuTypeId);

  return (
    <div>
      <div className="home-container">
        <h2>Food Ordering App</h2>
        <h3>Select Your Cuisine :</h3>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="cuisine-type">
          {cuisine.map((cuisine) => (
            <button
              id={cuisine.id}
              onClick={() =>
                dispatch({ type: "SELECT_MENUTYPE", payload: cuisine.id })
              }
            >
              {cuisine.name}
            </button>
          ))}
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          {filterDataToDisplay.map((data) => (
            <RestaurantCard key={data.id} restaurantData={data} />
          ))}
        </div>
      </div>
    </div>
  );
}
