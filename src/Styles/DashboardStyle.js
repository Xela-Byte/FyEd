import {StyleSheet} from 'react-native';
import {colors} from './UniversalStyle';

export const dashboardStyle = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.white,
  },
  notifyIconContainer: {
    width: 40,
    height: 40,
    position: 'absolute',
    left: '80%',
  },
  notifyIcon: {
    fontSize: 35,
    color: colors.grey,
  },
  content: {
    marginTop: 20,
    paddingHorizontal: 20,
    width: '100%',
  },
  header: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  welcomeText: {
    fontFamily: 'Nunito-Regular',
    color: colors.black,
    left: 15,
    fontSize: 16,
  },
  alternatingTextContainer: {
    width: '100%',
    paddingTop: 30,
  },
  alternatingText: {
    fontFamily: 'Nunito-SemiBold',
    color: colors.black,
    fontSize: 25,
  },

  onlineBadge: {
    width: 15,
    height: 15,
    borderRadius: 50,
    position: 'absolute',
    backgroundColor: colors.green,
    top: 0,
    left: 45,
    borderColor: colors.white,
    borderWidth: 2,
  },
  searchContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBar: {
    marginTop: 15,
    width: '80%',
    marginRight: '5%',
  },
  filter: {
    width: 50,
    marginTop: 15,
    height: 50,
    borderRadius: 10,
    backgroundColor: colors.green,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterIcon: {
    fontSize: 35,
    color: colors.white,
  },
  courseContainer: {
    width: '100%',
    paddingTop: 50,
  },
  courseHeaderText: {
    fontFamily: 'Nunito-SemiBold',
    color: colors.black,
    fontSize: 18,
  },
  courseDisplay: {
    paddingTop: 20,
    marginLeft: -20,
    width: '115%',
    height: '80%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  courseBox: {
    width: '40%',
    height: '40%',
    backgroundColor: colors.blue,
    paddingTop: 20,
    paddingHorizontal: 10,
    marginLeft: 20,
    marginBottom: 20,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
  },
  courseTitle: {
    fontSize: 18,
    color: colors.white,
    fontFamily: 'Nunito-Bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  courseIcon: {
    width: 100,
    height: 100,
  },
});
