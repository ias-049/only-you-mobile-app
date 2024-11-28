import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../utils/theme';
import { vs } from 'react-native-size-matters';
import { TextNormal } from '../common/Texts';
import { neonPinkShadow } from '../../utils/constants';

interface ChatTabsProps {
    selected: 'my-feed' | "all";
    onTabChange: (arg: 'my-feed' | 'all') => void
}

export const ChatTabs: React.FC<ChatTabsProps> = (props) => {

    const { selected, onTabChange } = props

    return (
        <View style={styles.container}>
            <TouchableOpacity style={[styles.tab, selected === 'my-feed' && styles.selected]} onPress={() => onTabChange('my-feed')}>
                <TextNormal color={COLORS.white}>My Feed</TextNormal>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.tab, selected === 'all' && styles.selected]} onPress={() => onTabChange('all')}>
                <TextNormal color={COLORS.white}>All</TextNormal>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#0F1B43",
        padding: 5,
        borderRadius: 40,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        height: vs(40)
    },
    tab: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        borderRadius: 40,
        borderWidth: 2,
        borderColor: "transparent",
        height: '100%'
    },
    selected: {
        ...neonPinkShadow,
    }
})