import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { NavigationProp } from '@react-navigation/native'
import BackgroundWrapper from '../components/BackgroundWrapper'
import CustomHeader from '../components/common/CustomHeader'
import { ms, vs } from 'react-native-size-matters'
import { TextNormal } from '../components/common/Texts'
import CustomIcon from '../components/common/CustomIcon'

interface MenuProps {
    navigation: NavigationProp<any>
}

type List = { id: string; name: string, onPress: () => void }

interface ListsProps {
    lists: List[]
}

export const MenuScreen: React.FC<MenuProps> = (props) => {

    const { navigation } = props

    const goBack = () => navigation.goBack()

    const PROFILE_MENU: List[] = [
        {
            id: "1",
            name: "Profile Details",
            onPress: () => navigation.navigate("ProfileDetailScreen")
        },
        {
            id: "2",
            name: "Subscriptions",
            onPress: () => navigation.navigate("SubscriptionScreen")
        },
    ]

    return (
        <BackgroundWrapper>
            <CustomHeader title='Menu' cgb onPressBack={goBack} />
            <View style={styles.container}>
                <Lists lists={PROFILE_MENU} />
            </View>
        </BackgroundWrapper>
    )
}

const Lists: React.FC<ListsProps> = (props) => {

    const { lists } = props
    return (
        <View style={styles.listItemContainer}>
            {lists.map((item, index) => (
                <TouchableOpacity style={styles.list} onPress={item.onPress}>
                    <TextNormal>{item.name}</TextNormal>
                    <CustomIcon name='right' type='antdesign' size={ms(18)} disabled />
                </TouchableOpacity>
            ))}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {

    },
    listItemContainer: {
        gap: 10
    },
    list: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
        height: vs(40),
    }

})