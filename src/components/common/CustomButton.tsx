import React from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from 'react-native';

import { ms, scale, vs } from 'react-native-size-matters';
import { COLORS } from '../../utils/theme';
import { TextNormal } from './Texts';
import LinearGradient from 'react-native-linear-gradient';
import ButtonBackground from '../../assets/images/btnBG.svg'
import CustomIcon from './CustomIcon';
import { Icons } from '../../utils/interface';

interface ICustomButtonProps extends TouchableOpacityProps {
  title: string;
  secondary?: boolean;
  containerStyle?: ViewStyle;
  width?: any;
  tirtiary?: boolean;
  loading?: boolean;
  icon?: Icons
}

const CustomButton: React.FC<ICustomButtonProps> = props => {
  const {
    title,
    onPress,
    secondary,
    containerStyle,
    width,
    tirtiary,
    icon,
    loading,
    disabled,
    ...rest
  } = props;
  if (secondary || tirtiary) {
    return (
      <TouchableOpacity
        style={[
          styles.container,
          styles.shadowProp,
          secondary && styles.secondary,
          tirtiary && styles.tirtiary,
          containerStyle,
          width && { width },
          disabled && styles.disabledButton,
        ]}
        onPress={onPress}
        {...rest}>
        {loading ? (
          <ActivityIndicator size={'small'} color={'white'} />
        ) : (
          <TextNormal
            bold
            color={
              disabled ? '#CED7DA' : tirtiary ? COLORS.primary : COLORS.black
            }
          // ∏textStyle={{fontSize: scale(13)}}
          >
            {title}
          </TextNormal>
        )}
      </TouchableOpacity>
    );
  }
  return (

    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      style={[
        // { backgroundColor: 'red' },
        styles.shadowProp,
        width && { width },
        containerStyle,
        disabled && styles.disabledButton,
      ]}
    >
      {/* <ButtonBackground width={"100%"} */}
      <Image source={require('../../assets/images/btnBG.png')} style={{ height: vs(60), width: '100%' }} />
      <View style={styles.linearContainer}>
        {loading ? (
          <ActivityIndicator size={'small'} color={'white'} />
        ) : (
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
            <CustomIcon {...icon} disabled size={ms(18)} />
            <TextNormal bold color={disabled ? '#CED7DA' : COLORS.white}>
              {title}
            </TextNormal>
          </View>
        )}
      </View>
    </TouchableOpacity >
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {},
  linearContainer: {
    minWidth: scale(80),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    position: 'absolute',
    width: '100%',
    height: '100%'
  },
  secondary: {
  },
  tirtiary: {
  },
  shadowProp: {
    // shadowColor: COLORS.primary,
    // shadowOffset: { width: -5, height: 5 },
    // shadowOpacity: 0.2,
    // shadowRadius: 3,
    // elevation: 5,
  },
  disabledButton: {
    backgroundColor: '#E5EDF2',
  },
});
