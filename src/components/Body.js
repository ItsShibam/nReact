import { useState, useEffect, useContext } from "react";
// import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
// import UserContext from "../utils/UserContext";
import UserContext from "../utils/UserContext.js";

const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const { user, setUser } = useContext(UserContext);
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
    console.log(json);
    console.log(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setAllRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
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

  //early return
  // if (!filteredRestaurants) return;

  return (
    <>
      <div className="search-container rounded-md">
        <input
          placeholder="search..."
          type="text"
          className="search-input p-3 m-5 mr-0 outline-none border border-gray-200 rounded-md focus:bg-green-50 "
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
            const data = filterData(e.target.value, allRestaurants);
            setFilteredRestaurants(data);
          }}
        />
        <button
          className="search-button p-3 m-5 rounded-md ml-1 bg-purple-600 text-white"
          // style={{ backgroundColor: "green", color: "white" }}
          onClick={() => {
            const data = filterData(searchInput, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search - {searchInput}
        </button>
      </div>
      <input
        placeholder="name..."
        className="border border-black"
        type="text"
        value={user.name}
        onChange={(e) =>
          setUser({
            name: e.target.value,
            email: user.email,
          })
        }
      />
      <input
        placeholder="email..."
        className="border border-black"
        type="text"
        value={user.email}
        onChange={(e) =>
          setUser({
            email: e.target.value,
            name: user.name,
          })
        }
      />{" "}
      - this is a demonstration of changing context from a component.
      {filteredRestaurants.length == 0 ? (
        <Shimmer />
      ) : (
        <div className="restaurant-list flex flex-wrap">
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
