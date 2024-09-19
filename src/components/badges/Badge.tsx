import React from "react";

export const Badge = (props: BadgeType) => {
  return (
    <span className={`badge ${props.classes}`}>{props.label}</span>
  );
};
