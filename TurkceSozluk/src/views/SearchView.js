import React from 'react'
import { View,ImageBackground,StatusBar,Animated,FlatList } from 'react-native'
import { useIsFocused } from '@react-navigation/native';
import Box from '../components/Box'
import { CardContainer, CardSummary, CardTitle } from '../components/Card'
import { SimpleCardContainer,SimpleCardTitle } from '../components/Simple-card'
import SearchHistoryList from '../components/Search-history-list'
import SuggestionCard from '../components/suggestion-card'
import HomeSearch from '../components/Home-search'
import Text from '../components/Text'
import Bg from '../components/Bg'
import { Logo } from '../components/icons'
import Search from '../components/Search'

  const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item 1',
    summary: 'açıklama 1'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item 2',
    summary: 'açıklama 2'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item 3',
    summary: 'açıklama 3'
  },
  
]
 
const SearchView = ({ navigation }) => {
     const [isSearchFocus, setSearchFocus] = React.useState(false)
    const [homeData, setHomeData] = React.useState(null)

  const getHomeData = async () => {
    const response = await fetch('https://sozluk.gov.tr/icerik')
    const data = await response.json()
    //console.log(data)
    setHomeData(data)
  }
  React.useEffect(() => {
    getHomeData()
  }, [])




    function FocusAwareStatusBar(props) {
  const isFocused = useIsFocused();



  return isFocused ? <StatusBar {...props} /> : null;
}
    return (
        <Box flex={1} bg={isSearchFocus ? 'softRed' : 'red'}>
        <StatusBar barStyle="light-content" backgroundColor={isSearchFocus ? '#F8F8F8' : "#E11E3C"}/>
        <HomeSearch
        isSearchFocus={isSearchFocus}
        onSearchFocus={setSearchFocus}
      />
  
           <Box flex={1} bg="softRed" pt={isSearchFocus ? 0 :26}>
      {
          isSearchFocus ? (
              <Box flex={1}>
              <SearchHistoryList data={DATA} />
            
            
              </Box>
          )
          :
          (
              <Box px={16} py={40} flex={1}>
              <SuggestionCard
              data={homeData?.kelime[0]}
              title="Bir Kelime"
              onPress={() =>
                navigation.navigate('Details', {
                  keyword: homeData?.kelime[0].madde
                })
              }
            />
                 <SuggestionCard
              mt={40}
              data={homeData?.atasoz[0]}
              title="Bir Deyim - Atasözü"
              onPress={() =>
                navigation.navigate('Details', {
                  keyword: homeData?.atasoz[0].madde
                })
              }
            />
              </Box>
          )
      }
            </Box>
        </Box>
  
       
    )
}

export default SearchView
