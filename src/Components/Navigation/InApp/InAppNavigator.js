import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import Dashboard from '../../../Screens/InApp/Dashboard';

const Stack = createStackNavigator();

const InAppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <Stack.Screen name="dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
};

export default InAppNavigator;
