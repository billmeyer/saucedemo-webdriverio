var Steps = require('screener-runner/src/steps');

module.exports = {
  // full repository name for your project:
  projectRepo: 'saucedemo/sample-test-suite-repo',

  // this example assumes Environment Variables listed below exist on your system:
  apiKey: process.env.SCREENER_API_KEY,

  // array of UI states to capture visual snapshots of.
  // each state consists of a url and a name.
  states: [
    {
      url: 'https://www.saucedemo.com',
      name: 'Home Page UI State'
    },
    {
      url: 'https://www.saucedemo.com',
      name: 'Inventory UI State',
      steps: new Steps()
          .setValue('#user-name', 'standard_user')
          .setValue('#password', 'secret_sauce')
          .click('input[type=submit]')
          .snapshot('Inventory Screen')
          .end()
    }
  ]
};
