import React, { useEffect } from "react";

const Home: React.FC = () => {
  const testFun = () => {
    return "my code";
    alert("Hi");
  };
  useEffect(() => {
    testFun();
  }, []);
  return (
    <div>
      <h2>Welcome to the Home Page</h2>
      {/* Add home page content */}
    </div>
  );
};

export default Home;
