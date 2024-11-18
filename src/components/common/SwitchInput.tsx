import { StyleSheet, Switch, Text, View } from 'react-native'
import React from 'react'
import { TextNormal } from './Texts';
import { vs } from 'react-native-size-matters';
import { COLORS } from '../../utils/theme';

interface SwitchInputProps {
    text: string;
    isSelected: boolean;
    onSelect: () => void
}

export const SwitchInput: React.FC<SwitchInputProps> = (props) => {
    const { isSelected, onSelect, text } = props

    return (
        <View style={styles.container}>
            <TextNormal>{text}</TextNormal>
            <Switch value={isSelected}
                onChange={(va) => onSelect()}
                trackColor={{ false: "#122C58", true: "#7C1C4C" }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: vs(50)
    }
})