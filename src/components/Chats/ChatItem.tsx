import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { scale, vs } from 'react-native-size-matters';
import { IMAGES } from '../../utils/images';
import { TextNormal, TextSmall, TextSmaller } from '../common/Texts';
import { COLORS } from '../../utils/theme';

interface ChatItemProps {

}

export const ChatItem: React.FC<ChatItemProps> = (props) => {

    const { } = props;

    return (
        <View style={styles.container}>
            <View style={styles.avatarContainer}>
                <Image source={IMAGES.profile} style={styles.image} />
            </View>
            <View style={styles.textContainer}>
                <TextNormal>Brooklyn Simmons</TextNormal>
                <TextSmall color={COLORS.secondary}>{`"${"I am ready to help"}"`}</TextSmall>
            </View>
            <View style={styles.numberContainer}>
                <View style={styles.messageCountContainer}>
                    <TextSmaller color={COLORS.black}>1</TextSmaller>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 5,
        alignItems: "center",
        height: vs(70),
        gap: 15
    },
    image: { height: "100%", width: '100%' },
    avatarContainer: {
        height: vs(50),
        aspectRatio: 1,
        borderRadius: 100,
        overflow: "hidden"
    },
    textContainer: {
        // height: vs(60),
        gap: 7,
        flex: 1
    },
    numberContainer: {
        width: scale(20),
        height: "100%",
        justifyContent: "center",
    },
    messageCountContainer: {
        backgroundColor: "#FFF7FA",
        borderRadius: 100,
        width: scale(18),
        aspectRatio: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});
