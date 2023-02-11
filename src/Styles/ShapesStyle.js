import {StyleSheet} from 'react-native';
import {colors} from './UniversalStyle';

const shapesStyles = StyleSheet.create({
  logo: {
    zIndex: 999,
    borderRadius: 50,
    borderWidth: 5,
    borderColor: colors.white,
    width: 60,
    height: 60,
    position: 'absolute',
    top: 100,
    left: 90,
  },
  circle: {
    position: 'absolute',
    width: 320,
    height: 320,
    borderRadius: 1000,
  },
  circle1: {
    top: -90,
    left: -70,
    zIndex: 3,
  },
  circle2: {
    top: -50,
    left: -30,
    zIndex: 2,
    transform: 'rotate(190deg)',
  },
  circle3: {
    top: -120,
    left: 10,
    zIndex: 1,
  },
});

export default shapesStyles;
