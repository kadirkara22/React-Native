import React, { useContext, useEffect } from 'react'
import { View, TextInput, Image, ScrollView } from 'react-native'
import styles from "./SendComment.style"

import UserWallCard from '../../components/UserWallCard'
import CommentList from '../../components/CommentList'
import { UserInfoContext } from '../../context/UserInfoContext'
import CommentInput from '../../components/CommentInput'
import { BookContext } from '../../context/BookContext'
const SendComment = ({ navigation, route }) => {
    const { userInfo } = useContext(UserInfoContext)
    const { handleShare, text, setText, handleFavoriCount, readingCommentBook, setReadingCommentBook } = useContext(BookContext)
    const { book } = route.params

    const handlesendComment = (book) => {
        navigation.navigate("SendCommentPage", { book })
    }


    return (
        <>
            <ScrollView style={styles.container}>
                <UserWallCard wall={book} handleFavoriCount={handleFavoriCount} handlesendComment={handlesendComment} readingCommentBook={readingCommentBook} />
                <CommentList book={book} readingCommentBook={readingCommentBook} setReadingCommentBook={setReadingCommentBook} />
            </ScrollView>
            <CommentInput userInfo={userInfo} handleShare={handleShare} book={book} text={text} setText={setText} />
        </>
    )
}

export default SendComment
