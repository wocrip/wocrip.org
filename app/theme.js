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
} from './themes/wocrip'
import getColorApp from './themes/wocrip/utils/getColor'
import Logo from 'components/logos/wocrip'


export const app = {
  ...themeApp,
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
