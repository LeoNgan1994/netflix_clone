import {
  FavoriteBorderOutlined,
  PlayArrow,
  ThumbDownOutlined,
  ThumbUpOutlined,
} from "@material-ui/icons";
import React, { useState } from "react";
import "./ListItem.scss";
export const ListItem = ({ index }) => {
  const [isHover, setIsHover] = useState(false);
  const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  return (
    <div
      className="listItem"
      style={{ left: isHover && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
    >
      <img
        src="https://images.unsplash.com/photo-1611419010019-550124aef004?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
        alt="fakeMovie1"
      />
      {isHover ? (
        <>
          <video src={trailer} autoPlay={true} loop></video>
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow  className="'"/>
              <FavoriteBorderOutlined  className="'"/>
              <ThumbUpOutlined className="'" />
              <ThumbDownOutlined className="'" />
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="limit">+18</span>
              <span>2000</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
              voluptatibus ut totam? Aliquid nihil voluptatem fugit labore
              reprehenderit, quisquam, itaque officia eaque commodi velit
              libero, a quibusdam consequuntur praesentium nam.
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      ) : null}
    </div>
  );
};
