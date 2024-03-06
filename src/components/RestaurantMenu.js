import { useParams } from "react-router-dom";
import { IMAGE_CND_URL } from "../constants";
import useRestaurant from "../utils/useRestaurant";
import { addItems } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [restaurant, menu] = useRestaurant(resId);

  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItems(item));
  };
  return (
    <div className="flex">
      <div>
        <h4>Restaurant ID : {resId}</h4>
        <h1 className="text-4xl font-bold">{restaurant.name}</h1>;
        <img src={IMAGE_CND_URL + restaurant.cloudinaryImageId} />
      </div>
      <div className="mx-4">
        {menu.map((item) => {
          return (
            <div key={item.card?.card?.title}>
              <h1 className="text-3xl font-semibold">
                {item.card?.card?.title} &darr;
              </h1>
              {item.card?.card?.itemCards?.map((i) => {
                return (
                  <div
                    className="border border-orange-300 flex"
                    style={{ margin: "2px" }}
                    key={i.card?.info?.id}
                  >
                    <h4 className="mx-2">{i.card?.info?.name}</h4>
                    <button
                      className="px-2 bg-green-100"
                      onClick={() => addFoodItem(i.card?.info)}
                    >
                      Add
                    </button>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
