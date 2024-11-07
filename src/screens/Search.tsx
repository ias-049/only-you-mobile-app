import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import BackgroundWrapper from '../components/BackgroundWrapper'
import { HomeSearch } from '../components/Home/HomeSearch'
import { RecentSearch } from '../components/RecentSearch'
import { Highlight } from '../components/Highlight'
import { HomeTags } from '../components/Home/HomeTags'

interface SearchScreenProps { }

export const SearchScreen: React.FC<SearchScreenProps> = (props) => {

    const { } = props

    const [search, setSearch] = useState<string>("")
    const [selectedTag, setSelectedTag] = useState<string>("")


    const onSearch = (txt: string) => {
        setSearch(txt)
    }

    const onSelectTag = (txt: string) => {
        setSelectedTag(txt)
    }

    return (
        <BackgroundWrapper>
            <HomeSearch search={search} onSearch={onSearch} />
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ gap: 10 }}>
                {search.length ?
                    <View style={{ flex: 1, marginTop: 10 }}>
                        <HomeTags selectedTag={selectedTag} onSelect={onSelectTag} />
                        <RecentSearch />
                    </View>
                    :
                    <>
                        <RecentSearch />
                        <Highlight />
                        <Highlight />
                    </>
                }
            </ScrollView>
        </BackgroundWrapper>
    )
}

const styles = StyleSheet.create({})