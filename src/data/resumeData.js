export const DATA = {
  landin: {
    name: "Hey, I'm Malek",
    subtext: 'Developer  based in Tunisia',
    jobStatus: 'Software Engineer  @ Ministry of National Defense',
    twitterURL: 'https://twitter.com/MalekDbouba',
    blogURL: 'https://twitter.com/bchiang7',
    instaURL: 'https://www.instagram.com/bchiang7/',
    githubURL: 'https://github.com/db-malik',
    linkedinURL: 'https://www.linkedin.com/in/malek-dbouba/',
    resumeURL: 'http://brittanychiang.com/resume.pdf',
  },

  introduction: {
    title: 'introduction',
    content:
      'Hello! My name is Malek and I am a software developer With 3 years of experience. I`m passionate about creating innovative and intuitive solutions. I have had the chance to work on various projects. In my previous role as a military officer, I developed strong problem-solving skills and a dedication to teamwork, which have proven invaluable in my tech career. I always look for new challenges and opportunities to grow as a developer and make a positive impact through my work.',
  },
  // ------------------------------
  //          SKILLS
  // ------------------------------
  skills: {
    title: 'skills',
    content: [
      {
        id: 1,
        title: 'languages',
        content: 'JavaScript, Typescript, HTML5, CSS3, PHP, SQL',
      },
      {
        id: 2,
        title: 'Libraries & Frameworks',
        content:
          'React, Expressjs, Nextjs, Nodejs, jQuery, Bootstrap, MaterialUI, Laravel, React Testing, Jest',
      },
      {
        id: 3,
        title: 'Databases',
        content: 'MySQL, MongoDB',
      },
      {
        id: 3,
        title: 'Tools',
        content: 'Git & Github, Gitkraken, Jira, Docker, Postman',
      },
    ],
  },

  // ------------------------------
  //          EDUCATION
  // ------------------------------

  education: [
    {
      id: 0,
      bachlor: 'Engineer degree, Software Engineering',
      university: 'University of Technology and Management- SUPTECH',
      link: 'https://suptech.tn/',
      date: 'September 2017 - July 2020',
      location: 'Tunis, Tunisia',
      content: 'content...............',
    },

    {
      id: 1,
      bachlor: 'Engineers degree,  Science and Technologies of Weapons',
      university: 'Tunisia Military Academy',
      link: 'http://www.emat.defense.tn/index.php/en',
      date: 'September 2012 – July 2015',
      location: 'Tunis, Tunisia',
      content: 'content...............',
    },
    {
      id: 2,
      bachlor: 'Physical Chemistry Preparatory cycle',
      university: 'Preparatory Institute for Engineering Studies',
      link: 'http://www.emat.defense.tn/index.php/en',
      date: 'September 2010 - June 2012',
      location: 'Sousse, Tunisia',
      content: 'content...............',
    },
  ],

  // ------------------------------
  //          EXPERIENCE
  // ------------------------------

  experience: [
    {
      id: 1,
      title: 'Software developer',
      society: 'Ministry of National Defense',
      date: 'September 2020 - current | Tunis, Tunisia',
      first: 'Developing new functionalities proposed by the superior officers.',
      second: '',
      third: '',
    },

    {
      id: 2,
      title: 'IT Technical Support Officer',
      society: 'Tunisian Military Academy',
      date: 'September 2017 - August 2020 | Tunis, Tunisia',
      first: 'Control the IT infrastructure policy regarding the reorganization of the Army.',
      second: 'Troubleshot systems, diagnosing and solving hardware or software faults.',
      third: 'Supported the roll-out of new applications.',
    },
    {
      id: 3,
      title: 'Weapon Engineering Officer',
      society: 'Tunisian Army',
      date: 'July 2015 - August 2017 | Tunis, Tunisia',
      first:
        'Led a more than 100-person combat unit to ensure operational readiness, including training programs, human resources management, and planning.',
      second: 'Maintenance, Repair and Testing weapons functionalities.',
      third: 'Experience working with US, Spanish and British special forces units.',
    },
    {
      id: 4,
      title: 'Software Engineering Intern',
      society: 'Tunisian Company for Petroleum Activities  (ETAP)',
      link: 'http://www.etap.com.tn/',
      date: 'February 2020 - July 2020 | Tunis, Tunisia',
      content: 'content...............',
    },
    {
      id: 5,
      title: 'Mechanical Engineering Intern',
      society: 'The Mechanical Engineering Department (UME), ENSTA Paris Laboratories ',
      link: 'https://www.ensta-paris.fr/',
      date: 'March 2015 – July 2015 | Paris, France',
      content: 'content...............',
    },
  ],

  // ------------------------------
  //          PROJECTS
  // ------------------------------

  project: [
    {
      id: '1',
      title: 'Course Platform',
      descrption: 'Educational website for searching and visualizing e-books.',
      periode: '',
      framework: 'React.js | Strapi CMS | MongoDB',
      tools: 'Expres.js, Material UI, Redux-toolkit, styled Component',
      link: '',
      githubURL: '',
    },
    {
      id: '2',
      title: 'Ecommerce Web',
      descrption:
        'Responsive Full Stack Ecommerce application with Payments functionality. With, animations, the ability to add and edit products using a CMS.',
      periode: '',
      framework: 'React.js, Strapi CMS, MongoDB',
      tools: 'Strapi CMS, Stripe, Bootstrap, Redux, Mongoose',
      link: '',
      githubURL: 'https://github.com/db-malik/Ecommerce',
    },
    {
      id: '3',
      title: 'Social Media',
      descrption:
        'Developed a social app that helps users to post images, stories and keep connected to friends Added featured like: switch between dark/light modes, show and update user profile',
      periode: '',
      framework: 'React.js, Express.js, MySQL',
      tools: 'Sass, Redux, Context, Sequelize',
      link: '',
      githubURL: 'https://github.com/db-malik/social-media',
    },

    {
      id: '4',
      title: 'REST Countries API with color theme switcher',
      descrption:
        'Challenge from frontend mentor. Integrating  the REST Countries API to pull country data and display it like in the designs. Allow user to see all countries from the API on the homepage, Search for a country using an input field, Filter countries by region, Click on a country to see more detailed information on a separate page, Toggle the color scheme between light and dark mode.         ',
      periode: '',
      framework: 'React.js',
      tools: 'Axios, Styled-components, React-icons.',
      link: 'https://countries-info-de10hafbc-db-malik.vercel.app/',
      sourceLink:
        'https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca',
      githubURL: 'https://github.com/db-malik/countries-info-api',
    },
  ],
};
