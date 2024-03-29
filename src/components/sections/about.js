import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  .skills {
    margin-top: 50px;
  }
  .skills-content {
    display: flex;
    gap: 3vw;
    flex-wrap: wrap;
  }

  ul.skills-list {
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: 10px;
    /* border-radius: var(--border-radius); */
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
        border-radius: 40px;
      }
    }

    .img {
      /* border-radius: 30px; */
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = {
    framework: ['React', 'Next.js', 'Node.js', 'Bootstrap', 'MaterialUI'],
    language: ['JavaScript', 'TypeScript','Python', 'HTML5/CSS3','SQL'],
    outil: [ 'MySQL', 'Jest', 'Git','GitLab', 'Jira'],
  };

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hello! My name is Malek Software Engineer proficient in React, Next.js I enjoy creating
              things that live on the internet. I'm passionate about UI effects, animations, and
              developing dynamic, intuitive user interfaces. Experienced in different technologies,
              both backend and frontend using <a href="https://www.javascript.com/">Javascript</a>,{' '}
              <a href="https://www.typescriptlang.org/">Typescript</a>,{' '}
              <a href="https://nodejs.org/en">Python</a>.
            </p>
            <p>
              My goal is to build highly performant applications that solve real-world problems and
              provide users with an awesome experience.
            </p>

            <p>
              Well-organized, problem-solver, and independent employee with great attention to
              detail. Fan of football, TV shows, and camping.
            </p>
          </div>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/cvPhoto.png"
              width={400}
              quality={100}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
      <StyledText>
        <div className="skills">
          <h3 className="skills-title">Skills</h3>
          <div className="skills-content">
            <ul className="skills-list">
              {skills && skills.framework.map((skill, i) => <li key={i}>{skill}</li>)}
            </ul>

            <ul className="skills-list">
              {skills && skills.language.map((skill, i) => <li key={i}>{skill}</li>)}
            </ul>
            <ul className="skills-list">
              {skills && skills.outil.map((skill, i) => <li key={i}>{skill}</li>)}
            </ul>
          </div>
        </div>
      </StyledText>
    </StyledAboutSection>
  );
};

export default About;
