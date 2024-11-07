import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { HomeTag, HOMETAGS } from '../../utils/constants';
import { TextSmall } from '../common/Texts';
import { COLORS } from '../../utils/theme';
import DashSVG from '../../assets/images/dash.svg'
import { scale, vs } from 'react-native-size-matters';

interface HomeTagsProps {
    selectedTag: string;
    onSelect: (arg: string) => void
}

export const HomeTags: React.FC<HomeTagsProps> = (props) => {

    const { selectedTag, onSelect } = props;

    const onPressTag = (item: HomeTag) => {
        onSelect(item.id)
    }

    return (
        <View>
            <FlatList
                horizontal
                data={HOMETAGS}
                style={styles.container}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                keyExtractor={item => item.id}
                renderItem={({ item, index }) => (
                    <TouchableOpacity style={[styles.tag, item.id == selectedTag && styles.selected]} onPress={() => onPressTag(item)}>
                        {item.id === "0" ?
                            <DashSVG />
                            : <TextSmall color={COLORS.white}>{item.name}</TextSmall>
                        }
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    },
    tag: {
        paddingHorizontal: scale(10),
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "#232243",
        height: vs(35),
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: scale(40)
    },
    separator: {
        width: scale(10)
    },
    selected: {
        backgroundColor: COLORS.navyBlue
    }
})