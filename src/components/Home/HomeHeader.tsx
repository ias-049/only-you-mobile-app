import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { TextBig, TextNormal } from '../common/Texts'
import { COLORS } from '../../utils/theme'
import CustomIcon from '../common/CustomIcon'
import { neonBlueShadow } from '../../utils/constants'
import { ms } from 'react-native-size-matters'
import { NavigationProp, useNavigation } from '@react-navigation/native'

interface HomeHeaderProps { }

export const HomeHeader: React.FC<HomeHeaderProps> = (props) => {

    const { } = props
    const navigation: NavigationProp<any> = useNavigation()
    const redirectToFav = () => navigation.navigate("FavouritesScreen")
    const redirectToNotification = () => navigation.navigate("NotificationScreen")

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <TextBig isOleo bold color={COLORS.secondary}>Hello,</TextBig>
                <TextNormal>Esther Howard</TextNormal>
            </View>
            <View style={styles.iconsContainer}>
                <TouchableOpacity style={styles.icon} onPress={redirectToNotification}>
                    <CustomIcon name="notifications-active" type='material-icons' color='white' disabled size={ms(17)} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.icon} onPress={redirectToFav}>
                    <CustomIcon name="heart" type='antdesign' color='white' disabled size={ms(17)} />
                </TouchableOpacity>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    textContainer: {
        gap: 6
    },
    iconsContainer: {
        flexDirection: 'row',
        alignItems: "center",
        gap: 8
    },
    icon: {
        padding: 5,
        backgroundColor: COLORS.primary,
        height: ms(40),
        alignItems: "center",
        justifyContent: "center",
        aspectRatio: 1,
        borderRadius: 100,
        ...neonBlueShadow,
    }
})