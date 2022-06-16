import React from "react";
let average;

const Student = (props) => {
  // console.log(props);

  // findAverage
  function findAverage(grades) {
    let sum = 0;
    for (let i = 0; i < grades.length; i++) {
      sum += Number(grades[i]);
    }
    average = sum / grades.length;
    Math.round(average);
  }
  findAverage(props.grades);

  return (
    <div className="content">
      <div className="container parentDiv">
        <div className="row">
          <div className="col-sm col-md-1 photoDiv">
            <img alt="" src={props.photo} className="photo"></img>
          </div>
          <div className="col-sm col-md-8 userInfoDiv">
            <div className="nameDiv">
              <h3 className="fullName">{props.name.toUpperCase()}</h3>
            </div>

            <div className="detailsDiv">
              <p id="email" className="details">
                Email: {props.email}
              </p>
              <p id="company" className="details">
                Company: {props.company}
              </p>
              <p id="skill" className="details">
                Skill: {props.skill}
              </p>
              <p id="grades" className="details">
                Grade: {average} %;
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
