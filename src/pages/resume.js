import { Link } from 'gatsby';
import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '@styles';

import { DATA } from '../data/resumeData';
const { landing, introduction, experience, skills, education } = DATA;

const ResumeContainer = styled.div`
  .container {
    background-color: #0a192f;
    padding: 0;
    /* margin: 10px 20px; */
  }

  .more-button {
    ${({ theme }) => theme.mixins.button};
    margin: 0px;
    padding: 10px 14px;
  }
  .archive-link {
    font-family: var(--font-mono);
    font-size: var(--fz-sm);
    &:after {
      bottom: 0.1em;
    }
  }

  .left,
  .right {
    width: 50%;
    display: inline-block;
    vertical-align: top;
  }

  .left {
    /* color: #efefef; */
    width: 50%;
    height: 100%;
    float: left;
    text-align: center;
    overflow: hidden;
    position: fixed;
  }

  .left .bg-img {
    /* background: url('./images/1.png') no-repeat; */
    background: url('../images/meBg1.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .left .bg-img:before {
    background-image: linear-gradient(to right bottom, #051937, #004067, #006a86, #00958a, #06be74);
  }

  .left .bg-img:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0.8;
  }

  .left-inner,
  .right-inner {
    padding: 50px;
  }

  @media screen and (max-width: 400px) {
    .left-inner,
    .right-inner {
      padding: 40px;
    }
  }

  .left-inner {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    min-height: 24em;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    height: 100%;
  }

  .left .info {
    -webkit-box-flex: 0;
    -webkit-flex: none;
    flex: none;
    position: absolute;
    top: 0rem;
    left: 0;
    right: 0;
    bottom: 0;
    /* color: rgb(5, 5, 5); */
    width: 100%;
    /* margin: 0 auto; */
    margin-top: 200px;
    font-size: 1.2rem;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 1000px) {
    .left .info {
      margin-top: 300px;
    }
  }

  .left .info .name {
    font-weight: 600;
    font-size: 2rem;
  }

  .left .info .social-links {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }

  .left .info .social-links .icons {
    transition: all 0.5s;
  }

  .left .info .social-links .icons:hover {
    font-size: 30px;
  }

  .left .info .fa {
    margin: 10px;
    font-size: 40px;
  }

  @media screen and (max-width: 1000px) {
    .left,
    .right {
      display: block;
      width: 100%;
    }
    .left {
      position: static;
      height: 100vh;
    }
  }

  .right {
    float: right;
  }
  .right .headerBtns {
    display: flex;
    justify-content: space-between;
    margin: 2rem;
  }

  .right h4,
  .right .content {
    display: inline-block;
    vertical-align: top;
  }

  .right h4 {
    width: 20%;
    margin: 0 0 20px;
    text-transform: uppercase;
    font-size: 14px;
  }

  .right ul {
    padding: 0;
    margin: 0;
  }

  .right .content {
    width: 80%;
    padding: 0;
    margin: 0 0 50px;
    font-weight: 300;
    line-height: 1.5;
  }

  @media screen and (max-width: 600px) {
    .right h4,
    .right .content {
      display: block;
      /* vertical-align: top; */
      width: 100%;
    }
  }

  .right .content ul.description {
    padding-left: 20px;
    margin-top: 10px;
    font-size: 15px;
  }
  /* ------------------------------------------- */

  .right-inner {
    font-size: 16px;
    display: flex;
    flex-direction: column;
    gap: 5rem;
    justify-content: space-between;
  }

  .right-inner .section {
    display: flex;
    gap: 1rem;
  }
  @media screen and (max-width: 600px) {
    .right-inner .section {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  .right-inner .section .sectionTitle {
    flex: 1;
  }
  .right-inner .section .sectionContent {
    flex: 3;
    line-height: 1.5rem;
  }

  .section .skillCategory {
    display: flex;
    gap: 2rem;
    margin-bottom: 1rem;
  }
  .section .skillCategory strong {
    flex: 1;
  }
  .section .skillCategory span {
    flex: 3;
  }
  /* .date-location {
  display: flex;
  justify-content: space-between;
} */

  .Resumeeducation {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .educationItem h5 {
    font-size: 1rem;
  }
  .educationItem a {
    font-size: 1rem;
  }

  .educationItem .date-location {
    font-size: 0.8rem;
  }

  /* ------------- experience    --------------- */
  .experience .sectionContent {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .sectionContent strong {
    color: #ccd6f6;
  }

  .experience .jobDate {
    font-size: 0.8rem;
  }
  .workList {
    font-size: 0.9rem;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }
  /* ----- projects---------- */
  .resumeProjects {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  /* ----- projects---------- */
  .resumeProjects .projectDesc {
    font-size: 0.9rem;
  }

  .resumeProjects .projectTools {
    font-size: 0.8rem;
    margin-top: 0.3rem;
  }
  .resumeProjects .projectSource {
    font-style: italic;
    text-decoration: underline;
  }

  .resumeProjects .projectHedear {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const resume = ({ location }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <ResumeContainer className="container">
      <div className="left">
        <div style={{ color: 'yellow' }} className="bg-img"></div>
        <div className="left-inner">
          <div className="info">
            <h2 className="name">{landing.name}</h2>
            <div className="jobStatus">{landing.jobStatus}</div>
            <div className="social-links">
              {/* <a href={landing.blogURL} target="blank">
                <FaBlogger aria-label="Blogger" />
              </a> */}
              <a href={landing.githubURL} target="blank">
                <FaGithub className="icons" aria-label="GitHub" />
              </a>
              <a href={landing.linkedinURL} target="blank">
                <FaLinkedin className="icons" aria-label="LinkedIn" />
              </a>
              <a href={landing.twitterURL} target="blank">
                <FaTwitter className="icons" aria-label="Twitter" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* ---------------------------------------------------------------- */}

      <div className="right">
        <div className="headerBtns">
          <Link className="inline-link archive-link" to="/">
            <button className="more-button">PORTFOLIO</button>
          </Link>
        </div>
        {/* --------------------------------- */}

        <div className="right-inner">
          {/* INTRODUCTION */}
          <div className="section">
            <div className="sectionTitle">
              <h4>{introduction.title}</h4>
            </div>
            <div className="sectionContent">{introduction.content}</div>
          </div>

          {/* SKILLS */}
          <div className="section">
            <div className="sectionTitle">
              <h4>{skills.title}</h4>
            </div>
            <div className="sectionContent">
              {skills.content.map(item => (
                <div key={item.id} className="skillCategory">
                  <strong>{item.title}: &nbsp;</strong>
                  <span>{item.content}</span>
                </div>
              ))}
            </div>
          </div>

          {/* EXPERIENCE */}
          <div className="section experience">
            <div className="sectionTitle">
              <h4>Experience</h4>
            </div>
            <div className="sectionContent ">
              {experience.map(item => (
                <div key={item.id}>
                  <div className="JobTitle">
                    <strong> {item.title} </strong>
                  </div>
                  <div className="JobSociety">{item.society}</div>
                  <div className="jobDate"> {item.date}</div>
                  <ul className="workList">
                    {item.tasks.map(task => (
                      <li>{task}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* EDUCATION */}
          <div className="section">
            <div className="sectionTitle">
              <h4>Education</h4>
            </div>
            <div className="sectionContent Resumeeducation">
              {education.map(item => (
                <div key={item.id} className="educationItem">
                  <h5>{item.bachlor}</h5>

                  <div className="date-location">
                    <span className="educDate">{item.date}</span>
                    &nbsp; | &nbsp;
                    <span className="educDate">{item.location}</span>
                  </div>

                  <a href={item.link} target="blanc">
                    {item.university}
                  </a>

                  {item.university2 ? (
                    <a href={item.link2} target="blanc">
                      {item.university2}
                    </a>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ResumeContainer>
  </ThemeProvider>
);
export default resume;
