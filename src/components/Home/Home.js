import React from "react";
import useFirebase from "../../hooks/useFirebase";

const Home = () => {
  const { user } = useFirebase();
  return (
    <div className="mt-3">
      <h1>This is home</h1>
      <p>
        Current User:{" "}
        <span style={{ fontWeight: "bold" }}>
          {user ? user.displayName : "No Body"}
        </span>
      </p>
    </div>
  );
};

export default Home;
