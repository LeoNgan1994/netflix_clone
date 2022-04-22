import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import { ListItem } from "components/listItem";
import React, { useRef, useState } from "react";
import "./List.scss";

export const List = ({ dataList }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [isMoving, setIsMoving] = useState(false);
  const listRef = useRef(null);
  const maxSlideNumber = 10;
  const handleClick = (direction) => {
    setIsMoving(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideNumber < maxSlideNumber) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };
  return (
    <div className="list">
      <span className="listTitle">Continue to watch</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          className="sliderArrow left"
          onClick={() => {
            handleClick("left");
          }}
          style={{ display: !isMoving && "none" }}
        />
        <div className="container" ref={listRef}>
          {/* {dataList.content.map((x, i) => {
            <ListItem index={i} />;
          })} */}
          <ListItem index={1} />;
          <ListItem index={2} />;
          <ListItem index={3} />;
        </div>
        <ArrowForwardIosOutlined
          className="sliderArrow right"
          onClick={() => {
            handleClick("right");
          }}
        />
      </div>
    </div>
  );
};
