import React, { useEffect, useState } from "react";
import "../index.css";
import FollowerComponent from "./FollowerComponent";
import OverviewComponent from "./OverviewComponent";
import { FetchData } from "../services/DataServices";
import dataValue from "/data.json"


const DashboardComponent = () => {
  const [totalFollowers, setTotalFollowers] = useState("23,004");
  const [day, setDay] = useState("Today");
  const [appData, setAppData] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const GetData = async () => {
      const data = await FetchData();
      console.log(data);
      setAppData(dataValue);
    };
    GetData();
  }, []);

  useEffect(() => {
    console.log(darkMode);
  }, [darkMode]);

  const ChangeMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen ${darkMode ? `bg-[linear-gradient(to_bottom,hsl(225,100%,98%)_33%,white_33%)]` : `bg-[linear-gradient(to_bottom,#1f212e_33%,#1e202a_33%)]` }`}>
      {appData != "" && (
        <div className="px-32 pt-5 pb-10 min-h-screen font-[Inter]">
          <div className="flex justify-between text mb-5 ">
            <div>
              <h1 className={`font-bold text-xl ${darkMode ? `text-VeryDarkBlueText` : `text-WhiteText`}`}>Social Media Dashboard</h1>
              <p className="text-sm font-bold text-DarkGrayishBlueText">
                Total Followers: {totalFollowers}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-sm font-bold text-LightModeToggle">
                Dark Mode
              </p>

              <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" onChange={ChangeMode} />
                <div className="relative w-11 h-6 bg-blue-600 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-200 dark:peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {appData.SocialMedia.map((element, idx) => (
              <FollowerComponent
                key={idx}
                theme={darkMode}
                bg1={`from-${element.Name}2`}
                bg2={`to-${element.Name}2`}
                img={element.Image}
                imgAlt={`${element.Name} Icon`}
                username={`${element.Username}`}
                followerNum={element.FollowerCount}
                followerText={element.FollowerLabel}
                change={element.FollowerChange}
              />
            ))}
          </div>

          <h1 className="font-bold text-xl text-DarkGrayishBlueText my-5">
            Overview - {day}
          </h1>

          <div className="grid lg:grid-cols-2 gap-6">
            {appData.SocialMedia.map((element, idx) => (
              <div className="grid sm:grid-cols-2 gap-6" key={idx}>
                <OverviewComponent
                  theme={darkMode}
                  text={element.OverviewDetails[0].Label}
                  img={element.Image}
                  imgAlt={`${element.Name} Icon`}
                  value={element.OverviewDetails[0].Count}
                  change={element.OverviewDetails[0].Change}
                />
                <OverviewComponent
                  theme={darkMode}
                  text={element.OverviewDetails[1].Label}
                  img={element.Image}
                  imgAlt={`${element.Name} Icon`}
                  value={element.OverviewDetails[1].Count}
                  change={element.OverviewDetails[1].Change}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardComponent;
