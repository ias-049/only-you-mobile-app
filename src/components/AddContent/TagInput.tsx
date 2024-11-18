import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import CustomIcon from '../common/CustomIcon';
import { vs } from 'react-native-size-matters';
import { TextSmall, TextSmaller } from '../common/Texts';
import { COLORS } from '../../utils/theme';

interface TagInputProps { }

const TagInput: React.FC<TagInputProps> = (props) => {
    const { } = props
    const [inputValue, setInputValue] = useState('');
    const [tags, setTags] = useState([]);

    // Add a new tag, handling the '#' prefix
    const addTag = () => {
        if (inputValue.trim()) {
            const tag = inputValue.startsWith('#') ? inputValue : `#${inputValue}`;
            setTags((prevTags) => [...prevTags, tag]);
            setInputValue('');
        }
    };

    // Remove a tag from the list
    const removeTag = (tagToRemove) => {
        setTags((prevTags) => prevTags.filter((tag) => tag !== tagToRemove));
    };

    return (
        <View style={{}}>
            <TextSmall bold color={COLORS.secondary}>Upload Tags</TextSmall>
            <View style={styles.container}>
                <View style={styles.tagWrapper}>
                    {tags.map((tag, index) => (
                        <View key={index} style={styles.tagContainer}>
                            <TextSmall color={"#2E93D0"}>{tag}</TextSmall>
                            <TouchableOpacity onPress={() => removeTag(tag)} style={styles.removeTagButton}>
                                <CustomIcon type='feather' name="x" size={18} color="#fff" />
                            </TouchableOpacity>
                        </View>
                    ))}
                    <TextInput
                        value={inputValue}
                        onChangeText={setInputValue}
                        style={styles.input}
                        placeholder="Add a tag"
                        placeholderTextColor="#bbb"
                        onSubmitEditing={addTag}
                        onBlur={addTag}
                        returnKeyType="done"
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#232243',
        borderRadius: 20,
        padding: 10,
        alignItems: 'center',
        marginTop: 10,
    },
    tagWrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginRight: 10,
        alignItems: 'center'
    },
    tagContainer: {
        backgroundColor: '#4B4B76',
        borderRadius: 8,
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginRight: 8,
        marginBottom: 8,
        flexDirection: 'row',
        height: vs(30),
        alignItems: 'center',
    },
    tagText: {
        color: '#fff',
        // fontSize: 14,
    },
    removeTagButton: {
        marginLeft: 6,
    },
    input: {
        flex: 1,
        height: vs(30),
        color: '#fff',
        fontSize: 16,
        paddingHorizontal: 10,
        borderRadius: 8,
    },
});

export default TagInput;
