import axios from "axios";
import { List } from "components/list/List";
import React, { useEffect, useState } from "react";
import { Featured, Navbar } from "../../components";
import "./home.scss";

export const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);
  useEffect(() => {
    console.log();

    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNTRmNTFmNGRjZDEwNTkwZjEzYmY4OCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MDYxNjY0NSwiZXhwIjoxNjUxMDQ4NjQ1fQ.BdmssGo4KGO40oifV6MeQ13EjCvMNfdfo_xBe4DPqgg",
            },
          }
        );
        console.log(`res`, res);
        setLists(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getRandomLists();
  }, [type, genre]);

  return (
    <div className="home">
      <Navbar />

      <Featured type={type} />
      <List dataList={null} />;
      {/* {lists.map((x) => {
        <List dataList={x} />;
      })} */}
    </div>
  );
};
