import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import BackgroundWrapper from '../components/BackgroundWrapper'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomHeader from '../components/common/CustomHeader'
import { UserProfBar } from '../components/UserProfile/UserProfBar'
import CustomButton from '../components/common/CustomButton'
import { TextNormal } from '../components/common/Texts'
import { ms, scale, vs } from 'react-native-size-matters'
import { COLORS } from '../utils/theme'
import CustomIcon from '../components/common/CustomIcon'
import { PhotosGrid } from '../components/PhotosGrid'
import { NavigationProp } from '@react-navigation/native'

interface UserProfileScreenProps {
    navigation: NavigationProp<any>
}

export const UserProfileScreen: React.FC<UserProfileScreenProps> = (props) => {
    const { navigation } = props
    const onBack = () => navigation.goBack()
    return (
        <BackgroundWrapper>
            <CustomHeader title='Brooklyn Simmons' cgb onPressBack={onBack}/>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: vs(20) }}>
                <UserProfBar />
                <View style={styles.actionContainer}>
                    <View style={styles.btnCover}>
                        <TouchableOpacity style={styles.button}>
                            <CustomIcon name='comment-dots' type='font-awesome-5' color={COLORS.white} disabled size={ms(19)} />
                            <TextNormal>Message</TextNormal>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.btnCover}>
                        <TouchableOpacity style={styles.button}>
                            <CustomIcon name='person-add' type='ionicons' color={COLORS.white} disabled size={ms(19)} />
                            <TextNormal>Follow</TextNormal>
                        </TouchableOpacity>
                    </View>
                </View>
                <PhotosGrid />
            </ScrollView>
        </BackgroundWrapper>
    )
}

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1
    },
    actionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        gap: 10,
        marginVertical: vs(10)
    },
    btnCover: {
        borderWidth: 1,
        borderColor: COLORS.secondary,
        borderRadius: 20,
        overflow: 'hidden',
        justifyContent: 'center',
        shadowColor: COLORS.secondary,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        padding: 10,
        height: vs(40),
        width: scale(150),
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 20,
        justifyContent: 'center',
        // paddingHorizontal: ms(30),
        // paddingVertical: ms(10),
        height: vs(23),
        // width: scale(147),


        backgroundColor: COLORS.background,
        // opacity:0.5,
        gap: 10
    }
})