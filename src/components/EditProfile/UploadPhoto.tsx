import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { IMAGES } from '../../utils/images';
import { TextSmall } from '../common/Texts';

interface UploadPhotoProps {
    editable: boolean
}

export const UploadPhoto: React.FC<UploadPhotoProps> = (props) => {

    const { editable } = props;

    const onPressUpdate = () => {

    }

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={IMAGES.userProfile} height={120} width={120} />
            </View>
            {editable && <TextSmall onPress={onPressUpdate} center underline>Update</TextSmall>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: '100%',
        gap: 7
    },
    imageContainer: {
        borderRadius: 100,
        overflow: 'hidden'
    }
});
