import { Image, StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import { ms, scale, vs } from 'react-native-size-matters'
import CustomIcon from './CustomIcon'
import { COLORS } from '../../utils/theme'
import { IMAGES } from '../../utils/images'
import { TextSmall } from './Texts'

interface LinkInputProps {

}

export const LinkInput: React.FC<LinkInputProps> = (props) => {

    const { } = props

    return (
        <View style={styles.container}>
            <TextSmall bold color={COLORS.secondary}>Upload Link</TextSmall>

            <View style={styles.inputRow}>
                <CustomIcon name='link' type='entypo' color={COLORS.secondary} disabled size={ms(18)} />
                <TextInput style={styles.textInput} placeholder='Enter link' placeholderTextColor={COLORS.lightgrey} />
            </View>
            <View style={styles.previewContainer}>
                <View style={styles.imageContainer}>
                    <Image style={styles.previewImage} source={IMAGES.profile} />
                </View>
                <View style={{ flex: 1, paddingTop: 5 }}>
                    <TextSmall>
                        Endorsement at it’s peak with @pyries_Fashion and this new Brown off shoulder T-Shirt.
                    </TextSmall>
                </View>
                <CustomIcon name='x' type='feather' color='white' size={ms(17)} containerStyle={styles.crossContainer} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: 10
    },
    inputRow: {
        flexDirection: 'row',
        padding: ms(5),
        borderRadius: 20,
        gap: 10,
        height: vs(40),
        alignItems: 'center',
        paddingHorizontal: ms(12),
        backgroundColor: "#232243"
    },
    textInput: {
        flex: 1,
        height: '100%',
        paddingHorizontal: ms(7),
        fontSize: ms(16)
    },
    previewContainer: {
        borderRadius: 20,
        backgroundColor: "#232243",
        padding: ms(12),
        height: vs(100),
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 10
    },
    previewImage: {
        height: '100%',
        width: '100%',
    },
    imageContainer: {
        height: vs(80),
        aspectRatio: 1,
        borderRadius: 10,
        overflow: 'hidden'
    },
    crossContainer: {
        position: 'absolute',
        top: 7,
        right: 10
    }

})