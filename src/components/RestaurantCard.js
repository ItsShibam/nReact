import { IMAGE_CND_URL } from "../constants";
const RestaurantCard = ({
  name,
  cuisines,
  avgRatingString,
  isOpen,
  cloudinaryImageId,
}) => {
  return (
    <div className="card">
      <img src={`${IMAGE_CND_URL}${cloudinaryImageId}`} alt="food" />
      <h2>{name}</h2>
      <h3>{cuisines.join(",")}</h3>
      <h4>{avgRatingString} stars</h4>
      <h5>{isOpen}</h5>
    </div>
  );
};

export default RestaurantCard;
