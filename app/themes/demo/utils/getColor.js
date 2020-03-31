import { lighten } from 'polished'


export const background = (props) =>
  props.theme.settings.reversed ?
    props.theme.colors.black :
    props.theme.colors.white

export const text = (props) =>
  props.theme.settings.reversed ?
    props.theme.colors.white :
    props.theme.colors.black

export const border = (props) =>
  props.theme.settings.reversed ?
    lighten(0.2, props.theme.colors.black) :
    lighten(0.6, props.theme.colors.black)
