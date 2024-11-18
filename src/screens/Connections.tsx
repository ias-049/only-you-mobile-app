import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import BackgroundWrapper from '../components/BackgroundWrapper';
import CustomHeader from '../components/common/CustomHeader';
import { HomeSearch } from '../components/Home/HomeSearch';
import CustomIcon from '../components/common/CustomIcon';
import { COLORS } from '../utils/theme';
import { ms } from 'react-native-size-matters';
import { neonBlueShadow } from '../utils/constants';
import { FollowTabs } from '../components/EditProfile/FollowTabs';
import { PeopleSearhItem } from '../components/RecentSearch';

interface ConnectionsProps {

}

export const ConnectionsScreen: React.FC<ConnectionsProps> = (props) => {

    const [search, setSearch] = useState("")
    const [isSearch, setIsSearch] = useState(false)
    const [selectedTab, setSelectedTab] = useState<'following' | 'followers'>('following')

    const onSelectTab = (arg: 'following' | 'followers') => setSelectedTab(arg)
    const onSearch = (text: string) => setSearch(text)

    const toggleSearch = () => {
        setIsSearch(p => !p)

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

    const { } = props;

    return (
        <BackgroundWrapper>
            {isSearch ?
                <HomeSearch search={search} onSearch={onSearch} isClear onClear={onClear} />
                :
                <CustomHeader title='Connections' cgb renderRight={renderRight} />
            }
            {!isSearch && <FollowTabs onTabChange={onSelectTab} selected={selectedTab} />}
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 20, gap: 15 }} style={{ marginTop: 10 }}>
                <PeopleSearhItem />
                <PeopleSearhItem />
                <PeopleSearhItem />
                <PeopleSearhItem />
            </ScrollView>

        </BackgroundWrapper>
    );
};

const styles = StyleSheet.create({
    container: {
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
