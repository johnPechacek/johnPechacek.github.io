/**
 * Single source of truth for the career timeline page (/resume).
 *
 * `timeline` is authored newest-first. Each entry is a dated marker on the
 * spine — a role start or an education milestone. Roles carry `projects`,
 * which render as their own undated nodes hanging off the spine between
 * markers. Detail strings may contain inline <strong> and are rendered
 * with set:html.
 */

/** Contact details live in the site footer; this page only needs the PDF. */
export const resumePdf = '/John-Pechacek-Resume.pdf';

export const summary =
  'UX and product designer with 12 years across consumer mobile and institutional software, owning research-led design end to end, from study design and moderated testing through coded prototypes and developer handoff. Promoted from designer to design lead at Istation, mentoring five designers; a year embedded as a front-end engineer added technical depth and ability to bridge gaps between teams. At Moultrie, initiated and ran studies from small qualitative rounds through a national panel survey, and introduced the coded-prototyping method now used across the design team.';

export type TimelineProject = {
  name: string;
  detail: string;
};

export type TimelineEntry = {
  kind: 'role' | 'milestone';
  /** Year label shown in the spine gutter. */
  year: string;
  org: string;
  title: string;
  range: string;
  /** Small accent label before the date, e.g. 'certification'. */
  tag?: string;
  /** Short line under the title. */
  note?: string;
  /** Undated project nodes that hang off the spine under this marker. */
  projects?: TimelineProject[];
};

export const timeline: TimelineEntry[] = [
  {
    kind: 'role',
    year: '2024',
    org: 'Moultrie',
    title: 'Product Designer',
    range: 'November 2024 – Present',
    projects: [
      {
        name: 'Buck List',
        detail:
          'Led Phase 1 design of a system for identifying and tracking individual bucks across trail camera images: <strong>27% first-season adoption</strong>, <strong>300,000+ bucks cataloged</strong>, <strong>$11.8M projected FY27 revenue</strong>.',
      },
      {
        name: 'Coded prototyping',
        detail:
          "Initiated usability testing for Hunt Log and built the design team's first coded prototype in Claude Code, a working web app rather than a Figma mockup; taught the method to another designer, who has since run three studies with it.",
      },
      {
        name: 'Hunter decision-making research',
        detail:
          "Reframed the team's model of hunter decision-making through a multi-method research program: <strong>8 user interviews</strong>, a <strong>151-person panel survey</strong>, and competitive analysis across four apps.",
      },
      {
        name: 'National panel survey',
        detail:
          'Initiated and drafted a 19-question survey fielded to a third-party panel of cellular trail camera owners and intenders, then triangulated <strong>2,044 responses</strong> against internal panel data: closed gaps on hunt planning and confirmed no systematic skew on the behavioral measures driving the roadmap.',
      },
      {
        name: 'Cross-functional design workshop',
        detail:
          "Pitched, designed, and co-facilitated Moultrie's first cross-functional design workshop around three research-derived personas, with <strong>13 participants</strong> from product, engineering, marketing, QA, and customer experience; resulting prototype greenlit for development.",
      },
      {
        name: 'Navigate to Pin',
        detail:
          'Led end-to-end design of a navigation feature guiding hunters to cameras and stands with automatic trail logging and return-to-origin routing: <strong>86% intuitive-use rating</strong> and <strong>3.9 CSAT</strong> across <strong>121 beta testers</strong>.',
      },
    ],
  },
  {
    kind: 'role',
    year: '2023',
    org: 'Istation',
    title: 'Web Application Engineer',
    range: 'January 2023 – June 2024',
    projects: [
      {
        name: 'Web application audit',
        detail:
          'Audited the full web application for gaps between design specification and production implementation, device responsiveness, and accessibility; findings became a shared reference across product, QA, and engineering.',
      },
      {
        name: 'Lessons template design system',
        detail:
          'Owned the SCSS design-system architecture behind a lessons template app hosting thousands of K-12 lessons, holding visual consistency across <strong>5 themes</strong> and multiple device types; shipped Figma designs into production across dozens of components and modules.',
      },
    ],
  },
  {
    kind: 'milestone',
    year: '2021',
    org: 'Southern Methodist University',
    title: 'Certificate Program in User Experience Design',
    range: 'June 2021',
    tag: 'certification',
  },
  {
    kind: 'role',
    year: '2019',
    org: 'Istation',
    title: 'UX/UI Design Lead',
    range: 'June 2019 – January 2023',
    projects: [
      {
        name: 'Design mentorship',
        detail:
          'Mentored <strong>5 designers</strong> on technical craft and cross-functional collaboration, reviewing their work and unblocking delivery on deadline-critical projects.',
      },
      {
        name: 'Introduction to Computers',
        detail:
          'Designed a pre-K experience teaching mouse and tablet interaction before benchmark assessments; grounded in interviews with <strong>5 teachers</strong>, it addressed inaccurate assessment data caused by technology unfamiliarity in first-time computer users.',
      },
      {
        name: 'Pre-K Spanish reading suite',
        detail:
          'Created <strong>7 interactive pre-K Spanish reading activities</strong> unified by a gamified rewards system, covering <strong>25% of all pre-K U.S. reading standards</strong>; led cross-functional design thinking sessions that aligned educational experts, designers, and engineers on the curriculum concept and production plan.',
      },
    ],
  },
  {
    kind: 'role',
    year: '2012',
    org: 'Istation',
    title: 'Interactive Designer',
    range: 'November 2012 – June 2019',
    note: 'Where the 12 years started.',
  },
  {
    kind: 'milestone',
    year: '2012',
    org: 'University of Texas at Dallas',
    title: 'B.A. in Arts and Technology',
    range: 'August 2012',
    tag: 'education',
  },
];

export const skills = [
  {
    label: 'Design & Prototyping',
    items: [
      'Figma',
      'Design Systems',
      'Coded Prototyping',
      'Interaction Design',
      'Responsive & Cross-Platform Design',
    ],
  },
  {
    label: 'Research & Strategy',
    items: [
      'UX Research',
      'Moderated Usability Testing',
      'Survey Design & Analysis',
      'AI-Assisted Research Synthesis',
    ],
  },
  {
    label: 'Technical Fluency',
    items: [
      'HTML',
      'CSS',
      'SCSS',
      'JavaScript',
      'Git',
      'Accessibility (WCAG)',
      'Claude Code',
      'Chrome DevTools',
    ],
  },
];
