import React, { PropsWithChildren } from "react";

export const AdlButton = (props: PropsWithChildren<ButtonType>) => {
  const classes = props.classes
    ? props.classes
    : "btn-primary";
  return (
    <>
      <button
        type={props.type}
        title={props.title ?? ""}
        className={`btn btn-block ` + classes}
      >
        {props.children}
      </button>
    </>
  );
};
