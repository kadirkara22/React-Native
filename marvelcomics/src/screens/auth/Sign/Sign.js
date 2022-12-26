import React, { useState } from 'react'
import { Formik } from 'formik'
import { View, Text, Image, TextInput } from 'react-native'
import { showMessage } from 'react-native-flash-message'
import LoginValidation from '../../../validations/LoginValidation'
import styles from "./Sign.style"
import Input from '../../../components/Input'
import Button from '../../../components/Button'

const Sign = ({ navigation }) => {
    const [loading, setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const handleLogin = () => {
        navigation.goBack()
    }

    const handleFormSubmit = (formValues) => {
        console.log(formValues)
    }
    return (

        <View style={styles.container}>
            <View style={styles.image_container}>
                <Image source={require('../../../assets/marvellogo.png')} style={styles.left_logo} />
                <View style={styles.right_logo}>
                    <Image source={require('../../../assets/marvellogo2.png')} style={styles.top_logo} />
                    <Image source={require('../../../assets/marvellogo3.png')} style={styles.bottom_logo} />
                </View>
            </View>
            <Text style={styles.title}>CREATE YOUR ACCOUNT</Text>
            <Formik
                initialValues={{ firstName: '', email: '', lastName: '', password: '', birthday: '' }}
                validateOnMount={true}
                onSubmit={handleFormSubmit}
                validationSchema={LoginValidation}
            >
                {({ handleChange, handleSubmit, values, errors, touched, isValid }) => (
                    <View style={styles.input_container}>
                        <Input
                            style={styles.input}
                            placeholder="First Name"
                            placeholderTextColor="gray"
                            onChangeText={handleChange('firstName')}
                            value={values.firstName}
                        />
                        {(touched.firstName && errors.firstName) && <Text style={styles.errors}>{errors.firstName}</Text>}
                        <Input
                            style={styles.input}
                            placeholderTextColor="gray"
                            placeholder="Last Name"
                            onChangeText={handleChange('lastName')}
                            value={values.lastName}
                            isSecure
                        />
                        {(touched.lastName && errors.lastName) && <Text style={styles.errors}>{errors.lastName}</Text>}
                        <Input
                            style={styles.input}
                            placeholderTextColor="gray"
                            placeholder="Email Address"
                            onChangeText={handleChange('email')}
                            value={values.email}
                            isSecure
                        />
                        {(touched.email && errors.email) && <Text style={styles.errors}>{errors.email}</Text>}
                        <Input
                            style={styles.input}
                            placeholderTextColor="gray"
                            placeholder="Password"
                            onChangeText={handleChange('password')}
                            value={values.password}
                            isSecure
                        />
                        {(touched.password && errors.password) && <Text style={styles.errors}>{errors.password}</Text>}

                        <Input
                            style={styles.input}
                            placeholderTextColor="gray"
                            placeholder="Birth Day mm/dd/yyyy"
                            onChangeText={handleChange('birthday')}
                            value={values.birthday}
                            isSecure
                        />
                        {(touched.birthday && errors.birthday) && <Text style={styles.errors}>{errors.birthday}</Text>}
                        <Button text="CREATE ACCOUNT" theme="primary" loading={!isValid} onPress={handleSubmit} />

                    </View>
                )}
            </Formik>
            {/* <View style={styles.footer_container}>
                <Button text="CREATE AN" theme="secondary" loading={loading} onPress={handleSignUp} />
            </View> */}
        </View>

    )
}

export default Sign
