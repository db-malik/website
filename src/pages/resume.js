import { Link } from 'gatsby';
import React from 'react';
import { DATA } from '../data/resumeData';
const { introduction, experience, skills, project, education } = DATA;
const resume = () => (
  <div>
    <div className="left">
      <div style={{ color: 'yellow' }} className="bg-img"></div>
      <div className="left-inner">
        <div className="info">
          <h2 className="name">{DATA.name}</h2>
          <div className="subtext">{DATA.subtext}</div>
          <div className="jobStatus">{DATA.jobStatus}</div>
          <div className="social-links">
            <a href={DATA.blogURL}>
              {/* <FaBlogger className={classes.icons} aria-label="Blogger" /> */}
            </a>
            <a href={DATA.githubURL}>
              {/* <FaGithub className={classes.icons} aria-label="GitHub" /> */}
            </a>
            <a href={DATA.linkedinURL}>
              {/* <FaLinkedin className={classes.icons} aria-label="LinkedIn" /> */}
            </a>
            <a href={DATA.twitterURL}>
              {/* <FaTwitter className={classes.icons} aria-label="Twitter" /> */}
            </a>
          </div>
        </div>
      </div>
    </div>
    {/* ---------------------------------------------------------------- */}

    <div className="right">
      <div className="headerBtns">
        <Link to="/">{/* <GoBackBtn text="portfolio" /> */}</Link>
        <div>
          <a
            className="resume-button"
            href="/resume_en.pdf"
            target="_blank"
            rel="noopener noreferrer">
            {/* <GoBackBtn text="one page PDF"></GoBackBtn> */}
          </a>
        </div>
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
                  {item.first && <li>{item.first}</li>}
                  {item.second && <li>{item.second}</li>}
                  {item.third && <li>{item.third}</li>}
                  {item.fourth && <li>{item.fourth}</li>}
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

                <Link to={item.link} target="blanc">
                  {item.university}
                </Link>

                <div className="date-location">
                  <span className="educDate">{item.date}</span>
                  &nbsp; | &nbsp;
                  <span className="educDate">{item.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PROJECT */}
        <div className="section">
          <div className="sectionTitle">
            <h4>Projects</h4>
          </div>
          <div className="sectionContent resumeProjects">
            {project.map(item => (
              <div key={item.id}>
                <div className="projectHedear">
                  <div className="projectTitle">
                    <a href={item.githubURL} target="blank">
                      {/* <FaGithub /> */}
                    </a>
                    {item.title}
                  </div>
                  <div>
                    {item.link ? (
                      <div className="projecLink">
                        <a href={item.link} target="blank">
                          {/* <FiExternalLink /> */}
                        </a>
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className="projectDesc">{item.descrption}</div>
                <div className="projectTools">
                  <span>
                    <strong>Tools:</strong>
                    {item.framework}, {item.tools}
                  </span>
                </div>
                <div>
                  {item.sourceLink ? (
                    <a className="projectSource" href={item.sourceLink}>
                      (Source)
                    </a>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default resume;
