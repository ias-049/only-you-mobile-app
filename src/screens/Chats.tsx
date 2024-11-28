import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import BackgroundWrapper from '../components/BackgroundWrapper';
import { TextBig } from '../components/common/Texts';
import CustomIcon from '../components/common/CustomIcon';
import { ms } from 'react-native-size-matters';
import { HomeSearch } from '../components/Home/HomeSearch';
import CustomHeader from '../components/common/CustomHeader';
import { COLORS } from '../utils/theme';
import { neonBlueShadow } from '../utils/constants';
import { ChatTabs } from '../components/Chats/ChatTabs';
import { ChatList } from '../components/Chats/ChatList';

interface ChatsProps {

}

export const ChatScreen: React.FC<ChatsProps> = (props) => {

    const { } = props;

    const [isSearch, setIsSearch] = useState(false)
    const [search, setSearch] = useState("")
    const [selectedTab, setSelectedTab] = useState<'my-feed' | 'all'>('my-feed')

    const onSelectTab = (arg: 'my-feed' | 'all') => setSelectedTab(arg)

    const toggleSearch = () => {
        setIsSearch(p => !p)
    }

    const onSearch = (text: string) => {
        setSearch(text)
    }

    const onClear = () => {
        setSearch("")
        toggleSearch()
    }


    const renderRight = () => {
        return (
            <TouchableOpacity style={styles.icon} onPress={toggleSearch}>
                <CustomIcon name="search1" type='antdesign' color='white' disabled size={ms(14)} />
            </TouchableOpacity>
        )
    }

    return (
        <BackgroundWrapper>
            {isSearch ?
                <HomeSearch search={search} onSearch={onSearch} isClear onClear={onClear} />
                :
                <CustomHeader title='Chat' renderRight={renderRight} />
            }
            <View style={styles.container}>
                <ChatTabs onTabChange={onSelectTab} selected={selectedTab} />
                <ChatList />
            </View>
        </BackgroundWrapper>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 10
    },
    icon: {
        padding: 2,
        backgroundColor: COLORS.primary,
        height: ms(30),
        alignItems: "center",
        justifyContent: "center",
        aspectRatio: 1,
        borderRadius: 100,
        ...neonBlueShadow,
    }
});
