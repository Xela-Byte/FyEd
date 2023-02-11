import {Dimensions, StyleSheet} from 'react-native';
import {colors} from './UniversalStyle';

const {width, height} = Dimensions.get('window');

const onboardingStyle = StyleSheet.create({
  logo: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 5,
    borderColor: colors.white,
    margin: 15,
  },
  slide: {
    position: 'relative',
    flex: 1,
    marginTop: 40,
    paddingBottom: 96, // Add padding to offset large buttons and pagination in bottom of page
  },
  image: {
    height: '60%',
    width,
    resizeMode: 'contain',
    top: 20,
  },
  title: {
    fontSize: 24,
    color: 'black',
    textAlign: 'center',
    fontFamily: 'Montserrat-Medium',
    marginHorizontal: 30,
  },
  subTitle: {color: colors.deepGreen},
  button: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: colors.deepGreen,
    bottom: 35,
  },
  skipTextWrapper: {
    height: 40,
    position: 'absolute',
    top: -height + 50,
    left: 0.75 * width,
  },
  btnText: {
    fontSize: 20,
    fontFamily: 'Montserrat-Medium',
    color: colors.white,
  },
  bText: {
    fontSize: 20,
    color: colors.black,
    fontFamily: 'Montserrat-Regular',
  },
  activeDotStyle: {
    bottom: 100,
    backgroundColor: colors.deepGreen,
    width: 40,
  },
  dotStyle: {
    bottom: 100,
    backgroundColor: colors.deepGreen,
  },
});

export default onboardingStyle;
