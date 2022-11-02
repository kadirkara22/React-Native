import React from 'react'
import { Text, TouchableWithoutFeedback, View } from 'react-native'
import styles from "./JobCard.styles"
const JobCard = ({ job, onSelect }) => {

    return (
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container}>
                <Text style={styles.title}>{job.name.length > 30 ? job.name.slice(0, 30) + "..." : job.name}</Text>
                <Text style={styles.company}>{job.company.name}</Text>
                <Text style={styles.location}>{job.locations[0].name}</Text>
                <Text style={styles.level}>{job.levels[0].name}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default JobCard
