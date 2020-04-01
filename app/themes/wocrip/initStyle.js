import { css } from 'styled-components'


// Remove first paint node
const firstPaint = document.querySelector('#firstPaint')
firstPaint.remove()

export default css`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  html {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-weight: 400;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.2em;
    color: #101017;
    word-break: normal;
  }

  @-moz-document url-prefix() {
    body {
      font-weight: lighter !important;
    }
  }

  body.noScroll, body.noScroll2, body.noScroll3 {
    overflow: hidden;
  }

  #app {
    min-height: 100%;
    min-width: 100%;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
  }
`
