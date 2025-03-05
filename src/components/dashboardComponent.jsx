import React from "react";
import "../index.css";
import FollowerComponent from "./FollowerComponent";

const DashboardComponent = () => {
  return (
    <div className="px-32 pt-5 pb-10 min-h-screen">
      <div className="flex justify-between text">
        <div>
          <h1>Social Media Dashboard</h1>
          <p>Total Followers: 23,004</p>
        </div>
        <div className="flex items-center">
          <h1>Dark Mode</h1>
          <button>asd</button>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4">
        <FollowerComponent 
        img="./images/icon-facebook.svg"
        username="@nathanf"
        followerNum={1987}
        change={12}
        />
        <FollowerComponent />
      </div>

      <h1>Overview - Today</h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4">

      </div>
    </div>
  );
};

export default DashboardComponent;
