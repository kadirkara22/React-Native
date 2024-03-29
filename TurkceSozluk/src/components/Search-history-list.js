import React from 'react'
import { FlatList } from 'react-native'

import Box from './Box'
import Text from './Text'
import { SimpleCardContainer, SimpleCardTitle } from './Simple-card'

function SearchHistoryList({ data }) {
  return (
    <FlatList
      style={{ padding: 16 }}
      data={data}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <Box py={6}>
          <SimpleCardContainer>
            <SimpleCardTitle>{item.title}</SimpleCardTitle>
          </SimpleCardContainer>
        </Box>
      )}
      ListHeaderComponent={
        <Text color="textLight" mb={10}>
          Son Aramalar
        </Text>
      }
    />
  )
}

export default SearchHistoryList