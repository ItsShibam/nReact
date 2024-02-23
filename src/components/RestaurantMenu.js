import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMAGE_CND_URL } from "../constants";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [restaurant, setRestaurant] = useState({});
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=20.2568819&lng=85.7791854&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await data.json();
    setRestaurant(json?.data?.cards[2]?.card?.card?.info);
    console.log(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    );
    setMenu(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  }
  // console.log(restaurant);

  return (
    <>
      <h4>Restaurant ID : {resId}</h4>
      <h1>{restaurant.name}</h1>;
      <img src={IMAGE_CND_URL + restaurant.cloudinaryImageId} />
      <div>
        {menu.map((item) => {
          return (
            <div key={item.card?.card?.title}>
              <h1>{item.card?.card?.title}</h1>
              {item.card?.card?.itemCards?.map((i) => {
                return (
                  <div style={{ margin: "2px" }} key={i.card?.info?.id}>
                    <h4>{i.card?.info?.name}</h4>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RestaurantMenu;
