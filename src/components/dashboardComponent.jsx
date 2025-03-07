import React, { useState } from "react";
import "../index.css";
import FollowerComponent from "./FollowerComponent";
import OverviewComponent from "./OverviewComponent";

const DashboardComponent = () => {
  const [totalFollowers, setTotalFollowers] = useState(0);
  const [day, setDay] = useState("Today");



  return (
    <div className="px-32 pt-5 pb-10 min-h-screen font-[Inter]">
      <div className="flex justify-between text mb-5">
        <div>
          <h1 className="font-bold text-xl">Social Media Dashboard</h1>
          <p className="text-sm font-bold text-DarkGrayishBlueText">Total Followers: {totalFollowers}</p>
        </div>
        <div className="flex items-center">
          <p className="text-sm font-bold text-LightModeToggle">Dark Mode</p>
          <button>asd</button>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <FollowerComponent 
        img="./images/icon-facebook.svg"
        imgAlt="Facebook Icon"
        username="@nathanf"
        followerNum={1987}
        followerText="Followers"
        change={12}
        />
        <FollowerComponent 
        img="./images/icon-twitter.svg"
        imgAlt="Twitter Icon"
        username="@nathanf"
        followerNum={1044}
        followerText="Followers"
        change={99}
        />
        <FollowerComponent 
        img="./images/icon-instagram.svg"
        imgAlt="Instagram Icon"
        username="@realnathanf"
        followerNum="11k"
        followerText="Followers"
        change={1099}
        />
        <FollowerComponent 
        img="./images/icon-youtube.svg"
        imgAlt="Youtube Icon"
        username="Nathan F."
        followerNum={8239}
        followerText="Subscribers"
        change={-144}
        />
        
      </div>

      <h1 className="font-bold text-xl text-DarkGrayishBlueText my-5">Overview - {day}</h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <OverviewComponent
        text="Page View"
        img="./images/icon-facebook.svg"
        imgAlt="Facebook Icon"
        value={87}
        change={3}
        />
        <OverviewComponent
        text="Likes"
        img="./images/icon-facebook.svg"
        imgAlt="Facebook Icon"
        value={52}
        change={-2}
        />
        <OverviewComponent
        text="Likes"
        img="./images/icon-instagram.svg"
        imgAlt="Instaram Icon"
        value={5462}
        change={2257}
        />
        <OverviewComponent
        text="Profile View"
        img="./images/icon-instagram.svg"
        imgAlt="Instagram Icon"
        value="52k"
        change={1375}
        />
        <OverviewComponent
        text="Retweets"
        img="./images/icon-twitter.svg"
        imgAlt="Twitter Icon"
        value={117}
        change={303}
        />
        <OverviewComponent
        text="Likes"
        img="./images/icon-twitter.svg"
        imgAlt="Twitter Icon"
        value={507}
        change={553}
        />
        <OverviewComponent
        text="Likes"
        img="./images/icon-youtube.svg"
        imgAlt="Youtube Icon"
        value={107}
        change={-19}
        />
        <OverviewComponent
        text="Total Views"
        img="./images/icon-youtube.svg"
        imgAlt="Youtube Icon"
        value={1407}
        change={-12}
        />
      </div>
    </div>
  );
};

export default DashboardComponent;
