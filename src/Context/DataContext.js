import { createContext, useReducer } from "react";
import { cuisineData, restaurantsData } from "../Data/data";
import { reducer } from "../Reducer/DataReducer";

export const DataContext = createContext();

export default function DataContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    cuisine: cuisineData,
    restaurantMenuList: restaurantsData,
    MenuTypeId: 1
  });
  return (
    <DataContext.Provider
      value={{
        cuisine: state.cuisine,
        dispatch,
        restaurantMenuList: state.restaurantMenuList,
        state,
        MenuTypeId: state.MenuTypeId
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
