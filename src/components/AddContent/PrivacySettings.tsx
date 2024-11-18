import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextSmall } from '../common/Texts'
import { COLORS } from '../../utils/theme'
import { SwitchInput } from '../common/SwitchInput'

interface PrivacySettingsProps { }

const PrivacySettings: React.FC<PrivacySettingsProps> = (props) => {
    const { } = props
    const [isSelected, setIsSelected] = useState<boolean>(false)
    return (
        <View>
            <TextSmall bold color={COLORS.secondary}>Privacy Settings</TextSmall>
            <SwitchInput text='Only follower can view profile' isSelected={isSelected} onSelect={() => setIsSelected(p => !p)} />
            <SwitchInput text='All can chat with me' isSelected={isSelected} onSelect={() => setIsSelected(p => !p)} />
            <SwitchInput text='Comment notification' isSelected={isSelected} onSelect={() => setIsSelected(p => !p)} />
            <SwitchInput text='Promote your notification' isSelected={isSelected} onSelect={() => setIsSelected(p => !p)} />
        </View>
    )
}

export default PrivacySettings

const styles = StyleSheet.create({})