import photo from "../assets/celestePic3.jpg";

export default function Student() {
  return (
    <div className="container parentDiv">
      <div className="row">
        <div className="col-sm col-md-1 photoDiv">
          <img alt="" src={photo} className="photo"></img>
        </div>
        <div className="col-sm col-md-8 userInfoDiv">
          <div className="nameDiv">
            <h3 className="fullName">Celeste Moore</h3>
          </div>

          <div className="detailsDiv">
            <p id="email" className="details">
              Email: celestealexmoore@gmail.com
            </p>
            <p id="company" className="details">
              Company: Moorehouse
            </p>
            <p id="skill" className="details">
              Skill: Software Engineering
            </p>
            <p id="grades" className="details">
              Grade: 3.75 GPA
            </p>
          </div>
        </div>
        <button className="col-sm col-md iconParent">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-plus-lg"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

/* 
let tags = [1, 2, 3, 4];
let fullName = ["Celeste Moore", "David Moore", "Fahlia Moore"];
let email = [
  "celestealexmoore@gmail.com",
  "davidzmoore@gmail.com",
  "falamoore@gmail.com",
];
let company = ["Moorehouse", "Moorehouse", "Moorehouse"];
let skills = [
  "Software Engineering",
  "Civil-Structural Engineering",
  "Demolition Management",
];
let grades = ["3.75 GPA", "4.0 GPA", "3.9 GPA"]; 
*/