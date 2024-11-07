import { StyleSheet, Image, View } from 'react-native'
import React from 'react'
import { COLORS } from '../utils/theme'
import { ms, vs } from 'react-native-size-matters'
import { IMAGES } from '../utils/images'
import { TextNormal, TextSmall, TextSmaller } from './common/Texts'
import { FavHeart } from './FavHeart'
import CustomIcon from './common/CustomIcon'

interface HighlightProps {

}

export const Highlight: React.FC<HighlightProps> = (props) => {

    const { } = props

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.headLeftContainer}>
                    <Image source={IMAGES.profile} style={styles.profileImage} />
                    <TextNormal>Brookly Simmons</TextNormal>
                </View>
                <FavHeart isFav={true} onPress={() => { }} />
            </View>
            <Image source={IMAGES.highlight1} style={styles.highlightImage} />
            <View style={styles.footer}>
                <TextSmall bold color={COLORS.secondary}>@simmone</TextSmall>
                <TextNormal numberOfLines={1}>Adoring the beauty of this simmm’s high neck white t-shirt with gorgeous quality while welcoming spring.</TextNormal>
                <View style={styles.footerInnerContainer}>
                    <View style={styles.row}>
                        <View style={[styles.row, { gap: 5 }]}>
                            <CustomIcon
                                name="like2"
                                type='antdesign'
                                disabled
                                color={COLORS.white}
                                size={ms(18)}
                            />
                            <TextSmaller>123</TextSmaller>
                        </View>
                        <View style={[styles.row, { gap: 5 }]}>
                            <CustomIcon
                                name="comment"
                                type='font-awesome-5'
                                disabled
                                color={COLORS.white}
                                size={ms(18)}
                            />
                            <TextSmaller>123</TextSmaller>
                        </View>
                    </View>
                    <CustomIcon
                        name="paper-plane-outline"
                        type='ionicons'
                        disabled
                        color={COLORS.white}
                        size={ms(20)}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        backgroundColor: "#232243"
    },
    headerContainer: {
        padding: ms(15),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    headLeftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: ms(10)
    },
    profileImage: {
        borderRadius: 100
    },
    highlightImage: {
        height: vs(200),
        width: '100%'
    },
    footer: {
        padding: ms(15),
        gap: vs(10)
    },
    footerInnerContainer: {
        paddingTop: vs(15),
        borderTopWidth: 0.5,
        borderTopColor: COLORS.grey,
        marginTop: vs(15),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15
    }
})