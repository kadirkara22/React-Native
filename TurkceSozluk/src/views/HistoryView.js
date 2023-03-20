import React from 'react'
import { StatusBar } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import Box from '../components/Box'
import Text from '../components/Text'
const HistoryView = () => {
    function FocusAwareStatusBar(props) {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar {...props} /> : null;
}
    return (
        <Box flex={1}>
                <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#F6F8FA"/>
            <Text>history</Text>
        </Box>
    )
}

export default HistoryView
