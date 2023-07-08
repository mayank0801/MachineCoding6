export const filterFunction = (restaurantMenuList, MenuTypeId) => {
  if (MenuTypeId === "") return [];
  else {
    return restaurantMenuList.filter(
      ({ cuisine_id }) => cuisine_id === MenuTypeId
    );
  }
};

export const ExtractMenu = (data) => {
  return data.menu.map(({ name }) => `${name}, `);
};
