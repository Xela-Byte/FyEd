import {useEffect, useState} from 'react';
import {
  Alert,
  Dimensions,
  Image,
  Pressable,
  StatusBar,
  Text,
  View,
} from 'react-native';
import TouchID from 'react-native-touch-id';
import FingerprintIcon from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import ToastManager, {Toast} from 'toastify-react-native';
import WigglyArrow from '../../Assets/images/wigglyArrow.png';
import Shapes from '../../Components/Shapes';
import {selectAllUserData} from '../../StateManagement/features/auth/userSlice';
import {setBiometric} from '../../StateManagement/features/auth/userSlice';
import {enableBiometricAuthStyle} from '../../Styles/EnableBiometricAuthStyle';
import registerStyle from '../../Styles/RegisterStyle';
import {colors} from '../../Styles/UniversalStyle';

const EnableBiometricAuth = ({navigation}) => {
  const [isAuth, setIsAuth] = useState(false);
  const dispatch = useDispatch();
  const windowWidth = Dimensions.get('window').width;
  const optionalConfigObject = {
    title: 'FyEd',
    imageColor: colors.grey,
    imageErrorColor: '#ff0000',
    sensorDescription: 'Touch fingerprint sensor',
    sensorErrorDescription: 'Failed',
    cancelText: 'Cancel',
    unifiedErrors: false,
  };
  const biometricAuth = () => {
    TouchID.isSupported(optionalConfigObject).then(biometricType => {
      if (biometricType === 'FaceID') {
        Alert.alert('Face ID is supported');
      } else {
        TouchID.authenticate('', optionalConfigObject)
          .then(success => {
            Toast.success('Fingerprint Enrolled Successfully!');
            setIsAuth(success);
            setTimeout(() => {
              navigation.navigate('setProfilePicture');
            }, 1000);
          })
          .catch(err => {
            Alert.alert(err);
          });
      }
    });
  };

  let userData = useSelector(selectAllUserData);
  useEffect(() => {
    isAuth && dispatch(setBiometric(userData));
  }, [isAuth]);

  return (
    <View style={registerStyle.container}>
      <StatusBar backgroundColor={colors.green} />
      <View>
        <Text style={registerStyle.heyText}>Hey there!</Text>
        <Shapes />
      </View>
      <View style={enableBiometricAuthStyle.content}>
        <Text style={enableBiometricAuthStyle.headerText}>
          You wanna login faster and don't wanna let people snoop on your
          personal progress?
        </Text>
        <Text style={enableBiometricAuthStyle.headerSubText}>
          Enable Biometric Auth
        </Text>
        <Image source={WigglyArrow} style={enableBiometricAuthStyle.arrow} />
        <Pressable onPress={() => biometricAuth()}>
          <FingerprintIcon
            name="finger-print"
            style={enableBiometricAuthStyle.fingerprintIcon}
          />
        </Pressable>
        <View style={[registerStyle.registerBtnContainer, {paddingTop: 20}]}>
          <Pressable
            style={registerStyle.registerBtn}
            onPress={() => {
              navigation.navigate('setProfilePicture');
            }}>
            <Text style={registerStyle.registerBtnText}>Skip!</Text>
          </Pressable>
        </View>
      </View>
      <ToastManager
        width={0.9 * windowWidth}
        height={60}
        positionValue={10}
        animationStyle={'rightInOut'}
        fontFamily="Nunito-Regular"
        fontSize={14}
      />
    </View>
  );
};

export default EnableBiometricAuth;
