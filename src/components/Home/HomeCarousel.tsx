import React, { useCallback, useState } from 'react'
import { FlatList, Image, NativeScrollEvent, NativeSyntheticEvent, StyleSheet, TouchableOpacity, View } from 'react-native'
import { ms, scale, vs } from 'react-native-size-matters'
import { CAROUSEL_DATA, HomeCarouselType } from '../../utils/constants'
import { COLORS } from '../../utils/theme'
import CustomIcon from '../common/CustomIcon'
import Pagination from '../common/Pagination'
import { FavHeart } from '../FavHeart'

interface HomeCarouselProps {
    data: HomeCarouselType[]
}

export const HomeCarousel: React.FC<HomeCarouselProps> = (props) => {

    const { data } = props

    const [activePage, setActivePage] = useState(0)

    const handleScroll = useCallback((event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const slideSize = event.nativeEvent.layoutMeasurement.width;
        const index = event.nativeEvent.contentOffset.x / slideSize;
        const roundIndex = Math.round(index);
        setActivePage(roundIndex)
    }, []);


    return (
        <View style={styles.container}>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={data}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                pagingEnabled
                onScroll={handleScroll}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.carouselItem}>
                        <Image source={item.img} style={styles.img} />
                        <View style={styles.carouselContainer}>
                            <FavHeart isFav={item.isFav} onPress={() => { }} containerStyle={{
                                position: 'absolute',
                                right: 10,
                                top: 10,
                            }} />
                        </View>
                    </TouchableOpacity>
                )}
            />
            <Pagination currentPage={activePage} pages={data.length} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
    },
    carouselItem: {
        height: vs(150),
        width: vs(280),
        borderRadius: 10,
        overflow: 'hidden'
    },
    img: {
        height: '100%',
        width: '100%',
    },
    carouselContainer: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    separator: {
        width: scale(10),
    }
})