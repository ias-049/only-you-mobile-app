import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { COLORS } from '../../utils/theme';
import { TextNormal, TextSmall, TextSmaller } from '../common/Texts';
import { vs } from 'react-native-size-matters';

interface SubBoxProps {
    title: string;
    id: string;
    description: string;
    price: string;
    features: string[];
    onSelectPlan: () => void
}

export const SubBox: React.FC<SubBoxProps> = (props) => {

    const { title, description, price, onSelectPlan, features = [
        "Lorem ipsum dollar",
        "Lorem ipsum dollar",
        "Lorem ipsum dollar",
        "Lorem ipsum dollar",
    ] } = props;

    const isSelected = false

    return (
        <TouchableOpacity style={[styles.container, isSelected && styles.selected]} onPress={onSelectPlan}>
            {isSelected && <TextSmaller>Currently</TextSmaller>}
            <View style={styles.subInfo}>
                <View style={styles.textContainer}>
                    <TextNormal bold color={COLORS.secondary}>{title}</TextNormal>
                    <TextSmall>{description}</TextSmall>
                </View>
                <TextNormal bold color={COLORS.secondary}>${price}</TextNormal>
            </View>
            <View style={styles.featureContainer}>
                {features.map((feat, index) => (
                    <TextNormal key={index}>{`${feat}`}</TextNormal>
                ))}
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#232243",
        padding: 13,
        borderRadius: 14,
        borderColor: 'transparent',
        borderWidth: 2
    },
    selected: {
        borderColor: COLORS.secondary,
        backgroundColor: "#080620"
    },
    subInfo: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: vs(10),
        borderBottomColor: "#FFFFFF",
        borderBottomWidth: 0.5
    },
    textContainer: {
        gap: 13,
    },
    featureContainer: {
        gap: 5,
        marginTop: 8
    }
});
