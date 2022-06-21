import React, { useEffect, useState } from "react";
import axios from "axios";
import Student from "./components/Student";
import SearchBars from "./components/SearchBars";
import searchName from "./components/utils/searchName";

function App() {
  const [data, setData] = useState();
  const [searchValue, setSearchValue] = useState("");

  const api_call = async () => {
    const url = "https://api.hatchways.io/assessment/students";
    const request = axios.get(url);
    const response = await request;
    setData(response.data);
  };
  useEffect(() => {
    api_call();
  }, []);

  let studentArray = [];

  const filteredArray = (data, searchValue) => {
    if (!searchValue && data) {
      studentArray = data.students;
      return;
    }
    if (!searchValue && !data) {
      return;
    }
    studentArray = searchName(data.students, searchValue);
    return;
  };
  filteredArray(data, searchValue);

  return (
    <div>
      <SearchBars searchValue={searchValue} setSearchValue={setSearchValue} />
      {data &&
        studentArray.map((student) => (
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
