import { StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native'
import React from 'react'
import CustomIcon from './common/CustomIcon'
import { ms } from 'react-native-size-matters'
import { COLORS } from '../utils/theme'

interface FavHeartProps {
    isFav: boolean;
    onPress: () => void;
    containerStyle?: ViewStyle
}

export const FavHeart: React.FC<FavHeartProps> = (props) => {

    const { isFav, onPress, containerStyle } = props

    return (
        <TouchableOpacity style={[styles.iconContainer, containerStyle]} onPress={onPress}>
            <CustomIcon name={isFav ? 'heart' : "hearto"} type='antdesign' size={ms(18)} color={COLORS.white} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    iconContainer: {
        borderRadius: 100,
        width: 40,
        aspectRatio: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255,255,255,0.3)'
    },
})