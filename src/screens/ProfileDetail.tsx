import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import BackgroundWrapper from '../components/BackgroundWrapper';
import CustomHeader from '../components/common/CustomHeader';
import { NavigationProp } from '@react-navigation/native';
import { neonBlueShadow } from '../utils/constants';
import { ms } from 'react-native-size-matters';
import { COLORS } from '../utils/theme';
import CustomIcon from '../components/common/CustomIcon';
import { UploadPhoto } from '../components/EditProfile/UploadPhoto';
import Fields from '../components/common/Fields';
import { useForm } from 'react-hook-form';
import CustomButton from '../components/common/CustomButton';

interface ProfileDetailProps {
    navigation: NavigationProp<any>
}

export const ProfileDetailScreen: React.FC<ProfileDetailProps> = (props) => {

    const { navigation } = props;

    const { control } = useForm()

    const [editable, setEditable] = useState(false)

    const toggleEdit = () => {
        setEditable(p => !p)
    }

    const renderRight = () => {
        return (
            <TouchableOpacity style={styles.icon} onPress={toggleEdit}>
                <CustomIcon name='edit' type='material-icons' size={ms(18)} disabled />
            </TouchableOpacity>
        )
    }

    const FIELDS = [
        {
            id: '1',
            type: "text",
            editable: editable,
            name: "name",
            label: "Full Name",
            placeholder: "Enter your name",
            defaultValue: "Insaram Alam",
            labelStyle: { color: COLORS.secondary },
            containerStyle: { backgroundColor: "#232243", borderRadius: 14, borderWidth: 0 },
        },
        {
            id: '2',
            type: "textarea",
            name: "description",
            editable: editable,
            label: "Description",
            placeholder: "Enter description",
            defaultValue: "This is description text here.",
            labelStyle: { color: COLORS.secondary },
            containerStyle: { backgroundColor: "#232243", borderRadius: 14, borderWidth: 0 }
        },
        {
            id: '3',
            type: "text",
            editable: editable,
            name: "mobile",
            label: "Mobile",
            placeholder: "Enter your phone number",
            defaultValue: "+123123123123",
            keyboardType: "number-pad",
            labelStyle: { color: COLORS.secondary },
            containerStyle: { backgroundColor: "#232243", borderRadius: 14, borderWidth: 0 },
        },
        {
            id: '4',
            type: "text",
            editable: editable,
            name: "email",
            label: "Email",
            placeholder: "Enter your email",
            defaultValue: "alaminsaram@gmail.com",
            labelStyle: { color: COLORS.secondary },
            keyboardType: "email-address",
            containerStyle: { backgroundColor: "#232243", borderRadius: 14, borderWidth: 0 },
        },
        {
            id: '5',
            type: "text",
            editable: editable,
            name: "gender",
            label: "Gender",
            placeholder: "Enter your gender",
            defaultValue: "male",
            labelStyle: { color: COLORS.secondary },
            containerStyle: { backgroundColor: "#232243", borderRadius: 14, borderWidth: 0 },
        },
        {
            id: '6',
            type: "text",
            editable: editable,
            name: "skills",
            label: "Skills",
            placeholder: "Enter your skill",
            defaultValue: "Dance, swimming, reading",
            labelStyle: { color: COLORS.secondary },
            containerStyle: { backgroundColor: "#232243", borderRadius: 14, borderWidth: 0 },
        },
    ]

    return (
        <BackgroundWrapper>
            <CustomHeader title='Profile Details' renderRight={renderRight} />
            <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
                <UploadPhoto editable={editable} />
                <View style={styles.formContainer}>
                    <Fields control={control} fields={FIELDS} />
                </View>
                {editable && <CustomButton title='Save' />}
            </ScrollView>
        </BackgroundWrapper>
    )
};

const styles = StyleSheet.create({
    icon: {
        padding: 5,
        backgroundColor: COLORS.primary,
        height: ms(35),
        alignItems: "center",
        justifyContent: "center",
        aspectRatio: 1,
        borderRadius: 100,
        ...neonBlueShadow,
    },
    contentContainer: {
        paddingBottom: 20,
    },
    formContainer: {
        gap: 10
    }
});
