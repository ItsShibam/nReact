export function filterData(searchInput, filteredRestaurants) {
    return filteredRestaurants.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchInput.toLowerCase())
    );
  }