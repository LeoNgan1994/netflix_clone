import { ArrowBack } from "@material-ui/icons";
// import { useHistory } from "react-router-dom";
import React from "react";
import "./watch.scss";

export const Watch = () => {
//   const history = useHistory();
  const goBack = () => {
    // history.push("/home");
  };
  return (
    <div className="watch">
      <div className="back" onClick={goBack}>
        <ArrowBack className="icon"/> Home
      </div>
      <video
        className="video"
        autoPlay
        controls
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      />
    </div>
  );
};
