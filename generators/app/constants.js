const chalk = require('chalk');

module.exports.KICKOFF_MESSAGE = `${chalk.cyan('\n        ║║║            ║║║       ') +
  chalk.cyan('\n       ║    ║║║    ║║║    ║      ') +
  chalk.cyan('\n       ║       ║║║║       ║       ') +
  chalk.cyan('\n        ║    ║║ ║║ ║║    ║           ') +
  chalk.cyan('\n        ║║║ ║║║║  ║║║║ ║║║        ') +
  chalk.cyan('\n     ║║║ ║ ║          ║ ║ ║║║          ') +
  chalk.blue('██╗  ██╗██╗ ██████╗██╗  ██╗ ') +
  chalk.white('██████╗ ███████╗███████╗') +
  chalk.cyan('\n   ║║    ║║║   ║║║║   ║║║    ║║        ') +
  chalk.blue('██║ ██╔╝██║██╔════╝██║ ██╔╝') +
  chalk.white('██╔═══██╗██╔════╝██╔════╝') +
  chalk.cyan('\n  ║       ║   ║║║║║║   ║       ║       ') +
  chalk.blue('█████╔╝ ██║██║     █████╔╝ ') +
  chalk.white('██║   ██║█████╗  █████╗') +
  chalk.cyan('\n   ║║    ║║║   ║║║║   ║║║    ║║        ') +
  chalk.blue('██╔═██╗ ██║██║     ██╔═██╗ ') +
  chalk.white('██║   ██║██╔══╝  ██╔══╝') +
  chalk.cyan('\n     ║║║ ║ ║          ║ ║ ║║║          ') +
  chalk.blue('██║  ██╗██║╚██████╗██║  ██╗') +
  chalk.white('╚██████╔╝██║     ██║') +
  chalk.cyan('\n        ║║║ ║║║║  ║║║║ ║║║             ') +
  chalk.blue('╚═╝  ╚═╝╚═╝ ╚═════╝╚═╝  ╚═╝ ') +
  chalk.white('╚═════╝ ╚═╝     ╚═╝') +
  chalk.cyan('\n        ║    ║║ ║║ ║║    ║         ') +
  chalk.cyan('\n       ║       ║║║║       ║          ') +
  chalk.cyan('\n       ║    ║║║    ║║║    ║        ') +
  chalk.cyan('\n        ║║║            ║║║      ')}\n\n  ${chalk.blue.bold(
  'Welcome to the React kickoff'
)}\n\n  `;

const LINTER_IGNORE_PATH = {
  src: 'eslintignore',
  destination: '.eslintignore'
};

const SCSS_PATH = 'src/scss';
// TODO: check how to avoid using "wolox" keyword here
const CI_PATH = '.woloxci/';
const SCRIPTS_PATH = 'scripts';

const RESCRIPTS_PATH = {
  src: 'rescriptsrc.js',
  destination: '.rescriptsrc.js'
};

const NPMRC_PATH = {
  src: 'npmrc',
  destination: '.npmrc'
};

module.exports.BABELRC_PATH = {
  src: 'babelrc',
  destination: '.babelrc'
};

module.exports.FILES = [
  'pull_request_template.md',
  'README.md',
  'Jenkinsfile',
  '.stylelintrc.js',
  '.env.development',
  `${SCRIPTS_PATH}/build.js`,
  `${SCRIPTS_PATH}/start.js`,
  `${SCRIPTS_PATH}/utils.js`,
  CI_PATH,
  SCSS_PATH
];

module.exports.TEMPLATE_FILES = [
  // Insert here all template ejs files
  '.eslintrc.js',
  '.babelrc.js',
  'src/index.js'
];

module.exports.FILES_TO_DESTINATION = [LINTER_IGNORE_PATH, RESCRIPTS_PATH, NPMRC_PATH];

module.exports.CI_CONFIG_FILE = `${CI_PATH}/config.yml`;

module.exports.BOOTSTRAP_TYPES = [{ name: 'Clean', value: false }, { name: 'Customized', value: true }];

module.exports.DEV_DEPENDENCIES = [
  'eslint-plugin-import@2.18.2',
  'eslint-plugin-jsx-a11y@6.2.1',
  'eslint-plugin-prettier@3.1.0',
  'eslint-plugin-react@7.13.0',
  'eslint-plugin-react-native@3.5.0',
  'eslint-plugin-babel@5.3.0',
  'eslint-config-wolox-react@2.0.0',
  'eslint-config-wolox@3.0.2',
  'stylelint-config-wolox@1.0.5',
  'stylelint-no-indistinguishable-colors@1.2.1',
  'stylelint-scss@3.5.4',
  'stylelint@9.10.1',
  'husky@^2.3.0',
  'prettier@1.17.1',
  'prettier-eslint@8.8.2',
  'prettier-stylelint@0.4.2',
  'prettier-eslint-cli@4.7.1',
  'react-hot-loader@^4.6.1',
  '@rescripts/cli@^0.0.7',
  'prop-types@^15.6.2',
  '@babel/plugin-proposal-optional-chaining@^7.2.0',
  'env-cmd@^9.0.3',
  'aws-deploy-script-fe@0.0.4',
  'chalk@2.4.2',
  'minimist@1.2.0',
  'postcss-syntax@^0.36.2',
  'postcss-html@^0.36.0'
];

module.exports.DEPENDENCIES = [
  'postcss@^7.0.7',
  'react@^16.6.3',
  'react-dom@^16.6.3',
  'wolox-equalizer@^0.0.3',
  'node-sass@^4.11.0'
];
