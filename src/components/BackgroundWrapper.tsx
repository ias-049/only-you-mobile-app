import React from 'react'
import { Platform, StatusBar, StyleSheet, View } from 'react-native'
import { COLORS } from '../utils/theme'
import { SafeAreaView } from 'react-native-safe-area-context'
import { scale, vs } from 'react-native-size-matters'

const BackgroundWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={COLORS.background} barStyle={'light-content'} />
            <SafeAreaView style={styles.container} edges={['top']}>
                {children}
            </SafeAreaView>
        </View>
    )
}

export default BackgroundWrapper

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        paddingHorizontal: scale(6),
        paddingTop: Platform.select({
            android: vs(15)
        })
    },
})