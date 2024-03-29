import React from "react"
import { View, Text } from 'react-native';
import theme from "../utils/theme";
import Box from "./Box";
import Button from "./Button";
import { Bookmark, RotateCcw, Search } from "./icons";

function TabBar({ state, descriptors, navigation }) {
    return (
        <Box  flexDirection= 'row' bg="white"
          style={{
            shadowColor: '#000',
            shadowOpacity: 0.34,
            shadowRadius: 24,
             elevation: 6,
         
          }}
      
        >
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        // The `merge: true` option makes sure that the params inside the tab screen are preserved
                        navigation.navigate({ name: route.name, merge: true });
                    }
                };

                return (
                    label === 'Search' ? (
                        <Box p={15} mt={-15} bg="white" borderRadius="full" key={label}>
                            <Button size={56} bg="red" borderRadius="full" onPress={onPress} >
                                <Search stroke="white" />
                            </Button>
                        </Box>)
                        :
                        <Button pt={6} flexDirection="column" flex={1} height={56} onPress={onPress} key={label}>
                            {label === 'History' && <RotateCcw color={isFocused ? theme.colors.red : theme.colors.textLight} />}
                            {label === 'Favorite' && <Bookmark color={isFocused ? theme.colors.red : theme.colors.textLight} />}
                            <Box size={4} bg={isFocused ? "red" : "white"} mt={6} borderRadius="full" />
                        </Button>
                );
            })}
        </Box>
    );
}

export default TabBar;