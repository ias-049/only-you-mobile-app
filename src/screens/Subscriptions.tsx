import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import BackgroundWrapper from '../components/BackgroundWrapper';
import CustomHeader from '../components/common/CustomHeader';
import { SubBox } from '../components/Subscriptions/SubBox';
import { NavigationProp } from '@react-navigation/native';

interface SubscriptionsProps {
    navigation: NavigationProp<any>
}

export const SubscriptionsScreen: React.FC<SubscriptionsProps> = (props) => {

    const { navigation } = props;

    const plans = [
        {
            id: "1",
            title: "7 Day free trial",
            description: "Free trial",
            price: "0",
            features: ["Lorem ipsum dollar", "Lorem ipsum dollar", "Lorem ipsum dollar", "Lorem ipsum dollar",]
        },
        {
            id: "2",
            title: "7 Day free trial",
            description: "Free trial",
            price: "0",
            features: ["Lorem ipsum dollar", "Lorem ipsum dollar", "Lorem ipsum dollar", "Lorem ipsum dollar",]
        },
        {
            id: "3",
            title: "7 Day free trial",
            description: "Free trial",
            price: "0",
            features: ["Lorem ipsum dollar", "Lorem ipsum dollar", "Lorem ipsum dollar", "Lorem ipsum dollar",]
        },
    ]

    const onSelectPlan = (id: string) => {
        navigation.navigate("PaymentScreen", { id })
    }

    return (
        <BackgroundWrapper>
            <CustomHeader title='Subscription' cgb />
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ gap: 10 }}>
                {plans.map(plan => (
                    <SubBox key={plan.id} {...plan} onSelectPlan={() => onSelectPlan(plan.id)} />
                ))}
            </ScrollView>
        </BackgroundWrapper>
    );
};

const styles = StyleSheet.create({
    container: {
    }
});
