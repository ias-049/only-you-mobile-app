import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { NavigationProp } from '@react-navigation/native'
import BackgroundWrapper from '../components/BackgroundWrapper'
import { SvgUri } from 'react-native-svg'
import { IMAGES } from '../utils/images'
import { ms, scale, vs } from 'react-native-size-matters'
import { TextBig, TextBigger, TextNormal, TextSmall } from '../components/common/Texts'
import { COLORS } from '../utils/theme'
import CustomButton from '../components/common/CustomButton'
import { useForm } from 'react-hook-form'
import Fields from '../components/common/Fields'
import CustomIcon from '../components/common/CustomIcon'

interface RegisterProps {
    navigation: NavigationProp<any>
}

export const RegisterScreen: React.FC<RegisterProps> = (props) => {
    const { navigation } = props
    const { control } = useForm()
    const [acceptedTerms, setAcceptedTerms] = useState(false)

    const toggleTerms = () => setAcceptedTerms(p => !p)


    const redirectToLogin = () => navigation.navigate("Login")

    const FIELDS = [
        {
            id: '2',
            type: 'text',
            label: "Email Address",
            name: "email",
            key: "email",
            placeholder: "Enter email",
        },
        {
            id: '2',
            type: 'text',
            label: "Create Password",
            name: "password",
            key: "password",
            secureTextEntry: true,
            placeholder: "Enter password",
        },
    ]

    const handleRegister = () => { }


    return (
        <BackgroundWrapper>
            <View style={styles.container}>
                <Image source={IMAGES.authBackground} style={{ width: "100%", height: Platform.select({ ios: vs(200), android: vs(225) }) }} resizeMode='stretch' />
                <View style={styles.contentContainer}>
                    <View style={{ gap: 10 }}>
                        <TextBigger color={COLORS.secondary} textStyle={{ fontWeight: '700' }}>Welcome to OnlyU</TextBigger>
                        <TextNormal bold >Signup with Email</TextNormal>
                    </View>
                    <View style={styles.btnContainer}>
                        <View style={styles.formContainer}>
                            <Fields control={control} fields={FIELDS} />
                            <TouchableOpacity onPress={toggleTerms} style={{ marginTop: 10, flexDirection: 'row', alignItems: 'center', gap: 10, width: '90%' }}>
                                <CustomIcon type='material-community' name={acceptedTerms ? "checkbox-marked"
                                    : 'checkbox-blank-outline'} color='white' disabled size={ms(17)} />
                                <TextSmall textStyle={{ lineHeight: 30 }}>I have read Spotlight’s Terms of Service and Privacy Policy</TextSmall>
                            </TouchableOpacity>
                        </View>
                        <CustomButton title='Register' onPress={handleRegister} />
                        <TextSmall center> Already got an account? <TextSmall onPress={redirectToLogin} bold color={COLORS.secondary}>Login here</TextSmall></TextSmall>
                    </View>
                </View>
            </View>
        </BackgroundWrapper>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        padding: ms(10),
        flex: 1,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bar: {
        borderTopWidth: 1,
        borderColor: "#8B87D2",
        width: scale(90)
    },
    btnContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        rowGap: 16,
        paddingBottom: vs(10)
    },
    formContainer: {
        flex: 1,
        justifyContent: 'center',
        gap: 10
    }
})