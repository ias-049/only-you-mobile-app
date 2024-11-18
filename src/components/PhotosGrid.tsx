import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IMAGES } from '../utils/images'
import { scale } from 'react-native-size-matters'
import { TextNormal } from './common/Texts'
import { DEMO_IMAGES } from '../utils/constants'

interface PhotosGridProps {
    heading: string
}

export const PhotosGrid: React.FC<PhotosGridProps> = (props) => {
    const { heading = "Posts" } = props
    return (
        <View style={{ gap: 10 }}>
            <TextNormal bold>{heading}</TextNormal>
            <View style={styles.container}>
                {DEMO_IMAGES.map((i, index) => (
                    <Image source={i.image} style={styles.image} key={i.id} />
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 10,
    },
    image: {
        width: scale(100),
        aspectRatio: 1,
    }
})