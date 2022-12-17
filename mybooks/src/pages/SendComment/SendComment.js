import React, { useContext } from 'react'
import { View, TextInput, Image, ScrollView } from 'react-native'
import styles from "./SendComment.style"

import UserWallCard from '../../components/UserWallCard'
import { UserInfoContext } from '../../context/UserInfoContext'
import CommentInput from '../../components/CommentInput'
import { BookContext } from '../../context/BookContext'
const SendComment = ({ route }) => {
    const { userInfo } = useContext(UserInfoContext)
    const { handleShare } = useContext(BookContext)
    const { book } = route.params


    return (
        <>
            <ScrollView style={styles.container}>
                <UserWallCard wall={book} />

            </ScrollView>
            <CommentInput userInfo={userInfo} handleShare={handleShare} book={book} />
        </>
    )
}

export default SendComment
