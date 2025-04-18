import React from "react";

export default function PostedJobCards(props: any) {
  return (
    <div className="bg-mine-shaft-900 rounded-xl p-2 border-l-5 border-bright-sun-400">
      <div className="text-sm font-semibold">{props.jobTitle}</div>
      <div className="text-xs text-mine-shaft-300 font-medium">
        {props.location}
      </div>
      <div className="text-xs text-mine-shaft-300">{props.posted}</div>
    </div>
  );
}
