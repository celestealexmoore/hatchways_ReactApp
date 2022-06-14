import React from "react";

const Student = (props) => {
  console.log(props);
  const total = props.api_fetch.students.length;
  const gradesList = props.api_fetch.students[0].grades;
  let i = 0;

  function findAverage(gradesList) {
    let sum = 0;
    for (i; i < gradesList.length; i++) {
      sum += Number(gradesList[i]);
    }
    let average = sum / gradesList.length;
    console.log("Grade: " + Math.round(average) + "%");
    // grades.textContent = "Grade: " + Math.round(average) + "%";
  }
  findAverage(gradesList);
  return (
    <div className="content">
      <div className="container parentDiv">
        <div className="row">
          <div className="col-sm col-md-1 photoDiv">
            <img
              alt=""
              src={props.api_fetch.students[0].pic}
              className="photo"
            ></img>
          </div>
          <div className="col-sm col-md-8 userInfoDiv">
            <div className="nameDiv">
              <h3 className="fullName">
                {props.api_fetch.students[0].firstName.toUpperCase()}{" "}
                {props.api_fetch.students[0].lastName.toUpperCase()}
              </h3>
            </div>

            <div className="detailsDiv">
              <p id="email" className="details">
                Email: {props.api_fetch.students[0].email}
              </p>
              <p id="company" className="details">
                Company: {props.api_fetch.students[0].company}
              </p>
              <p id="skill" className="details">
                Skill: {props.api_fetch.students[0].skill}
              </p>
              <p id="grades" className="details">
                Grade: 93%
              </p>
            </div>
          </div>
          <button className="col-sm col-md iconParent">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-plus-lg"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Student;
