import React, { useEffect } from "react";
import { Mode } from "../../types/types";

interface Props {
  mode: Mode;
}

const Viewer: React.FC<Props> = ({ mode }) => {
  useEffect(() => {
    console.log(mode);
  });

  return (
    <>
      <div
        style={{
          width: "83%",
          background: "deepskyblue",
        }}
      ></div>
    </>
  );
};

export default Viewer;
