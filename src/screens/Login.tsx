import { NavigationProp } from '@react-navigation/native'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Image, Platform, StyleSheet, TouchableOpacity, View } from 'react-native'
import { ms, scale, vs } from 'react-native-size-matters'
import BackgroundWrapper from '../components/BackgroundWrapper'
import CustomButton from '../components/common/CustomButton'
import CustomIcon from '../components/common/CustomIcon'
import Fields from '../components/common/Fields'
import { TextBigger, TextNormal, TextSmall } from '../components/common/Texts'
import { IMAGES } from '../utils/images'
import { COLORS } from '../utils/theme'

interface LoginProps {
    navigation: NavigationProp<any>
}

export const LoginScreen: React.FC<LoginProps> = (props) => {
    const { navigation } = props
    const { control } = useForm()
    const [acceptedTerms, setAcceptedTerms] = useState(false)

    const toggleTerms = () => setAcceptedTerms(p => !p)


    const redirectToRegister = () => navigation.navigate("Register")

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

    const handleLogin = () => { }


    return (
        <BackgroundWrapper>
            <View style={styles.container}>
                <Image source={IMAGES.authBackground} style={{ width: "100%", height: Platform.select({ ios: vs(200), android: vs(225) }) }} resizeMode='stretch' />
                <View style={styles.contentContainer}>
                    <View style={{ gap: 10 }}>
                        <TextBigger color={COLORS.secondary} textStyle={{ fontWeight: '700' }}>Welcome to OnlyU</TextBigger>
                        <TextNormal bold >Signin with Email</TextNormal>
                    </View>
                    <View style={styles.btnContainer}>
                        <View style={styles.formContainer}>
                            <Fields control={control} fields={FIELDS} />
                        </View>
                        <CustomButton title='Login' onPress={handleLogin} />
                        <TextSmall center> Don't have an account? <TextSmall onPress={redirectToRegister} bold color={COLORS.secondary}>Register here</TextSmall></TextSmall>
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
        gap: 20
    }
})