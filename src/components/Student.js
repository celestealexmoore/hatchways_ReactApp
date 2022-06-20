import { useState } from "react";
import "../modules/student.css";
import Toggle from "./Toggle";
import findAverage from "./utils/findAverage";
import Tag from "./Tag";

const Student = (props) => {
  const getTags = JSON.parse(localStorage.getItem(props.name));
  const [showGrades, setShowGrades] = useState(false);
  const [tags, setTags] = useState(getTags);
  const [tag, setTag] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    let tagsArray = [];
    let existingTags = getTags;
    if (existingTags) {
      tagsArray = [...existingTags, tag];
      setTags(tagsArray);
      localStorage.setItem(props.name, JSON.stringify(tagsArray));
      setTag("");
    } else {
      tagsArray.push(tag);
      setTags(tagsArray);
      localStorage.setItem(props.name, JSON.stringify(tagsArray));
      setTag("");
    }
  };

  // findAverage
  findAverage(props.grades);

  return (
    <div className="content">
      <div className="container parentDiv">
        <div className="row">
          <div className="col-md-1 photoDiv">
            <img alt="" src={props.photo} className="photo"></img>
          </div>
          <div className="col-md-8 userInfoDiv">
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
                Grade: {findAverage(props.grades)}%
              </p>

              {/* if show grades is true, show. If not, do nothing. */}
              {showGrades ? (
                <div className="expandDiv">
                  <ul>
                    {props.grades.map((grade, i) => (
                      <li>
                        {" "}
                        Test {i + 1}: {grade}%
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {tags && tags.map((tag, id) => <Tag key={id} tag={tag} />)}

              <div className="container">
                <form onSubmit={handleSubmit} className="row">
                  <input
                    type="text"
                    className="form-control-sm textInput"
                    placeholder="Add a tag"
                    value={tag}
                    onChange={(e) => setTag(e.target.value)}
                  />
                </form>
              </div>
            </div>
          </div>
          <div className="col iconParent">
            <Toggle showGrades={showGrades} setShowGrades={setShowGrades} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Student;
