import { isDev } from 'utils/helpers'
import initStyle from './initStyle'
import alertStyle from './styles/alertStyle'
import buttonStyle from './styles/buttonStyle'
import buttonGroupRadioStyle from './styles/buttonGroupRadioStyle'
import buttonRadioStyle from './styles/buttonRadioStyle'
import cardStyle from './styles/cardStyle'
import inputStyle from './styles/inputStyle'
import selectStyle from './styles/selectStyle'
import switchStyle from './styles/switchStyle'
import rangeSliderStyle from './styles/rangeSliderStyle'
import tagStyle from './styles/tagStyle'
import titleStyle from './styles/titleStyle'
import tooltipStyle from './styles/tooltipStyle'
import languages from './languages'

export { colors } from './colors'


export const app = {
  companyName: 'Ceacle LLC',
  mainAppName: 'ceacle',
  mainAppUrl: 'https://ceacle.com', // Start with https://
  subApp: true, // If sub of an another application, for instance, account.ceacle.com is subApp of cealce.com
  subAppName: 'modo',
  cookieAuthDomain: '.ceacle.com',
  cookieMainDomain: '.ceacle.com',
  legalEmail: 'legal@ceacle.com',
  intl: true,
  lang: 'en',
  languages,
}

export const settings = {
  activeTheme: 'ceacle',
  reversed: false,

  // Radius used for buttons and corners
  radius: 8, // px

  text: {
    size: 1, // em
    lineHeight: 1.5, // em
  },

  container: {
    maxwidth: '1200px',
  },

  zindex: {
    below: -1,
    appNavigation: 10,
    dropdown: 20,
    overlay: 100, // Above content
    tooltip: 500,
    modal: {
      content: 1000,
      alert: 6000,
    },
    navigation: 2000,
  },
}

export const globalStyle = initStyle

//
// From A to Z
//

export const auth = {
  inAppSignIn: false,
  signInBaseUrl: isDev ? 'http://localhost:3040' : 'https://account.ceacle.com',
  profileBaseUrl: isDev ? 'http://localhost:3050' : 'https://ceacle.com',
  accountBaseUrl: isDev ? 'http://localhost:3040' : 'https://account.ceacle.com',
  accountPath: '/',
}

export const displayHeadings = {
  h1: 5, // rem
  h2: 4,
  h3: 3,
  h4: 2.25,
}

export const form = {
  size: 1, // px
  button: {
    size: 1, // px
    transition: true,
    border: null, // px
    inShadow: false,
    outShadow: false,
    // :hover state
    hover: false,
    // :focus state
    focus: {
      borderColor: true,
    },
    // :active state
    active: false,
  },
  input: {
    size: 1, // px
    transition: true,
    inShadow: false,
    outShadow: false,
    background: true,
    borderSize: 2, // px
    // :hover state
    hover: null,
    // :focus state
    focus: {
      borderColor: true,
    },
    // :invalid state
    invalid: null,
  },
}

export const headings = {
  h1: 3.5, // rem
  h2: 3,
  h3: 2.5,
  h4: 2,
  h5: 1.5,
  h6: 1,
}

export const link = {
  textDecoration: 'none',
}

export const nav = {
  shadow: false,
  size: 0.9,
  reversed: false,
  heightSpace: 0.9,
  // Display toggle navigation only on responsive small screen
  toggleNavResponsive: true,
  navbarItems: false,
  signin: {
    display: true,
    text: 'Sign in',
  },
  signup: {
    display: false,
    text: 'Sign up',
  },
}


export const styles = {
  alert: alertStyle({ settings }),
  button: buttonStyle({ settings }),
  buttonGroupRadio: buttonGroupRadioStyle({ settings }),
  buttonRadio: buttonRadioStyle({ settings }),
  card: cardStyle({ settings }),
  input: inputStyle({ settings }),
  select: selectStyle({ settings }),
  switch: switchStyle({ settings }),
  slider: rangeSliderStyle({ settings }),
  tag: tagStyle({ settings }),
  titleStyle: titleStyle({ settings }),
  tooltip: tooltipStyle({ settings }),
}
