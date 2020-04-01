import {
  lighten,
  darken,
  rgba,
  mix,
} from 'polished'

import { colors } from '../colors'


const frontColor = colors.white
const backColor = colors.black

const findColor = ({ status, color }) => {
  if (status && colors[status]) return colors[status]
  if (color) return colors[color] || color
  return null
}

export default {
  background: ({ reversed, status, color }) => {
    const baseColor = reversed ? backColor : frontColor
    return findColor({ status, color }) || baseColor
  },

  text: ({ reversed, status, color }) => {
    const baseColor = reversed ? frontColor : backColor
    return findColor({ status, color }) || baseColor
  },


  buttonBackground: ({ status, color }, themeColors) => {
    if (color) return findColor({ status, color })
    return themeColors ? themeColors.primary : colors.black
  },

  // buttonRadioBackgroundActive: ({ reversed, status, color }) => {
  //   const baseColor = reversed ? backColor : frontColor
  //   const foundColor = findColor({ status, color }) || colors.primary
  //   return saturate(0.1, mix(0.2, baseColor, foundColor))
  // },

  // buttonInsetShadow: ({ reversed, insetColor }) => {
  //   const baseColor = reversed ? backColor : frontColor
  //   return insetColor ? findColor({ color: insetColor }) : baseColor
  // },

  buttonBackgroundDisabled: () => colors.gray,

  buttonText: ({ status, textColor }) => findColor({ status, color: textColor })
    || colors.white,

  buttonText_withNoBackground: ({ status, color }) => findColor({ status, color })
    || colors.black,

  buttonRadioLabel: ({ status, textColor }) => findColor({ status, color: textColor })
    || colors.black,

  // buttonTextDisabled: () => colors.black,


  buttonDropzone: ({ status, color }) => findColor({ status, color })
    || colors.black,

  buttonDropzoneBackground: ({ status, color }) => {
    const baseColor = findColor({ status, color }) || colors.gray
    return rgba(baseColor, 0.15)
  },


  inputText: ({ reversed, textColor }) => {
    const baseColor = reversed ? frontColor : backColor
    return findColor({ color: textColor }) || baseColor
  },

  inputPlaceholder: () => backColor,

  inputBackground: ({ reversed, color }) => {
    const baseColor = reversed
      ? lighten(0.05, backColor)
      : lighten(0.87, backColor)
    return findColor({ color }) || baseColor
  },

  inputBorder: ({ reversed, status, color }) => {
    const baseColor = reversed ? colors.transparent : colors.transparent
    return findColor({ status, color }) || baseColor
  },

  inputBorderSearch: () => rgba(colors.deepblue, 0.0),

  inputBorderSearchFocus: () => rgba(colors.deepblue, 0.2),

  inputBorderFocus: ({ status, color }) => {
    const baseColor = colors.deepblue
    return findColor({ status, color }) || baseColor
  },

  inputBorderFocusShadow: ({ status, color }) => {
    const baseColor = findColor({ status, color }) || colors.deepblue
    return rgba(baseColor, 0.2)
  },

  inputInvisbleBackground: ({ reversed, color }) => {
    const baseColor = reversed
      ? lighten(0.05, colors.deepblue)
      : lighten(0.25, colors.deepblue)
    return findColor({ color }) || baseColor
  },

  cardShadow: ({
    status,
    onColor,
    reversed,
    cardShadowColor,
  }) => {
    let baseColor = reversed ? colors.black : lighten(0.7, backColor)
    if (onColor) baseColor = darken(0.3, onColor)
    return findColor({ status, color: cardShadowColor }) || baseColor
  },

  cardBackground: ({ reversed, cardColor }) => {
    const baseColor = reversed ? backColor : frontColor
    return cardColor ? findColor({ color: cardColor }) : baseColor
  },

  cardText: ({ reversed, cardTextColor }) => {
    const baseColor = reversed ? frontColor : backColor
    return cardTextColor ? findColor({ color: cardTextColor }) : baseColor
  },

  cardBorder: ({
    status,
    onColor,
    reversed,
    cardBorderColor,
  }) => {
    let baseColor = reversed ? colors.black : lighten(0.7, backColor)
    if (onColor) baseColor = darken(0.3, onColor)
    return findColor({ status, color: cardBorderColor }) || baseColor
  },

  cardTitle: ({ reversed, cardTitleColor }) => {
    const baseColor = reversed ? frontColor : backColor
    return cardTitleColor ? findColor({ color: cardTitleColor }) : baseColor
  },

  cardSubtitle: ({ reversed, cardTitleColor }) => {
    let baseColor = reversed ?
      rgba(frontColor, 0.5) : rgba(backColor, 0.5)
    if (cardTitleColor) baseColor = rgba(cardTitleColor, 0.5)
    return baseColor
  },


  alertBackground: ({ reversed, status, color }) => {
    const baseColor = reversed ? backColor : frontColor
    const foundColor = findColor({ status, color }) || baseColor
    return mix(0.93, baseColor, foundColor)
  },

  alertText: ({ reversed, status, color }) => {
    const baseColor = reversed ? backColor : frontColor
    return findColor({ status, color }) || baseColor
  },

  alertBorder: ({ reversed, status, color }) => {
    const foundColor = color ? findColor({ status, color }) : colors.deepblue
    return rgba(foundColor, 0.3)
  },

  switchColor: ({ color }) => color ? findColor({ color }) : colors.green,

  switchBackground: ({ color, light }) => {
    const percent = light ? 0.25 : 0
    const foundColor = color ? findColor({ color }) : colors.green
    return mix(percent, frontColor, foundColor)
  },

  // switchShadow: ({ color }) => {
  //   const foundColor = color ? findColor({ color }) : colors.green
  //   return mix(0.2, backColor, foundColor)
  // },


  tagColor: ({ color }) => findColor({ color }) || colors.deepblue,

  tagBackground: ({ color }) => {
    const foundColor = color ? findColor({ color }) : colors.deepblue
    return mix(0.85, frontColor, foundColor)
  },

  tagBorder: ({ color }) => color ? findColor({ color }) : colors.black,
}
