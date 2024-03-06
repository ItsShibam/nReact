import { IMAGE_CND_URL } from "../constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext.js";

const RestaurantCard = ({
  name,
  cuisines,
  avgRatingString,
  isOpen,
  cloudinaryImageId,
  // user,
}) => {
  const { user } = useContext(UserContext);

  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="h-[250px] w-[250px]"
        src={`${IMAGE_CND_URL}${cloudinaryImageId}`}
        alt="food"
      />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{cuisines?.join(", ")}</h3>
      <h4>{avgRatingString} stars</h4>
      <h5>{isOpen}</h5>
      <h6 className="text-green-500">
        {user.name} - {user.email}
      </h6>
    </div>
  );
};

export default RestaurantCard;
