import {
  app as themeApp,
  settings as themeSettings,
  globalStyle as themeGlobalStyle,

  auth as themeAuth,
  colors as themeColors,
  displayHeadings as themeDisplayHeadings,
  form as themeForm,
  headings as themeHeadings,
  link as themeLink,
  nav as themeNav,
  styles as themeStyles,
} from './themes/ceacle'
import getColorApp from './themes/ceacle/utils/getColor'
import Logo from 'components-ceacle/logos/Modo'


export const app = {
  ...themeApp,
  subAppName: 'modo',
  logo: Logo,
}

export const settings = {
  ...themeSettings,
}

export const globalStyle = {
  ...themeGlobalStyle,
}

//
// From A to Z
//

export const auth = {
  ...themeAuth,
}

export const colors = {
  ...themeColors,
  logo: themeColors.deepblue,
  primary: themeColors.deepblue,
  subBrand: themeColors.deepblue,
}

export const displayHeadings = {
  ...themeDisplayHeadings,
}

export const form = {
  ...themeForm,
}

export const headings = {
  ...themeHeadings,
}

export const link = {
  ...themeLink,
}

export const nav = {
  ...themeNav,
}

export const styles = {
  ...themeStyles,
}

export const getColor = {
  ...getColorApp,
}
