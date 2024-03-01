import { useParams } from "react-router-dom";
import { IMAGE_CND_URL } from "../constants";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [restaurant, menu] = useRestaurant(resId);

  return (
    <>
      <h4>Restaurant ID : {resId}</h4>
      <h1 className="text-4xl font-bold">{restaurant.name}</h1>;
      <img src={IMAGE_CND_URL + restaurant.cloudinaryImageId} />
      <div className="">
        {menu.map((item) => {
          return (
            <div key={item.card?.card?.title}>
              <h1 className="text-3xl font-semibold">
                {item.card?.card?.title} &darr;
              </h1>
              {item.card?.card?.itemCards?.map((i) => {
                return (
                  <div style={{ margin: "2px" }} key={i.card?.info?.id}>
                    <h4 className="mx-2">{i.card?.info?.name}</h4>
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
