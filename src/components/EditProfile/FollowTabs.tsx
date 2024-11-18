import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../utils/theme';
import { vs } from 'react-native-size-matters';
import { TextNormal } from '../common/Texts';
import { neonPinkShadow } from '../../utils/constants';

interface FollowTabsProps {
    selected: 'following' | "followers";
    onTabChange: (arg: 'following' | "followers") => void
}

export const FollowTabs: React.FC<FollowTabsProps> = (props) => {

    const { selected, onTabChange } = props

    return (
        <View style={styles.container}>
            <TouchableOpacity style={[styles.tab, selected === 'following' && styles.selected]} onPress={() => onTabChange('following')}>
                <TextNormal color={COLORS.white}>Followers</TextNormal>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.tab, selected === 'followers' && styles.selected]} onPress={() => onTabChange('followers')}>
                <TextNormal color={COLORS.white}>Following</TextNormal>
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