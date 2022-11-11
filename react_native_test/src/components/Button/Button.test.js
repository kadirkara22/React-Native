import React from "react"
import { fireEvent, render } from "@testing-library/react-native"
import Button from "./Button"
import styles from "./Button.style"

test('should match with snapshot', () => {
    const comp = render(<Button />);
    expect(comp).toMatchSnapshot();
})

test('should render title correctly', () => {
    const testTitle = "test"
    const comp = render(<Button title={testTitle} />)

    const buttonText = comp.getByTestId("button-title").children[0];
    // console.log(buttonText)
    expect(buttonText).toBe(testTitle)
})

test('should trigerr onPress', () => {
    const mockFunction = jest.fn();
    const comp = render(<Button onClick={mockFunction} />)

    const buttonTouchable = comp.getByTestId('button-touchable');
    fireEvent(buttonTouchable, 'press')

    expect(mockFunction).toBeCalled()
    //expect(mockFunction).toBeCalledTimes(2) birden fazla tıklama olduğunda

})

test('should render default given theme style', () => {
    const comp = render(<Button />)

    const buttonStyle = comp.getByTestId('button-touchable').props.style
    expect(buttonStyle).toMatchSnapshot(styles.primary.container)
})

test('should render given theme style', () => {
    const selectedTheme = 'secondary'
    const comp = render(<Button theme={selectedTheme} />)

    const buttonStyle = comp.getByTestId('button-touchable').props.style
    expect(buttonStyle).toMatchSnapshot(styles[selectedTheme].container)
})
