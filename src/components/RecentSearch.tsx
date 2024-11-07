import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { ms, vs } from 'react-native-size-matters';
import { IMAGES } from '../utils/images';
import { TextNormal, TextSmall } from './common/Texts';
import { COLORS } from '../utils/theme';
import CustomIcon from './common/CustomIcon';

interface RecentSearchProps {

}

export type PeopleSearhItemType = {

}

export const RecentSearch: React.FC<RecentSearchProps> = (props) => {

    const { } = props;

    return (
        <View style={styles.container}>
            <PeopleSearhItem />
            <PeopleSearhItem />
            <PeopleSearhItem />
        </View>
    )
}

export const PeopleSearhItem: React.FC<PeopleSearhItemType> = (props) => {

    const { } = props

    return (
        <View style={styles.subContainer}>
            <View style={styles.row}>
                <Image style={styles.profileImg} source={IMAGES.profile} />
                <View style={styles.textContainer}>
                    <TextNormal >Aurora Wilde</TextNormal>
                    <TextSmall bold color={COLORS.secondary}>@auroro</TextSmall>
                </View>
            </View>
            <CustomIcon name='x' type='feather' color={COLORS.white} size={ms(20)} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        gap: 10
    },
    subContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15
    },
    profileImg: {
        borderRadius: 100,
        height: 50,
        width: 50,
    },
    textContainer: {
        // gap: 1,

    }
})