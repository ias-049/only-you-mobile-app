import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import { ms, scale, vs } from 'react-native-size-matters'
import { COLORS } from '../../utils/theme'
import CustomIcon from '../common/CustomIcon'

interface HomeSearchProps { }

export const HomeSearch: React.FC<HomeSearchProps> = (props) => {

    const { } = props

    return (
        <View style={styles.container}>
            <CustomIcon name='search' color={COLORS.blue} type='material-icons' size={ms(20)} disabled />
            <TextInput style={styles.textInput} placeholder='Search' placeholderTextColor={COLORS.grey} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        height: vs(40),
        borderRadius: 30,
        paddingHorizontal: scale(13),
        backgroundColor: COLORS.navyBlue,
    },
    textInput: {
        paddingHorizontal: scale(10),
        fontSize: ms(14),
        color: COLORS.white
    }
})