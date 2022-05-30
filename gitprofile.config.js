// gitprofile.config.js

const config = {
  github: {
    username: 'amjeed-ay', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 5, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'ay-amjeed',
    twitter: 'ay_amjeed',
    facebook: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    website: 'https://amjeed-ay.github.io',
    phone: '',
    email: 'ay_amjeed@outlook.com',
  },
  skills: [
    'PHP',
    'Laravel',
    'JavaScript',
    'React.js',
    'Node.js',
    'MySQL',
    'Git',
    'Docker',
    'PHPUnit',
    'CSS',
    'Antd',
    'Tailwind',
    'Bootstrap',
    'Material UI',
  ],
  experiences: [
    {
      company: 'Smavators Ltd Nigeria',
      position: 'Full Stack Engineer',
      from: 'September 2020',
      to: 'Present',
    },
    {
      company: 'Smafleet.com',
      position: 'Web Application Developer',
      from: 'July 2019',
      to: 'August 2021',
    },
  ],
  education: [
    {
      institution: 'Abubakar Tafawa Balewa University Bauchi',
      degree: 'Bachelor of Engineering',
      from: '2018',
      to: '2024 (expected year of graduation)',
    },
    {
      institution: 'Abubakar Tatari Ali Polytechnic Bauchi',
      degree: 'National Diploma in Computer Engineering',
      from: '2015',
      to: '2017',
    },
    {
      institution: 'Government Day Technical College Bauchi',
      degree: 'Secondary School Certificate (SSC)',
      from: '2008',
      to: '2014',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '',
    limit: 0, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
    id: '', // Please remove this and use your own tag id or keep it empty
  },
  hotjar: {
    id: '', //  Please remove this and use your own id or keep it empty
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'corporate',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
};

export default config;
