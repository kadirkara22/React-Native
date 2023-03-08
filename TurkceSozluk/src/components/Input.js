import { TextInput } from 'react-native'
import styled from 'styled-components'
import { compose, color, size, space, typography,borderRadius,shadow } from 'styled-system'
import theme from "../utils/theme"
const Input = styled(TextInput).attrs(props=>({
  placeholderTextColor:theme.colors[props.placeholderTextColor] || '#999'
}))(
  compose(
    space,
    size,
    color,
    typography,
borderRadius,
shadow
  )
)


export default Input