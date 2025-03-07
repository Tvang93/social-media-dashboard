import React from "react";

const FollowerComponent = ({
  img,
  imgAlt,
  username,
  followerNum,
  followerText,
  change
}) => {



  return (
    <div className="relative bg-gradient-to-r from-Facebook to-Facebook rounded-md flex items-end pt-1">
      <div className="bg-LightGrayishBlueCardBG rounded-b-md h-[100%] w-[100%] flex flex-col items-center gap-4 text-DarkGrayishBlueText">
        <div className="flex mt-4 gap-2">
          <img src={img} alt={imgAlt} />
          <p className="text-slate-600 text-sm font-bold">{username}</p>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-6xl text-VeryDarkBlueText">{followerNum}</h1>
          <h2 className="tracking-wide font-light uppercase text-xs">{followerText}</h2>
        </div>
        {change >= 0 ? (
          <div className="flex items-center mb-4 gap-1">
            <img className="h-max" src="./images/icon-up.svg" alt="arrow up" />
            <p className="text-green-400 text-sm">{change} Today</p>
          </div>
        ) : (
          <div className="flex items-center mb-4 gap-1">
            <img className="h-max" src="./images/icon-down.svg" alt="arrow down" />
            <p className="text-red-400 text-sm">{change * -1} Today</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FollowerComponent;
