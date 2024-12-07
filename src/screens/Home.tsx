import React, { useState } from 'react'
import { Pressable, ScrollView, StyleSheet } from 'react-native'
import BackgroundWrapper from '../components/BackgroundWrapper'
import { HomeHeader } from '../components/Home/HomeHeader'
import { HomeSearch } from '../components/Home/HomeSearch'
import { HomeTags } from '../components/Home/HomeTags'
import { HomeTabs } from '../components/Home/HomeTabs'
import { View } from 'react-native'
import { vs } from 'react-native-size-matters'
import { HomeCarousel } from '../components/Home/HomeCarousel'
import { CAROUSEL_DATA } from '../utils/constants'
import { Highlights } from '../components/Highlights'
import { NavigationProp } from '@react-navigation/native'

interface HomeScreenProps {
    navigation: NavigationProp<any>
}

export const HomeScreen: React.FC<HomeScreenProps> = (props) => {
    const { navigation } = props

    const [selectedTag, setSelectedTag] = useState<string>('0')
    const [selectedTab, setSelectedTab] = useState<'my-feed' | 'all'>('my-feed')

    const onSelectTag = (arg: string) => setSelectedTag(arg)
    const onSelectTab = (arg: 'my-feed' | 'all') => setSelectedTab(arg)
    const redirectToSearch = () => navigation.navigate("SearchScreen")

    return (
        <BackgroundWrapper>
            <HomeHeader />
            <View style={{ marginVertical: 10 }}>
                <HomeSearch onPressSearchBar={redirectToSearch} editable={false} search='' onSearch={() => { }} />
            </View>
            <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
                <HomeTags onSelect={onSelectTag} selectedTag={selectedTag} />
                <HomeTabs onTabChange={onSelectTab} selected={selectedTab} />
                <HomeCarousel data={CAROUSEL_DATA} />
                <Highlights />
            </ScrollView>
        </BackgroundWrapper >
    )
}

const styles = StyleSheet.create({
    container: {
        gap: vs(10),
        marginTop: vs(10),
        paddingBottom: vs(20)
    }
})