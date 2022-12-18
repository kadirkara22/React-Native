import React, { useContext, useState, useEffect } from 'react'
import database from "@react-native-firebase/database"
import { View, Image, Text } from 'react-native'
import { BookContext } from "../../context/BookContext"
import parseContentData from '../../utils/parseContentData'
import styles from "./CommentList.style"
const CommentList = ({ book, readingCommentBook, setReadingCommentBook }) => {




  useEffect(() => {
    database().ref(`users/${book.book.userid}/reading/${book.id}/book/comment`).on('value', snapshot => {
      const contentData = snapshot.val();
      const parsedData = parseContentData(contentData || {})
      setReadingCommentBook(parsedData)

    })

  }, [])





  return (
    <>
      {
        readingCommentBook.map(item => (
          <View style={styles.container} key={item.id}>
            <Image source={{ uri: item.comment.profileImage }} style={styles.image} />
            <View style={styles.right_container}>
              <View style={styles.user_container}>
                <Text style={styles.fullName}>{item.comment.fullName}</Text>
                <Text style={styles.userName}>@{item.comment.userName}</Text>
              </View>
              <View>
                <Text style={styles.date}>{item.comment.date}</Text>
                <Text style={styles.comment}>{item.comment.text}</Text>
              </View>
            </View>
          </View>

        ))
      }
    </>
  )
}

export default CommentList
