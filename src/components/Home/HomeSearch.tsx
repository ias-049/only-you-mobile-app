import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ms, scale, vs } from 'react-native-size-matters'
import { COLORS } from '../../utils/theme'
import CustomIcon from '../common/CustomIcon'

interface HomeSearchProps {
    onPressSearchBar?: () => void;
    editable?: boolean;
    isClear?: boolean;
    search: string;
    onClear?: () => void
    onSearch: (arg: string) => void
}

export const HomeSearch: React.FC<HomeSearchProps> = (props) => {

    const { onPressSearchBar, editable, search, onSearch, onClear, isClear } = props

    const Wrapper = typeof onPressSearchBar === "function" ? TouchableOpacity : View

    return (
        <Wrapper style={styles.container} onPress={onPressSearchBar} activeOpacity={1}>
            <CustomIcon name='search' color={COLORS.blue} type='material-icons' size={ms(20)} disabled />
            <TextInput
                value={search}
                onChangeText={onSearch}
                onPress={onPressSearchBar}
                style={styles.textInput}
                placeholder='Search'
                placeholderTextColor={COLORS.grey}
                editable={editable}
            />
            {isClear && <CustomIcon name='x' color={COLORS.white} type='feather' size={ms(20)} onPress={onClear} />}
        </Wrapper >
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
        color: COLORS.white,
        flex: 1,
        height: '100%'
    }
})