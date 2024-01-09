import React from "react";

type Props = {
  width?: number | undefined;
  height?: number | undefined;
};

const Punishment = (props: Props) => {
  return (
    <div>
      <img
        src={`https://picsum.photos/${props.width}/${props.height}`}
        width={props.width}
        height={props.height}
      />
    </div>
  );
};

export default Punishment;
