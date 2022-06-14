import React, { useEffect, useState } from "react";
import axios from "axios";
import Wrapper from "./Wrapper";
import SearchBars from "./SearchBars";
import Student from "./Student";

const Api = () => {
  const [data, setData] = useState();

  const api_call = async () => {
    const url = "https://api.hatchways.io/assessment/students";
    const request = axios.get(url);
    const response = await request;
    setData(response.data);
  };

  useEffect(() => {
    api_call();
  }, []);

  return (
    <Wrapper>
      <SearchBars />
      {data && <Student api_fetch={data} />}{" "}
    </Wrapper>
  );
};

export default Api;
