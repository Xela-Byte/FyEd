import {StyleSheet} from 'react-native';
import {colors, centering} from './UniversalStyle';

const registerStyle = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    position: 'relative',
    backgroundColor: colors.white,
  },
  heyText: {
    color: 'white',
    zIndex: 10,
    position: 'absolute',
    top: 120,
    left: 40,
    fontSize: 20,
    fontFamily: 'Nunito-SemiBold',
  },
  content: {
    marginTop: '65%',
    width: '100%',
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 24,
    color: colors.black,
    fontFamily: 'Montserrat-SemiBold',
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    height: 60,
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 20,
  },
  inputIcon: {
    marginTop: 20,
    marginRight: 20,
    fontSize: 40,
  },
  input: {
    width: '80%',
    borderBottomWidth: 2,
    borderBottomColor: colors.grey,
    fontSize: 20,
    fontFamily: 'Montserrat-Regular',
    color: colors.black,
  },
  dropdown: {
    width: '80%',
    marginTop: 10,
  },
  dropdownPlaceholder: {
    fontSize: 15,
    fontFamily: 'Montserrat-Regular',
    color: colors.grey,
  },
  dropdownListContainer: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.grey,
    marginTop: 10,
  },
  tickIconContainer: {
    backgroundColor: colors.deepGreen,
    borderRadius: 50,
    width: 20,
    height: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tickIcon: {
    fontSize: 14,
    color: colors.white,
  },
  welcomeTextContainer: {
    width: '100%',
    paddingTop: 20,
    paddingHorizontal: 5,
  },
  welcomeText: {
    fontSize: 16,
    color: colors.black,
    fontFamily: 'Montserrat-Regular',
  },
  registerBtnContainer: {
    width: '100%',
    paddingTop: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  registerBtn: {
    width: '100%',
    backgroundColor: colors.deepGreen,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  registerBtnText: {
    fontSize: 20,
    fontFamily: 'Montserrat-Medium',
    color: colors.white,
  },
});

export default registerStyle;
