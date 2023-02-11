import {StyleSheet} from 'react-native';
import {colors} from './UniversalStyle';

export const enableBiometricAuthStyle = StyleSheet.create({
  content: {
    marginTop: '65%',
    padding: 20,
  },
  headerText: {
    color: colors.black,
    fontFamily: 'Nunito-SemiBold',
    fontSize: 18,
  },
  headerSubText: {
    color: colors.black,
    fontFamily: 'Nunito-Regular',
    fontSize: 18,
    marginTop: 50,
    left: '40%',
  },
  arrow: {
    left: '30%',
  },
  fingerprintIcon: {
    color: colors.grey,
    left: '30%',
    fontSize: 90,
  },
});
