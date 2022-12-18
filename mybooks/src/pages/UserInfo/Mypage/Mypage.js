import React, { useContext, useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import UserWallCard from '../../../components/UserWallCard'
import { BookContext } from '../../../context/BookContext'
import styles from "./Mypage.style"

const Mypage = ({ handlesendComment }) => {

    const { userTotalWall, handleFavoriCount, readingCommentBook } = useContext(BookContext)






    return (
        <View>
            {
                userTotalWall.map((item, i) => (
                    <UserWallCard wall={item} key={i} handleFavoriCount={handleFavoriCount} handlesendComment={handlesendComment} readingCommentBook={readingCommentBook} />
                ))
            }
        </View>
    )
}

export default Mypage
