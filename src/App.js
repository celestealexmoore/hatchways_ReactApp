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

  // console.log(data ? data.students : null);

  return (
    <div>
      <SearchBars />
      {data &&
        data.students.map((student) => (
          <Student
            key={student.id}
            photo={student.pic}
            name={student.firstName + " " + student.lastName}
            email={student.email}
            company={student.company}
            skill={student.skill}
            grades={student.grades}
          />
        ))}
    </div>
  );
}

export default App;
