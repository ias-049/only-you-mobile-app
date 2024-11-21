import { NavigationProp } from '@react-navigation/native'
import React from 'react'
import { Image, Platform, StyleSheet, View } from 'react-native'
import { ms, scale, vs } from 'react-native-size-matters'
import BackgroundWrapper from '../components/BackgroundWrapper'
import CustomButton from '../components/common/CustomButton'
import { TextBigger, TextNormal, TextSmaller } from '../components/common/Texts'
import { IMAGES } from '../utils/images'
import { COLORS } from '../utils/theme'

interface OnboardingProps {
    navigation: NavigationProp<any>
}

export const OnboardingScreen: React.FC<OnboardingProps> = (props) => {
    const { navigation } = props

    const redirectToRegister = () => navigation.navigate("Register")
    const redirectToLogin = () => navigation.navigate("Login")

    return (
        <BackgroundWrapper>
            <View style={styles.container}>
                <Image source={IMAGES.onBoardBackground} style={{ width: "100%", height: Platform.select({ ios: vs(330), android: vs(370) }) }} resizeMode='stretch' />
                <View style={styles.contentContainer}>
                    <View style={{ gap: 10 }}>
                        <TextBigger color={COLORS.secondary} textStyle={{ fontWeight: '700' }}>Welcome to OnlyU</TextBigger>
                        <TextNormal bold >Signup to continue</TextNormal>
                    </View>
                    <View style={styles.btnContainer}>
                        <CustomButton title='Google' icon={{ name: 'google', type: "antdesign", color: COLORS.white }} />
                        <View style={styles.row}>
                            <View style={styles.bar} />
                            <TextSmaller textStyle={{ marginHorizontal: scale(10) }} center bold>Or</TextSmaller>
                            <View style={styles.bar} />
                        </View>
                        <CustomButton onPress={redirectToRegister} title='Register with Email' icon={{ name: 'mail', type: "ionicons", color: COLORS.white }} />
                        <TextNormal center> Already got an account? <TextNormal onPress={redirectToLogin} bold>Login here</TextNormal></TextNormal>
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
        // flex: 1,
        justifyContent: 'flex-end',
        rowGap: 13,
        paddingBottom: vs(5),
        marginTop: 5
    }
})