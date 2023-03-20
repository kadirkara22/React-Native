import React from 'react'
import { StatusBar,ScrollView } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import Box from '../components/Box'
import Text from '../components/Text'
import { Sound, Hand, Favorite } from '../components/icons'
import ActionButton, { ActionButtonTitle } from '../components/Action-button'
import DetailSummaryItem from '../components/Detail-summary-item'
import theme from '../utils/theme'
import LoaderText from '../components/LoaderText'
const DetailView = ({route}) => {
    const [data, setData] = React.useState(null)
    const keyword = route.params?.keyword
     const getDetailData = async () => {
    const response = await fetch(`https://sozluk.gov.tr/gts?ara=${keyword}`)
    const data = await response.json()
    setData(data[0])
  }

  React.useEffect(() => {
    getDetailData()
  }, [])
       function FocusAwareStatusBar(props) {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar {...props} /> : null;
} 
    return ( 
        <Box bg="softRed" flex={1}>
      <Box as={ScrollView} p={16}>
        <Box>
          <Text fontSize={32} fontWeight="bold">
            {keyword}
          </Text>
          {data?.telaffuz || data?.lisan ? (
            <Text color="textLight" mt={6}>
              {data?.telaffuz && data?.telaffuz} {data?.lisan}
            </Text>
          ) : null}
        </Box>
        <Box flexDirection="row" mt={24}>
          <ActionButton disabled={!data}>
            <Sound width={32} height={32} color={theme.colors.textLight} />
          </ActionButton>
          <ActionButton disabled={!data} ml={12}>
            <Favorite width={32} height={32} color={theme.colors.textLight} />
          </ActionButton>
          <ActionButton disabled={!data} ml="auto">
            <Hand width={32} height={32} color={theme.colors.textLight} />
            <ActionButtonTitle>Türk İşaret Dili</ActionButtonTitle>
          </ActionButton>
        </Box>
        <Box mt={32}>
          {data
            ? data.anlamlarListe.map(item => (
                <DetailSummaryItem
                  key={item.anlam_sira}
                  data={item}
                  border={item.anlam_sira !== '1'}
                />
              ))
            : [1, 2, 3].map(index => (
                <DetailSummaryItem key={index} border={index !== 1}>
                  <LoaderText />
                  <LoaderText width={200} mt={10} />
                </DetailSummaryItem>
              ))}
        </Box>
      </Box>
    </Box>
  )
    
}

export default DetailView
