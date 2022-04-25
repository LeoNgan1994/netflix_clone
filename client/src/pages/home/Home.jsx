import "./home.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import { Featured, List, Navbar } from "components";

export const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
                "Bearer " +
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNTRmNTFmNGRjZDEwNTkwZjEzYmY4OCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MDg0OTA4MiwiZXhwIjoxNjUxMjgxMDgyfQ.OxG7gBRrB8rTQGHDc6a5mtRstAcGx-e2WwOQAPR4MMg",
            },
          }
        );
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);

  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      {lists.map((list, index) => (
        <List list={list} key={index} />
      ))}
    </div>
  );
};
