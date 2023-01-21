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
    border-radius: var(--border-radius);
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
      }
    }

    .img {
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
    framework: ['React', 'Next.js', 'Node.js', 'Express.js', 'Bootstrap', 'MaterialUI'],
    language: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'SASS', 'SQL'],
    outil: ['PHP', 'Laravel', 'MySQL', 'MongoDB', 'Docker', 'Git/GitHub'],
  };

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hello! My name is Malek. I am a Software Engineer based in Tunisia. I enjoy creating
              things that live on the internet. I'm passionate about UI effects, animations, and
              developing dynamic, intuitive user interfaces. I've worked using different
              technologies, both backend and frontend. I'm currently working using{' '}
              <a href="https://www.javascript.com/">Javascript</a>,{' '}
              <a href="https://www.typescriptlang.org/">typescript</a>,{' '}
              <a href="https://www.php.net/">PHP</a>.
            </p>
            <p>
              My goal is to build highly performant applications that solve real-world problems and
              provide users with an awesome experience.
            </p>

            <p>
              Well-organized, problem-solver, and independent employee with great attention to
              detail. Fan of football, TV shows, and outdoor activities like traveling and camping.
            </p>

            {/* <p>
              I also recently{' '}
              <a href="https://www.newline.co/courses/build-a-spotify-connected-app">
                launched a course
              </a>{' '}
              that covers everything you need to build a web app with the Spotify API using Node
              &amp; React.
            </p> */}
          </div>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={95}
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
