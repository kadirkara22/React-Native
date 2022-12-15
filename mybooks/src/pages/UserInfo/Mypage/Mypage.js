import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import UserWallCard from '../../../components/UserWallCard'
import { BookContext } from '../../../context/BookContext'
import styles from "./Mypage.style"
const Mypage = () => {
    const { readBook, readingBook, willReadBook } = useContext(BookContext)
    const userTotalWall = readBook.concat(readingBook, willReadBook)

    return (
        <View>
            {
                userTotalWall.map((item, i) => (
                    <UserWallCard wall={item} key={i} />
                ))
            }
        </View>
    )
}

export default Mypage
