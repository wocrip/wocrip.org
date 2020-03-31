const req = require.context('.', true, /\.\/[^/]+\/[^/]+\/index\.js$/)

req.keys().forEach((key) => {
  const componentName = key.replace(/^.+\/([^/]+)\/index\.js/, '$1')
  module.exports[componentName] = req(key).default
})

// const reqAnimations = require.context('./basics/animations', true, /\.js$/)
//
// reqAnimations.keys().forEach((key) => {
//   const nameString = key.split('/').pop()
//   const componentName = nameString.replace(/(.*)\.[^.]+$/, '$1')
//   module.exports[componentName] = reqAnimations(key).default
// })
//
// const reqIcons = require.context('./basics/icons', true, /\.js$/)
//
// reqIcons.keys().forEach((key) => {
//   const nameString = key.split('/').pop()
//   const componentName = nameString.replace(/(.*)\.[^.]+$/, '$1')
//   module.exports[componentName] = reqIcons(key).default
// })
