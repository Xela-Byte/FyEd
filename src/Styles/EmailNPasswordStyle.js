import {StyleSheet} from 'react-native';
import {colors} from './UniversalStyle';

export const emailNpasswordStyle = StyleSheet.create({
  container: {padding: 20},
  content: {
    marginTop: '65%',
    width: '100%',
    height: '50%',
  },
  headerText: {
    fontSize: 18,
    color: colors.black,
    fontFamily: 'Montserrat-Regular',
    marginTop: 20,
    marginBottom: 20,
  },
  inputLabel: {
    marginTop: 15,
    fontSize: 20,
    fontFamily: 'Montserrat-Medium',
    color: colors.black,
  },
  inputContainer: {
    width: '100%',
    height: 60,
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 30,
  },
  inputIcon: {
    marginTop: 20,
    marginRight: 20,
    fontSize: 40,
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    top: 20,
    fontSize: 20,
  },
  input: {
    width: '80%',
    borderBottomWidth: 2,
    borderBottomColor: colors.grey,
    fontSize: 20,
    fontFamily: 'Montserrat-Regular',
    color: colors.black,
  },
});
