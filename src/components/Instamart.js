import React, { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  // const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="border border-black p-2 m-2">
      <h1 className="font-semibold text-xl">{title}</h1>

      {isVisible ? (
        <button
          className="p-2 bg-red-500 text-white border border-blue-300"
          onClick={() => {
            setIsVisible(false);
          }}
        >
          Hide
        </button>
      ) : (
        <button
          className="p-2 bg-blue-500 text-white border border-blue-300"
          onClick={() => {
            setIsVisible(true);
          }}
        >
          Show
        </button>
      )}

      {/* {isVisible ? <p>{description}</p> : <></>} */}
      {isVisible && <p>{description}</p>}
    </div>
  );
};
const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("");

  return (
    <>
      <h1 className="text-4xl font-bold p-2 m-2">Instamart</h1>
      {/* <h1>100s of component in it.</h1> */}
      <Section
        title={"About Instamart"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
        isVisible={visibleSection === "about"}
        setIsVisible={(boolValue) =>
          !boolValue ? setVisibleSection("") : setVisibleSection("about")
        }
      />
      <Section
        title={"Team Instamart"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
        isVisible={visibleSection === "team"}
        setIsVisible={(boolValue) =>
          !boolValue ? setVisibleSection("") : setVisibleSection("team")
        }
      />
      <Section
        title={"Career Instamart"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
        isVisible={visibleSection === "career"}
        setIsVisible={(boolValue) =>
          !boolValue ? setVisibleSection("") : setVisibleSection("career")
        }
      />
    </>
  );
};

export default Instamart;
