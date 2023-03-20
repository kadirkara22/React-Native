import React from 'react'
import {Keyboard} from 'react-native'
import Box from "./Box"
import Text from "./Text"
import Button from "./Button"
import Input from "./Input"
import {Search,Close} from "./icons"
import theme from "../utils/theme";
const SearchBox = ({onChangeFocus}) => {
    const [value, setValue] = React.useState('')
    const [isFocus,setFocus]= React.useState(false)
   React.useEffect(() => {
    onChangeFocus(isFocus)
  }, [isFocus, onChangeFocus])


    const onCancel=()=>{
        setFocus(false)
        Keyboard.dismiss()
    }
    const onClear = () => {
    setValue('')
  }
    return (
        <Box flexDirection="row" alignItems= 'center'>
       <Box flex={1}>
         <Input
           style={{
            shadowColor: '#000',
            shadowOpacity: 0.34,
            shadowRadius: 24,
             elevation: 6,
            shadowOffset: {
              width: 0,
              height: 4
            }
          }}
      
         bg="white"
         height={52}
         color="textDark"
         borderWidth={1}
          borderColor={isFocus ? '#D1D1D1' : 'transparent'}
         placeholder="Türkçe Sözlük'te ara"
         placeholderTextColor="textMedium"
         pl={52}
         borderRadius="normal"
         value={value}
         onFocus={()=>setFocus(true)}
          onChangeText={text => setValue(text)}
         />
            {value.length > 0 && (
          <Button onPress={onClear} position="absolute" right={16} top={14}>
            <Close color={theme.colors.textDark} />
          </Button>
        )}
          <Button position="absolute" left={16} top={14}>
        <Search color={theme.colors.textMedium} />
        </Button>
       </Box>
       
      {
          isFocus && (
                <Button onPress={onCancel} px={15} height={52}>
        <Text>Vazgeç</Text>
        </Button>
          )
      }
        </Box>
    )
}

export default SearchBox
