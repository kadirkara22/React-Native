import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Loading from '../components/Loading';


const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const Quiz = ({ navigation }) => {
    const [questions, setQuestions] = useState()
    const [ques, setQues] = useState(0)
    const [options, setOptions] = useState([])
    const [score, setScore] = useState(0)
    const [isLoading, setIsLoading] = useState(false)

    const getQuiz = async () => {
        setIsLoading(true)
        const url = 'https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986'
        const res = await fetch(url)
        const data = await res.json()
        setQuestions(data.results)
        setOptions(generateOptionsAndShuffle(data.results[0]))
        setIsLoading(false)
    }

    useEffect(() => {
        getQuiz()
    }, [])
    const handleResult = () => {
        navigation.navigate("Result")
    }

    const handleNextPress = () => {
        setQues(ques + 1)
        setOptions(generateOptionsAndShuffle(questions[ques + 1]))
    }

    const generateOptionsAndShuffle = (_question) => {
        const options = [..._question.incorrect_answers]
        options.push(_question.correct_answer)
        shuffleArray(options)
        return options
    }

    const handleSelectOption = (_option) => {
        if (_option === questions[ques].correct_answer) {
            setScore(score + 10)
        }
        if (ques !== 9) {
            setQues(ques + 1)
            setOptions(generateOptionsAndShuffle(questions[ques + 1]))
        }
        if (ques === 9) {
            handleShowResults()
        }

    }
    const handleShowResults = () => {
        navigation.navigate("Result", {
            score
        })
    }

    return (
        <View style={styles.container}>
            {isLoading ?
                <Loading />
                :
                questions &&
                <View style={styles.parent}>
                    <View style={styles.top}>
                        <Text style={styles.question}>Q {ques + 1}. {decodeURIComponent(questions[ques].question)}</Text>
                    </View>
                    <View style={styles.options}>
                        <TouchableOpacity style={styles.optionButtom} onPress={() => handleSelectOption(options[0])}>
                            <Text style={styles.option}>{decodeURIComponent(options[0])}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.optionButtom} onPress={() => handleSelectOption(options[1])}>
                            <Text style={styles.option}>{decodeURIComponent(options[1])}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.optionButtom} onPress={() => handleSelectOption(options[2])}>
                            <Text style={styles.option}>{decodeURIComponent(options[2])}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.optionButtom} onPress={() => handleSelectOption(options[3])}>
                            <Text style={styles.option}>{decodeURIComponent(options[3])}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bottom}>
                        {
                            ques !== 9 && <TouchableOpacity style={styles.button} onPress={handleNextPress}>
                                <Text style={styles.button_text}>SKIP</Text>
                            </TouchableOpacity>
                        }

                        {
                            ques === 9 && <TouchableOpacity style={styles.button} onPress={handleShowResults}>
                                <Text style={styles.button_text}>SHOW RESULTS</Text>
                            </TouchableOpacity>
                        }

                    </View>
                </View>
            }
        </View>
    )
}

export default Quiz

const styles = StyleSheet.create({
    container: {
        padding: 12,
        height: "100%"
    },
    top: {
        marginVertical: 16
    },
    options: {
        flex: 1,
        marginVertical: 16
    },
    bottom: {
        paddingVertical: 16,
        justifyContent: "space-between",
        flexDirection: "row",

    },
    button: {

        backgroundColor: "#1A759F",
        padding: 12,
        paddingHorizontal: 16,
        borderRadius: 16,
        alignItems: "center",
        marginBottom: 10
    },
    button_text: {
        color: "white",
        fontWeight: "600",
        fontSize: 18
    },
    question: {
        fontSize: 28
    },
    option: {
        fontSize: 18,
        color: "white"
    },
    optionButtom: {
        paddingVertical: 12,
        marginVertical: 16,
        backgroundColor: "#34A0A4",
        paddingHorizontal: 12,
        borderRadius: 12
    },
    parent: {
        height: "100%"
    }

})
