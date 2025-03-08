import React from "react";

const FollowerComponent = ({
  theme,
  bg1,
  bg2,
  img,
  imgAlt,
  username,
  followerNum,
  followerText,
  change
}) => {


  return (
    <div className={`relative bg-gradient-to-r ${bg1} ${bg2} rounded-md flex items-end pt-1`}>
      <div className={`${theme ? `bg-LightGrayishBlueCardBG text-DarkGrayishBlueText` : `bg-DarkDesaturatedBlueCardBG text-DesaturatedBlueText`} rounded-b-md h-[100%] w-[100%] flex flex-col items-center gap-4 `}>
        <div className="flex mt-4 gap-2">
          <img src={img} alt={imgAlt} />
          <p className={`text-sm font-bold ${theme ? `text-DarkGrayishBlueText` : `text-DesaturatedBlueText`}`} >{username}</p>
        </div>
        <div className="flex flex-col items-center">
          <h1 className={`font-bold text-6xl ${theme ? `text-VeryDarkBlueText`: `text-WhiteText` }`}>{followerNum}</h1>
          <h2 className="tracking-[0.3rem] font-light uppercase text-xs">{followerText}</h2>
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
