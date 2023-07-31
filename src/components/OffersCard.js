import React from "react";

const OffersCard = (props) => {
  return (
    <div className="border-2 rounded-[7px] flex flex-col p-2 w-[200px] h-[200px]">
      <div className="font-bold">{props.title}</div>
      <div className="mt-2 text-ellipsis line-clamp-5 overflow-hidden">
        {props.description}
      </div>
    </div>
  );
};

export default OffersCard;
