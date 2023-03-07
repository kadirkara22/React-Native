import { View } from 'react-native'
import styled from 'styled-components'
import { compose, color, size, space, flexbox, borderRadius, layout } from 'styled-system'

const Box = styled(View)(
  compose(
    space,
    size,
    color,
    flexbox,
    layout,
    borderRadius
  )
)


export default Box