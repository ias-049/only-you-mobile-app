import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IMAGES } from '../utils/images'
import { scale } from 'react-native-size-matters'

interface PhotosGridProps { }

const DEMO_IMAGES = [
    {
        id: "1",
        image: IMAGES.userProfile
    },
    {
        id: "3",
        image: IMAGES.profile
    },
    {
        id: "2",
        image: IMAGES.carousel
    },
    {
        id: "4",
        image: IMAGES.userProfile
    },
    {
        id: "5",
        image: IMAGES.profile
    },
    {
        id: "6",
        image: IMAGES.carousel
    },
    {
        id: "7",
        image: IMAGES.userProfile
    },
    {
        id: "8",
        image: IMAGES.profile
    },
    {
        id: "9",
        image: IMAGES.carousel
    },
    {
        id: "10",
        image: IMAGES.userProfile
    },
    {
        id: "11",
        image: IMAGES.profile
    },
    {
        id: "12",
        image: IMAGES.carousel
    },
]

export const PhotosGrid: React.FC<PhotosGridProps> = (props) => {
    const { } = props
    return (
        <View style={styles.container}>
            {DEMO_IMAGES.map((i, index) => (
                <Image source={i.image} style={styles.image} key={i.id} />
            ))}
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