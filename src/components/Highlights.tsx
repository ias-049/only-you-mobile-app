import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextBig } from './common/Texts'
import { COLORS } from '../utils/theme'
import { Highlight } from './Highlight'
import { ms } from 'react-native-size-matters'

interface HighlightProps {

}

export const Highlights: React.FC<HighlightProps> = () => {
  return (
    <View style={styles.container}>
      <TextBig color={COLORS.white} isOleo bold>Highlights</TextBig>
      <Highlight />
      <Highlight />
      <Highlight />
      <Highlight />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: ms(10)
  },

})