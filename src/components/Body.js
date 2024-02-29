import { useState, useEffect } from "react";
// import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  // console.log("render()");

  useEffect(() => {
    //API calls
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.2568819&lng=85.7791854&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setAllRestaurants(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  }

  const isOnline = useOnline();
  if (!isOnline)
    return (
      <h1>
        It looks like you're offline.
        <br />
        📶Please check your internet connection...
      </h1>
    );

  return (
    <>
      <div className="search-container">
        <input
          placeholder="search..."
          type="text"
          className="search-input"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
            const data = filterData(e.target.value, allRestaurants);
            setFilteredRestaurants(data);
          }}
        />
        <button
          className="search-button"
          onClick={() => {
            const data = filterData(searchInput, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search - {searchInput}
        </button>
      </div>

      {filteredRestaurants.length == 0 ? (
        <Shimmer />
      ) : (
        <div className="restaurant-list">
          {filteredRestaurants.map((r) => (
            <Link to={"/restaurants/" + r.info?.id}>
              <RestaurantCard key={r.info?.id} {...r.info} />
            </Link>
          ))}
        </div>
      )}
    </>
  );
};
export default Body;
