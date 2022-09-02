const ghpages = require('gh-pages')

ghpages.publish(
  'public',
  {
    branch: 'dev',
    repo: 'https://github.com/Svcg17/Svcg17.github.io',
  },
  () => {
    console.log('Deploy Complete!')
  }
)
