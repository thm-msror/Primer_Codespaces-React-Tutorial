import React from "react";
import "../styles.css";

const Education = () => {
  const educationList = [
    {
      institution: "University of Doha for Science and Technology (UDST)",
      degree: "B.Sc. - IT / Data Science and AI",
      year: "2022 - Present (Expected Graduation: 2026)",
      url: "https://www.udst.edu.qa/",
    },
    {
      institution: "The Next Generation School (TNG)",
      degree: "High School Diploma (Grade 6 - 12)",
      year: "2016 - 2022",
      url: "https://tngqatar.online/",
    },
  ];

  return (
    <div id="education" className="education-container">
      <h2 className="section-title">Education</h2>
      <div className="education-grid">
        {educationList.map((education, index) => (
          <div key={index} className="education-cell">
            <h3 className="education-title">
              <a href={education.url} target="_blank" rel="noopener noreferrer">
                {education.institution}
              </a>
            </h3>
            <p className="education-degree">{education.degree}</p>
            <p className="education-year">{education.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
