import React from 'react'
import { View, Text } from 'react-native'
import FavoriCard from '../../../components/UserInfoCard/FavoriCard'
import MyLibraryCard from '../../../components/UserInfoCard/MyLibraryCard/MyLibraryCard'
import ReadBookCard from '../../../components/UserInfoCard/ReadBookCard'
import WillReadBookCard from '../../../components/UserInfoCard/WillReadBookCard'
import styles from "./MyLibrary.style"
const MyLibrary = ({ userInfo, handleSelectedBook }) => {
    return (
        <View style={styles.container}>
            <ReadBookCard userInfo={userInfo} handleSelectedBook={handleSelectedBook} />
            <WillReadBookCard userInfo={userInfo} handleSelectedBook={handleSelectedBook} />
            <MyLibraryCard userInfo={userInfo} handleSelectedBook={handleSelectedBook} />
            <FavoriCard userInfo={userInfo} handleSelectedBook={handleSelectedBook} />
        </View>
    )
}

export default MyLibrary
