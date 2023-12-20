const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './tests/**/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'firefox',
      url: 'http://www.oranum.com',
      show: false 
    },
    "ChaiWrapper": {
      "require": "codeceptjs-chai"
    },
  },
  "mocha": {
    "reporterOptions": {
        "reportDir": "output"
    }
  },
  include: {
    I: './steps_file.js'
  },
  name: 'codeceptjs-project'
}