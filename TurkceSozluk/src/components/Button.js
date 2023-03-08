import { TouchableOpacity } from 'react-native'
import styled from 'styled-components'
import { compose, color, size, space, flexbox, layout, borderRadius,position } from 'styled-system'

const Button = styled(TouchableOpacity)(
    compose(
        space,
        size,
        color,
        flexbox,
        layout,
        borderRadius,
        position
    )
);


Button.defaultProps = {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
}
export default Button