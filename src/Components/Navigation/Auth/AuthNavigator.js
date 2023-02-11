import {createStackNavigator} from '@react-navigation/stack';
import Login from '../../../Screens/Auth/Login';
import Register from '../../../Screens/Auth/Register';
import {TransitionPresets} from '@react-navigation/stack';
import Onboarding from '../../../Screens/Auth/Onboarding';
import EmailNPassword from '../../../Screens/Auth/EmailNPassword';
import EnableBiometricAuth from '../../../Screens/Auth/EnableBiometricAuth';
import SetProfilePicture from '../../../Screens/Auth/SetProfilePicture';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <Stack.Screen name="onboarding" component={Onboarding} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="register" component={Register} />
      <Stack.Screen name="emailNpassword" component={EmailNPassword} />
      <Stack.Screen name="enableBiometric" component={EnableBiometricAuth} />
      <Stack.Screen name="setProfilePicture" component={SetProfilePicture} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
