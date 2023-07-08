export const reducer = (state, action) => {
  switch (action.type) {
    case "SELECT_MENUTYPE":
      return { ...state, MenuTypeId: action.payload };
    case "ADD_REVIEW": {
      const restuarantToUpdate = state.restaurantMenuList.find(
        ({ id }) => id === Number(action.payload.restaurantID)
      );

      const totaRating =
        restuarantToUpdate.ratings.reduce(
          (acc, curr) => acc + Number(curr.rating),
          0
        ) + Number(action.payload.review.rating);
      const restaurantAvgRating = totaRating / 5;

      const updatedRestaurantData = {
        ...restuarantToUpdate,
        ratings: [...restuarantToUpdate.ratings, action.payload.review],
        averageRating: restaurantAvgRating
      };

      return {
        ...state,
        restaurantMenuList: state.restaurantMenuList.map((resdata) =>
          resdata.id === Number(action.payload.restaurantID)
            ? { ...updatedRestaurantData }
            : { ...resdata }
        )
      };
    }
    default: {
      return { ...state };
    }
  }
};
