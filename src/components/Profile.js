import { useEffect, useState } from "react";

const Profile = (props) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    console.log("inside useEffect");

    return () => {
      console.log("componentWillUnmount");
    };
  }, []);
  return (
    <div className="border border-pink-300">
      <h2>Profile Component</h2>
      <h3>Name : {props.name}</h3>
      <h4>count:{count}</h4>
      <button
        onClick={() => {
          setCount(1);
          setCount2(1);
        }}
      >
        count
      </button>
    </div>
  );
};
export default Profile;
