/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Quil',
    position: 'Product Manager',
    url: 'https://getquil.com',
    startDate: '2022-01-01',
    summary: 'Quil provides income protection when you need it most',
    highlights: [
      'Drove product development end-to-end for strategizing brand new insurance product to market.',
      'Increased conversions by 12% with A/B testing by Identified key drop off point in sign up flow.',
      'Led full Stripe integration automating billing subscription and managing disputes.',
      'Conducted user research to identify key user behavior and needs related to insurance products in development of launching new MVP product successfully onboarding over 16,000 customers.',
      'Developed and monitored key product metrics including user acquisition, retention and revenue to identify areas for improvement and clearly communicate product data to leadership.',
      'Cultivated a culture of collaboration with cross-function teams, including design, engineering, marketing and partners to align product development and launch with regulatory compliance.',
    ],
  },
  {
    name: 'New Relic',
    position: 'Senior Software Engineer',
    url: 'http://newrelic.com',
    startDate: '2020-07-01',
    endDate: '2022-01-01',
    summary: 'Senior software engineer on logging team',
    highlights: [
      'Strategized and built stable and maintainable React app by presenting beneficial business case for converting entire code base to TypeScript resulting in a large decrease in production bugs.',
      'Helped lead and conduct user research through video guided user research sessions identifying key areas of improvement on key logging product.',
      'Active leader and mentor for 3 engineers continually training and teaching best practices through pair programing, pull request reviews and leveraging opportunities for growth.',
    ],
  },
  {
    name: 'Acorns',
    position: 'Software Engineer',
    url: 'https://acrons.com',
    startDate: '2018-01-01',
    endDate: '2020-01-01',
    summary: 'Investing app',
    highlights: [
      'Build web platform for retirement accounts',
      'Strategically maintanged and groomed prioritized backlog for retirement platform.',
      'Active leader in product discussions bringing engineering background and knowledge for creating product strategy and road map planning.',
      'Led and developed end of year "Year in Review" increasing recurring contributions by 21%.',
    ],
  },
  {
    name: 'XPO Logicists',
    position: 'Software Engineer',
    url: 'http://enveritas.org',
    startDate: '2016-09-01',
    endDate: '2018-01-01',
    summary: 'Shipping and logistics',
    highlights: [
      'Continuous integration of newest technologies to customer facing apps used to ship on average 160,000 shipments every day. Top contributor for new designs, bug fixes, and technology enhancements. Collaborate with UX designers, business analysts, and fellow developers on a daily basis to ensure high quality code and optimization.',
    ],
  },
  {
    name: 'CDK Gloabl',
    position: 'Software Engineer',
    url: 'https://zenysis.com',
    startDate: '2016-02-01',
    endDate: '2016-03-01',
    summary: 'Engineer',
    highlights: [
      'Created intern app for college inters to stay connected',
      'Lead project to implemented Okta integration',
    ],
  },
];

export default work;
