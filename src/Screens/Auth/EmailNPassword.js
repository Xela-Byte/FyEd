import {useState} from 'react';
import {
  Dimensions,
  KeyboardAvoidingView,
  Pressable,
  StatusBar,
  Text,
  TextInput,
  View,
} from 'react-native';
import {
  default as EyeIcon,
  default as Feather,
  default as LockIcon,
} from 'react-native-vector-icons/Feather';
import {useDispatch} from 'react-redux';
import ToastManager, {Toast} from 'toastify-react-native';
import Shapes from '../../Components/Shapes';
import {useTogglePasswordVisibility} from '../../Hooks/useTogglePasswordVisibility';
import {setEmailNPassword} from '../../StateManagement/features/auth/userSlice';
import {emailNpasswordStyle} from '../../Styles/EmailNPasswordStyle';
import registerStyle from '../../Styles/RegisterStyle';
import {colors} from '../../Styles/UniversalStyle';

const EmailNPassword = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const windowWidth = Dimensions.get('window').width;
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const {passwordVisibility, rightIcon, handlePasswordVisibility} =
    useTogglePasswordVisibility();
  const dispatch = useDispatch();

  let values = {};
  values = {...values, email: email, password: password};

  const handleValidation = () => {
    const {email, password} = values;
    if (!email && !password) {
      Toast.error('Please fill all fields');
      return false;
    }
    if (email.length < 10 || !email.includes('@') || !email.includes('.')) {
      Toast.error('Invalid email😶');
      return false;
    }
    if (password.length < 8) {
      Toast.error('Password is too short🫠!');
      return false;
    } else {
      return true;
    }
  };

  const handleSubmit = () => {
    if (handleValidation()) {
      dispatch(setEmailNPassword(values));
      navigation.navigate('enableBiometric');
    }
  };

  return (
    <View style={registerStyle.container}>
      <StatusBar backgroundColor={colors.green} />
      <View>
        <Text style={[registerStyle.heyText]}>Hey there!</Text>
        <Shapes />
      </View>
      <View style={emailNpasswordStyle.container}>
        <KeyboardAvoidingView
          style={emailNpasswordStyle.content}
          behavior="position">
          <Text
            style={[
              emailNpasswordStyle.headerText,
              {opacity: isHeaderVisible === true ? 1 : 0},
            ]}>
            Just a sec, we are almost done!
          </Text>
          <Text style={emailNpasswordStyle.inputLabel}>Email</Text>
          <View style={emailNpasswordStyle.inputContainer}>
            <Feather
              name="at-sign"
              color={colors.grey}
              style={emailNpasswordStyle.inputIcon}
            />
            <TextInput
              placeholder="Email"
              placeholderTextColor={colors.grey}
              style={[emailNpasswordStyle.input, {fontSize: 16}]}
              selectionColor={colors.black}
              onChangeText={setEmail}
              onFocus={() => {
                setIsHeaderVisible(false);
              }}
              onBlur={() => {
                setIsHeaderVisible(true);
              }}
            />
          </View>
          <Text style={emailNpasswordStyle.inputLabel}>Password</Text>
          <View style={emailNpasswordStyle.inputContainer} behavior="padding">
            <LockIcon
              name="lock"
              color={colors.grey}
              style={emailNpasswordStyle.inputIcon}
            />
            <TextInput
              placeholder="Password"
              placeholderTextColor={colors.grey}
              style={emailNpasswordStyle.input}
              selectionColor={colors.black}
              onChangeText={setPassword}
              onFocus={() => {
                setIsHeaderVisible(false);
              }}
              secureTextEntry={passwordVisibility}
              onBlur={() => {
                setIsHeaderVisible(true);
              }}
            />

            <Pressable onPress={handlePasswordVisibility}>
              <EyeIcon
                name={rightIcon}
                color={colors.grey}
                style={emailNpasswordStyle.eyeIcon}
              />
            </Pressable>
          </View>
          <Text
            style={{
              color: colors.black,
              fontFamily: 'Nunito-Regular',
              top: -15,
              left: 5,
            }}>
            Password must at least be 8 characters.
          </Text>
        </KeyboardAvoidingView>

        <View style={[registerStyle.welcomeTextContainer, {marginTop: 20}]}>
          <Text style={registerStyle.welcomeText}>
            Already in the club?{' '}
            <Text
              style={{color: colors.deepGreen}}
              onPress={() => {
                navigation.navigate('login');
              }}>
              Let's Go!
            </Text>
          </Text>
        </View>
        <View style={registerStyle.registerBtnContainer}>
          <Pressable
            style={registerStyle.registerBtn}
            onPress={() => {
              handleSubmit();
            }}>
            <Text style={registerStyle.registerBtnText}>Get Started!</Text>
          </Pressable>
        </View>
      </View>
      <ToastManager
        width={0.9 * windowWidth}
        height={60}
        positionValue={10}
        animationStyle={'rightInOut'}
        fontFamily="Nunito-Regular"
      />
    </View>
  );
};

export default EmailNPassword;
