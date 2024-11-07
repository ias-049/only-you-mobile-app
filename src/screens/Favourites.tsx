import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import BackgroundWrapper from '../components/BackgroundWrapper'
import CustomHeader from '../components/common/CustomHeader'
import CustomIcon from '../components/common/CustomIcon'
import { COLORS } from '../utils/theme'
import { ms } from 'react-native-size-matters'
import { neonBlueShadow } from '../utils/constants'
import { HomeSearch } from '../components/Home/HomeSearch'
import { RecentSearch } from '../components/RecentSearch'

interface FavouritesScreenProps { }

export const FavouritesScreen: React.FC<FavouritesScreenProps> = (props) => {

    const { } = props

    const [isSearch, setIsSearch] = useState(false)
    const [search, setSearch] = useState("")

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
                <CustomHeader title='Favourites' cgb renderRight={renderRight} />
            }
            <RecentSearch />
        </BackgroundWrapper>
    )
}

const styles = StyleSheet.create({
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
})