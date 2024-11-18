import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { vs } from 'react-native-size-matters'
import { COLORS } from '../../utils/theme'
import { IMAGES } from '../../utils/images'
import { TextNormal, TextSmall } from '../common/Texts'
import { NavigationProp, useNavigation } from '@react-navigation/native'

interface UserProfBarProps { }
interface InforProps {
    label: string
    count: string | number
}

const InfoBox: React.FC<InforProps> = (props) => {
    const { label, count } = props
    return (
        <View style={styles.infoBox}>
            <TextNormal bold center>
                {label}
            </TextNormal>
            <TextNormal color={COLORS.secondary} bold center>
                {count}
            </TextNormal>
        </View>
    )
}

export const UserProfBar: React.FC<UserProfBarProps> = (props) => {
    const { } = props
    const navigation: NavigationProp<any> = useNavigation()

    const redirectToConnections = () => navigation.navigate("Connections")

    return (
        <View>
            <TouchableOpacity style={styles.followContainer} onPress={redirectToConnections} activeOpacity={0.6}>
                <View style={styles.imageContainer}>
                    <Image source={IMAGES.userProfile} style={styles.image} />
                </View>
                <InfoBox label='Posts' count={23} />
                <InfoBox label='Following' count={23} />
                <InfoBox label='Followers' count={23} />
            </TouchableOpacity>
            <TextSmall bold color={COLORS.secondary}>@simmone</TextSmall>
            <TextSmall numberOfLines={4}>{`🌟 Brooklyn Simmons 🌟 Model | Dreamer | Wanderer 📍 NYC | LA | ✈️ Everywhere`}</TextSmall>
        </View>
    )
}

const styles = StyleSheet.create({
    followContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        gap: 10
    },
    image: {
        height: '100%',
        width: '100%',
    },
    imageContainer: {
        height: vs(70),
        aspectRatio: 1,
        borderRadius: 100,
        overflow: 'hidden',

        shadowColor: COLORS.white,
        shadowOpacity: 0.3,
        shadowRadius: 2,
        shadowOffset: { height: 1, width: 1 },
        elevation: 4
    },
    infoBox: {
        gap: 10,
   }
})