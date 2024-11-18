import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

interface PaymentScreenProps {

}

export const PaymentScreen: React.FC<PaymentScreenProps> = (props) => {

    const { } = props;

    return (
        <View style={styles.container}>
            <Text>PaymentScreen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
    }
});
