import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import "./featured.scss";
import React from "react";

export const Featured = () => {
  return (
    <div className="featured">
      <img
        src="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt=""
      />
      <div className="info">
        <img
          src="https://images.unsplash.com/photo-1499415479124-43c32433a620?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
          alt=""
        />
        <span className="description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id sit
          recusandae voluptatum dolorum quas assumenda, minima, iste quia quos
          quisquam natus amet voluptatem adipisci minus dolore obcaecati?
          Deleniti, dolore laboriosam!
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>More info</span>
          </button>
        </div>
      </div>
    </div>
  );
};
