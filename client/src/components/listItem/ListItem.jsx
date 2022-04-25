// @ts-nocheck
import {
  FavoriteBorderOutlined,
  PlayArrow,
  ThumbDownOutlined,
  ThumbUpOutlined,
} from "@material-ui/icons";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ListItem.scss";
export const ListItem = ({ index, item }) => {
  const [isHover, setIsHover] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    const getMovies = async () => {
      try {
        const res = await axios.get(`/movies/find/` + item, {
          headers: {
            token:
              "Bearer " +
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNTRmNTFmNGRjZDEwNTkwZjEzYmY4OCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MDg0OTA4MiwiZXhwIjoxNjUxMjgxMDgyfQ.OxG7gBRrB8rTQGHDc6a5mtRstAcGx-e2WwOQAPR4MMg",
          },
        });
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovies();
  }, [item]);

  return (
    <Link
      to={{
        pathname: "/watch",
        search: "",
        hash: "",
      }}
      state={{ movie: data }}
    >
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
        <img src={data?.img} alt="fakeMovie1" />
        {isHover ? (
          <>
            <video src={data.trailer} autoPlay={true} loop></video>
            <div className="itemInfo">
              <div className="icons">
                <PlayArrow className="icon" />
                <FavoriteBorderOutlined className="icon" />
                <ThumbUpOutlined className="icon" />
                <ThumbDownOutlined className="icon" />
              </div>
              <div className="itemInfoTop">
                <span>{data.duration}</span>
                <span className="limit">{data.limit}</span>
                <span>{data.year}</span>
              </div>
              <div className="desc">{data.desc}</div>
              <div className="genre">{data.genre}</div>
            </div>
          </>
        ) : null}
      </div>
    </Link>
  );
};
