import {useEffect, useState} from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Navigator from './src/Components/Navigation/Navigator';
import {WithSplashScreen} from './src/Components/SplashScreen';
import {persistor, store} from './src/StateManagement/store';
import {setCustomText} from 'react-native-global-props';
import {colors} from './src/Styles/UniversalStyle';

const App = () => {
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsAppReady(true);
    }, 1500);
  }, []);

  const customTextProps = {
    style: {
      fontFamily: 'Nunito-Regular',
    },
  };

  useEffect(() => {
    setCustomText(customTextProps);
  }, []);

  return (
    <WithSplashScreen isAppReady={isAppReady}>
      <PersistGate persistor={persistor}>
        <Provider store={store}>
          <StatusBar backgroundColor={colors.lightGreen} />
          <Navigator />
        </Provider>
      </PersistGate>
    </WithSplashScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
});

export default App;
