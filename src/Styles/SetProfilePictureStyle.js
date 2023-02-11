import {StyleSheet} from 'react-native';
import {colors} from './UniversalStyle';

export const setProfilePictureStyle = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.white,
  },
  content: {
    width: '100%',
    marginTop: '65%',
    padding: 20,
  },
  headerTextContainer: {
    width: '80%',
    marginLeft: '10%',
  },
  headerText: {
    textAlign: 'center',
    color: colors.black,
    fontSize: 20,
    fontFamily: 'Nunito-Regular',
  },

  setterContainer: {
    width: 120,
    height: 120,
    position: 'relative',
    marginLeft: '30%',
    marginTop: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  setterBG: {
    width: '100%',
    height: '100%',
    borderRadius: 25,
  },
  setterBG1: {
    transform: 'rotate(90deg)',
    position: 'absolute',
  },
  setterBG2: {
    transform: 'rotate(135deg)',
    position: 'absolute',
  },
  iconContainer: {
    width: 70,
    height: 70,
    backgroundColor: colors.lightGray,
    borderRadius: 25,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 50,
    color: colors.black,
  },
});
