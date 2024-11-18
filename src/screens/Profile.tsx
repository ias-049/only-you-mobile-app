import { NavigationProp } from '@react-navigation/native'
import React from 'react'
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import { ms, scale, vs } from 'react-native-size-matters'
import BackgroundWrapper from '../components/BackgroundWrapper'
import CustomHeader from '../components/common/CustomHeader'
import { PhotosGrid } from '../components/PhotosGrid'
import { UserProfBar } from '../components/UserProfile/UserProfBar'
import { COLORS } from '../utils/theme'
import CustomIcon from '../components/common/CustomIcon'
import { neonBlueShadow } from '../utils/constants'
import MenuSVG from '../assets/images/menu.svg'

interface ProfileScreenProps {
    navigation: NavigationProp<any>
}

export const ProfileScreen: React.FC<ProfileScreenProps> = (props) => {
    const { navigation } = props

    const redirectToProfDetail = () => navigation.navigate("MenuScreen")


    const renderRight = () => {
        return (
            <TouchableOpacity style={styles.icon} onPress={redirectToProfDetail}>
                <MenuSVG />
            </TouchableOpacity>
        )
    }

    return (
        <BackgroundWrapper>
            <CustomHeader title='Profile' renderRight={renderRight} />
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: vs(20), gap: 20 }}>
                <UserProfBar />
                <PhotosGrid heading={"Your Posts"} />
            </ScrollView>
        </BackgroundWrapper>
    )
}

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1
    },
    actionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        gap: 10,
        marginVertical: vs(10)
    },
    btnCover: {
        borderWidth: 1,
        borderColor: COLORS.secondary,
        borderRadius: 20,
        overflow: 'hidden',
        justifyContent: 'center',
        shadowColor: COLORS.secondary,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        padding: 10,
        height: vs(40),
        width: scale(150),
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 20,
        justifyContent: 'center',
        height: vs(23),
        backgroundColor: COLORS.background,
        gap: 10
    },

    icon: {
        padding: 5,
        backgroundColor: COLORS.primary,
        height: ms(35),
        alignItems: "center",
        justifyContent: "center",
        aspectRatio: 1,
        borderRadius: 100,
        ...neonBlueShadow,
    }
})