import React, {useContext} from "react";
import "./SoftwareSkill.scss";
import StyleContext from "../../contexts/StyleContext";
import {skillsSection} from "../../portfolio";

export default function SoftwareSkill() {
  const {isDark} = useContext(StyleContext);
  if (!skillsSection.display) {
    return null;
  }
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className={
                  "software-skill-inline " +
                  skills.skillName +
                  (isDark ? " dark-background" : "")
                }
              >
                <i className={skills.fontAwesomeClassname}></i>
                <a
                  href={skills.url}
                  rel="noreferrer"
                  target={skills.newTab ? "_blank" : "_self"}
                >
                  <p>{skills.skillName}</p>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
