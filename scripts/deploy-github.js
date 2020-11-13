const ghpages = require('gh-pages')

// replace with your repo url
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
