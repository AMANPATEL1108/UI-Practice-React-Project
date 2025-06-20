import React from "react";
import Card from "./Card";

const HomePage = () => {
  return (
    <div>
      <div className="mt-5">
        <h1 className="text-center text-5xl">Home Page</h1>
        <div class="grid grid-flow-col  m-5">
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
        </div>

        <div class="grid grid-flow-col  m-5">
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
