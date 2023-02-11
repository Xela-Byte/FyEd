import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {selectAllUserData} from '../../StateManagement/features/auth/userSlice';
import AuthNavigator from './Auth/AuthNavigator';
import InAppNavigator from './InApp/InAppNavigator';

const Navigator = () => {
  const userData = useSelector(selectAllUserData);
  const lastData = userData?.profilePhoto ? userData?.profilePhoto : false;

  return (
    <NavigationContainer>
      {lastData === false && <AuthNavigator />}
      {lastData && userData && <InAppNavigator />}
    </NavigationContainer>
  );
};

export default Navigator;
