import React, { useEffect, useState } from "react";
import axios from "axios";
import "./modules/student.css";
import "./modules/searchBar.css";
import Student from "./components/Student";
import SearchBars from "./components/SearchBars";

function App() {
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
    <div>
      <SearchBars />
      {data && <Student api_fetch={data} />}
    </div>
  );
}

export default App;
