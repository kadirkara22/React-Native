import { View } from 'react-native'
import styled from 'styled-components'
import { compose, color, size, space,  border, flexbox, borderRadius, layout } from 'styled-system'

const Box = styled(View)(
  compose(
    space,
    size,
    color,
    flexbox,
    layout,
    borderRadius,
      border,
    
  )
)


export default Box