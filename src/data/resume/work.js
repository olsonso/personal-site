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
    highlights: [],
  },
  {
    name: 'New Relic',
    position: 'Senior Software Engineer',
    url: 'http://newrelic.com',
    startDate: '2019-07-01',
    summary: 'Senior software engineer on logging team',
    highlights: [
      'Developed and maintained UI interface for user to manage their logging and customize logging features',
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
