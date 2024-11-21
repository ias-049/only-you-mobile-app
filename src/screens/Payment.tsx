import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import BackgroundWrapper from '../components/BackgroundWrapper';
import CustomHeader from '../components/common/CustomHeader';
import { TextNormal } from '../components/common/Texts';
import { COLORS } from '../utils/theme';

interface PaymentScreenProps {

}

export const PaymentScreen: React.FC<PaymentScreenProps> = (props) => {

    const { } = props;

    return (
        <BackgroundWrapper>
            <CustomHeader title='Payment' cgb />
            <View style={styles.container}>
                <TextNormal color={COLORS.secondary}>Select a Payment Method</TextNormal>
            </View>
        </BackgroundWrapper>
    );
};

const styles = StyleSheet.create({
    container: {
    }
});
