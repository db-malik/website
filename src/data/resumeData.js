export const DATA = {
  landing: {
    name: "Hey, I'm Malek",
    jobStatus: 'Software Engineer based in Tunisia',
    twitterURL: 'https://twitter.com/MalekDbouba',
    blogURL: '',
    instaURL: '',
    githubURL: 'https://github.com/db-malik',
    linkedinURL: 'https://www.linkedin.com/in/malek-dbouba/',
    resumeURL: '',
  },

  introduction: {
    title: 'introduction',
    content:
      'Hello! My name is Malek.  Software engineer experienced in  web development. Proficient in modern technologies such as React, NodeJs. Experience in teamwork and project management. Problem solving and effective communication skills. Ability to learn new technologies quickly and adapt to change.',
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
        content: 'JavaScript, TypeScript, HTML5, CSS3, PHP, SQL',
      },
      {
        id: 2,
        title: 'Libraries & Frameworks',
        content:
          'React, Next.js, Redux, jQuery, Express.js, Bootstrap, Node.js, Vuejs, Laravel, Material UI, Jest, React-testing,',
      },

      {
        id: 4,
        title: 'Tools',
        content: 'Git & Github, Slack, Jira, Docker, Postman',
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
      date: '2016 - 2019',
      location: 'Tunis, Tunisia',
      content: 'content...............',
    },

    {
      id: 1,
      bachlor: 'Engineers degree,  Science and Technologies of Weapons',
      university: 'Tunisia Military Academy ',
      university2: 'Mechanical Unit ENSTA-Paris',
      link: 'http://www.emat.defense.tn/index.php/en',
      link2: 'https://www.ensta-paris.fr/',
      date: '2012 – 2015',
      location: 'Tunis / Paris',
      content: 'content...............',
    },
    {
      id: 2,
      bachlor: 'Physical Chemistry Preparatory cycle',
      university: 'Preparatory Institute for Engineering Studies',
      link: 'http://www.emat.defense.tn/index.php/en',
      date: '2010 - 2012',
      location: 'Tunis, Tunisia',
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
      date: 'January 2020 - current | Tunis, Tunisia',
      tasks: [
        'Conducted unit tests to maintain code quality and identify and fix issues, improving platform stability and reducing maintenance costs.',
        'Using MaterialUI to enhance an onligne education platform for a better UX/UI.',
        'Developed reusable React components and modules to streamline development and improve code maintainability.',
      ],
    },

    {
      id: 2,
      title: 'IT technical support',
      society: 'Tunisian Military Academy',
      date: 'September 2017 - December 2019 | Tunis, Tunisia',
      tasks: [
        'Controls the IT infrastructure policy',
        'Supported the roll-out of new applications',
        'Troubleshot systems, diagnose and resolve hardware or software failures',
      ],
    },
    {
      id: 3,
      title: 'Weapon Engineering Officer',
      society: 'Tunisian Army',
      date: 'July 2015 - August 2017 | Tunis, Tunisia',
      tasks: [
        'Lead units of 100+ people to ensure operational readiness including training programs, human resource management and planning',
        'Test the operation, repair and maintain the weapons.',
      ],
    },
    {
      id: 4,
      title: 'Software Engineering Intern',
      society: 'Tunisian Company for Petroleum Activities  (ETAP)',
      link: 'http://www.etap.com.tn/',
      date: 'Januray 2019 - June 2019 | Tunis, Tunisia',
      tasks: [
        'Design and development of a human resources management application (front-end VueJs, back-end Laravel, database MySQL)',
      ],
      content: 'content...............',
    },
    {
      id: 5,
      title: 'Mechanical Engineering Intern',
      society: 'The Mechanical Engineering Department (UME), ENSTA Paris',
      link: 'https://www.ensta-paris.fr/',
      date: 'March 2015 – July 2015 | Paris, France',
      tasks: [
        'Study of the thermomechanical behavior of shape memory alloys by identifying their functional characteristics.',
      ],
      content: 'content...............',
    },
  ],

  // ------------------------------
  //          PROJECTS
  // ------------------------------

  // project: [
  //   {
  //     id: 1,
  //     title: 'Course Platform',
  //     descrption: 'Educational website for searching and visualizing e-books.',
  //     periode: '',
  //     framework: 'React.js | Strapi CMS | MongoDB',
  //     tools: 'Expres.js, Material UI, Redux-toolkit, styled Component',
  //     link: '',
  //     githubURL: '',
  //   },
  //   {
  //     id: 2,
  //     title: 'Ecommerce Web',
  //     descrption:
  //       'Responsive Full Stack Ecommerce application with Payments functionality. With, animations, the ability to add and edit products using a CMS.',
  //     periode: '',
  //     framework: 'React.js, Strapi CMS, MongoDB',
  //     tools: 'Strapi CMS, Stripe, Bootstrap, Redux, Mongoose',
  //     link: '',
  //     githubURL: 'https://github.com/db-malik/Ecommerce',
  //   },
  //   {
  //     id: 3,
  //     title: 'Social Media',
  //     descrption:
  //       'Developed a social app that helps users to post images, stories and keep connected to friends Added featured like: switch between dark/light modes, show and update user profile',
  //     periode: '',
  //     framework: 'React.js, Express.js, MySQL',
  //     tools: 'Sass, Redux, Context, Sequelize',
  //     link: '',
  //     githubURL: 'https://github.com/db-malik/social-media',
  //   },

  //   {
  //     id: 4,
  //     title: 'REST Countries API with color theme switcher',
  //     descrption:
  //       'Challenge from frontend mentor. Integrating  the REST Countries API to pull country data and display it like in the designs. Allow user to see all countries from the API on the homepage, Search for a country using an input field, Filter countries by region, Click on a country to see more detailed information on a separate page, Toggle the color scheme between light and dark mode.         ',
  //     periode: '',
  //     framework: 'React.js',
  //     tools: 'Axios, Styled-components, React-icons.',
  //     link: 'https://countries-info-de10hafbc-db-malik.vercel.app/',
  //     sourceLink:
  //       'https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca',
  //     githubURL: 'https://github.com/db-malik/countries-info-api',
  //   },
  // ],
};
