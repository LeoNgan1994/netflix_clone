import { ArrowBack } from "@material-ui/icons";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./watch.scss";

export const Watch = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  // @ts-ignore
  const data = state.movie;

  return (
    <div className="watch">
      <div
        className="back"
        onClick={() => {
          navigate(-1);
        }}
      >
        <ArrowBack className="icon" /> Home
      </div>

      <video className="video" autoPlay controls src={data?.video} />
    </div>
  );
};
