import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ms, vs } from 'react-native-size-matters'
import CustomIcon from './CustomIcon'
import LinearGradient from "react-native-linear-gradient"
import { THEME } from '../../utils/theme'
import { TextNormal } from './Texts'

interface CustomHeaderProps {
    title: string
    onPressBack?: () => void
    renderRight?: () => React.ReactNode
    cgb?: boolean
}

const CustomHeader: React.FC<CustomHeaderProps> = (props) => {

    const { title, onPressBack, cgb, renderRight } = props

    const isLeftDisabled = typeof onPressBack !== "function"

    return (
        <View style={styles.container}>
            <View style={styles.left}>
                {cgb && <TouchableOpacity onPress={onPressBack} disabled={isLeftDisabled} style={styles.iconContainer}>
                    <CustomIcon name='arrowleft' type='antdesign' color='white' size={ms(18)} disabled />
                </TouchableOpacity>}
            </View>
            <View style={styles.center}>
                <TextNormal bold>{title}</TextNormal>
            </View>
            <View style={styles.right}>
                {renderRight ? renderRight() :
                    // <TouchableOpacity style={styles.iconContainer}>
                    //     <CustomIcon name='dots-three-vertical' type='entypo' color='white' size={ms(18)} disabled />
                    // </TouchableOpacity>
                    <></>
                }
            </View>
        </View >
    )
}

export default CustomHeader

const styles = StyleSheet.create({
    container: {
        maxHeight: 100,
        height: vs(50),
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    left: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: vs(50),
    },
    center: {
        flex: 4,
        alignItems: 'flex-start',
        justifyContent: 'center',
        height: vs(50),
    },
    right: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

        height: vs(50),
    },
    iconContainer: {
        height: vs(30),
        alignItems: 'center',
        justifyContent: 'center',
        aspectRatio: 1,
        borderRadius: THEME.radius.sm
    }

})