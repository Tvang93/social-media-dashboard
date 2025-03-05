import React from "react";

const FollowerComponent = ({
  img,
  username,
  followerNum,
  change
}) => {



  return (
    <div className="relative bg-gradient-to-r from-cyan-900 to-red-800 rounded-sm flex items-end h-auto">
      <div className="bg-slate-400 rounded-b-sm h-[99%] w-[100%]">
        <div className="flex">
          <img src={img} alt="facebook icon" />
          <p className="text-slate-600">{username}</p>
        </div>
        <h1>{followerNum}</h1>
        <h2>Followers</h2>
        {change >= 0 ? (
          <div className="flex items-center">
            <img className="h-max" src="./images/icon-up.svg" alt="" />
            <p className="text-green-400">{change} Today</p>
          </div>
        ) : (
          <div className="flex items-center">
            <img className="h-max" src="./images/icon-down.svg" alt="" />
            <p className="text-red-400">{change} Today</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FollowerComponent;
