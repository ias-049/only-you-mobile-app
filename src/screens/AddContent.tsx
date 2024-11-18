import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BackgroundWrapper from '../components/BackgroundWrapper'
import { TextBig } from '../components/common/Texts'
import { ms } from 'react-native-size-matters'
import TextArea from '../components/common/TextArea'
import { COLORS } from '../utils/theme'
import { LinkInput } from '../components/common/LinkInput'
import TagInput from '../components/AddContent/TagInput'
import PrivacySettings from '../components/AddContent/PrivacySettings'
import CustomButton from '../components/common/CustomButton'
import { useForm } from 'react-hook-form'

interface AddContentScreenProps { }

export const AddContentScreen: React.FC<AddContentScreenProps> = (props) => {

    const { } = props
    const { control, handleSubmit } = useForm()

    return (
        <BackgroundWrapper>
            <View style={styles.container}>
                <TextBig >Add Content</TextBig>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{
                    paddingBottom: 50,
                    gap: ms(10)
                }}>
                    <TextArea labelStyle={{ color: COLORS.secondary }} placeholder='write' label='Write' onChangeT={(val: string) => { console.log(val) }} />
                    <LinkInput />
                    <TagInput />
                    <PrivacySettings />
                    <CustomButton title='Upload' />
                </ScrollView>
            </View>
        </BackgroundWrapper>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: ms(12),
        paddingTop: ms(10),
        gap: ms(10)
    }
})