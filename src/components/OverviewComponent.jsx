import React from 'react'

const OverviewComponent = (props) => {
  return (
    <div className={`flex flex-col ${props.theme ? `bg-LightGrayishBlueCardBG` : `bg-DarkDesaturatedBlueCardBG` } p-5 gap-5 rounded-md`}>
      <div className='flex justify-between'>
        <p className={`text-sm font-bold ${props.theme ? `text-DarkGrayishBlueText` : `text-DesaturatedBlueText`}`}>{props.text}</p>
        <img src={props.img} alt={props.imgAlt} />
      </div>
      <div className='flex justify-between'>
        <h1 className={`font-bold text-3xl ${props.theme ? `text-VeryDarkBlueText` : `text-WhiteText`}`}>{props.value}</h1>
        {props.change >= 0 ? (
          <div className="flex items-center gap-1">
            <img className="h-max" src="./images/icon-up.svg" alt="social media icon" />
            <p className="text-LimeGreen text-sm">{props.change}%</p>
          </div>
        ) : (
          <div className="flex items-center gap-1">
            <img className="h-max" src="./images/icon-down.svg" alt="arrow" />
            <p className="text-BrightRed text-sm">{props.change * -1}%</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default OverviewComponent