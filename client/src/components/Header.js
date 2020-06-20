import React from "react";
import '../assets/styles/Header.scss';

const Header = () => {
  return (
    <div className="ExamInfo-Header">
      <div className="container-top-logo flex-row-start">
        <div class="flex-row-start grow link-container">
          <a href="https://www.exambazaar.com/">
            <span class="site-title">EXAMBAZAAR</span>
          </a>
          <a href="https://www.exambazaar.com/blog">
            <span class="site-link-nav">Blogs</span>
          </a>
          <a href="https://www.exambazaar.com/exam">
            <span class="site-link-nav">Exams</span>
          </a>
          <a href="https://www.exambazaar.com/best-coaching-classes">
            <span class="site-link-nav">Best Coachings</span>
          </a>
          <a href="https://www.exambazaar.com/previous-year-question-papers-for-competitive-exams">
            <span class="site-link-nav">Question Papers</span>
          </a>
          <a href="https://www.exambazaar.com/exam-question-a-day">
            <span class="site-link-nav">EQAD</span>
          </a>
          <a href="https://www.exambazaar.com/">
            <span class="site-link-nav">Prep Tools</span>
          </a>
        </div>
        <div class="flex-row-start auto-mar link-container">
          <a href="https://www.exambazaar.com/">
            <span class="site-link-nav">+Write</span>
          </a>
          <img
            className="icon"
            src="https://image.flaticon.com/icons/svg/483/483356.svg"
          ></img>
          <img
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
