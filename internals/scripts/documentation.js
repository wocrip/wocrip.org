/**
 * This script will generate the documentation navigation from documentation folder containing all .md files
 * From the JSOn file 'sideNavTree', the code in app index.js will add all necessary routes to navigate through
 */
const path = require('path')
const fs = require('fs')
const dirTree = require('directory-tree')

/*
* How to create a documentation application?
*
* 1. In app/containers add a folder named 'DocumentationPages'
* 2. Add folders and subfolders containning .md files
* The folder structure and names matters as they will be used to generate the navigation tree and route path
*/
const dirPath = path.join(__dirname, '/../../app/containers/DocumentationPages')
const filePath = path.join(dirPath, 'sideNavTree.js')

if (fs.existsSync(dirPath)) {
  const tree = dirTree(dirPath, { extensions: /\.md/, exclude: /tests/ })

  // Exporting the JSON data to ease its use to build the navigation
  const final = `/* eslint-disable */ \nexport const sideNavTree = ${JSON.stringify(tree, null, '\t')}`

  fs.writeFile(filePath, final, (err) => {
    if (err) console.log(err) // eslint-disable-line no-console
  })
}
