import React from "react";
import '../assets/styles/Header.scss';

const Header = () => {
  return (
    <div className="ExamInfo-Header">
      <div className="container-top-logo flex-row-start">
        <div className="flex-row-start grow link-container">
          <a href="https://www.exambazaar.com/">
            <span className="site-title">EXAMBAZAAR</span>
          </a>
          <a href="https://www.exambazaar.com/blog">
            <span className="site-link-nav">Blogs</span>
          </a>
          <a href="https://www.exambazaar.com/exam">
            <span className="site-link-nav">Exams</span>
          </a>
          <a href="https://www.exambazaar.com/best-coaching-classes">
            <span className="site-link-nav">Best Coachings</span>
          </a>
          <a href="https://www.exambazaar.com/previous-year-question-papers-for-competitive-exams">
            <span className="site-link-nav">Question Papers</span>
          </a>
          <a href="https://www.exambazaar.com/exam-question-a-day">
            <span className="site-link-nav">EQAD</span>
          </a>
          <a href="https://www.exambazaar.com/">
            <span className="site-link-nav">Prep Tools</span>
          </a>
        </div>
        <div className="flex-row-start auto-mar link-container">
          <a href="https://www.exambazaar.com/">
            <span className="site-link-nav">+Write</span>
          </a>
          <img alt="searchIcon"
            className="icon"
            src="https://image.flaticon.com/icons/svg/483/483356.svg"
          ></img>
          <img alt="profileIcon"
            className="profile icon"
            src="https://image.flaticon.com/icons/svg/483/483361.svg"
          ></img>
        </div>
      </div>
      <hr></hr>
      <span className="heading-top flex-row-center">
        EQAD | Free Exam Question A Day
      </span>
      <span className="subheading-top flex-row-center">
        Free Online Test Preparation With Previous Year Exam Questions
      </span>
    </div>
  );
};

export default Header;
