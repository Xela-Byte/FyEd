import {Image, StatusBar, Text, View} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import onboardingStyle from '../../Styles/OnboardingStyle';
import Logo from '../../Assets/images/Logo.png';
import Onboarding1 from '../../Assets/images/onboarding1.png';
import Onboarding2 from '../../Assets/images/onboarding2.png';
import Onboarding3 from '../../Assets/images/onboarding3.png';
import {colors} from '../../Styles/UniversalStyle';

const data = [
  {
    key: 'one',
    title: (
      <Text>
        Manage coursework and
        <Text style={onboardingStyle.subTitle}> track your progress</Text>.
      </Text>
    ),
    text: '',
    image: Onboarding1,
    bg: colors.lightGreen,
  },
  {
    key: 'two',
    title: (
      <Text>
        Stay motivated and
        <Text style={onboardingStyle.subTitle}> easily set reminders</Text>.
      </Text>
    ),
    text: '',
    image: Onboarding2,
    bg: colors.lightGreen,
  },
  {
    key: 'three',
    title: (
      <Text>
        Free access to helpful
        <Text style={onboardingStyle.subTitle}>
          {' '}
          resources and pratice quiz
        </Text>
        .
      </Text>
    ),

    text: '',
    image: Onboarding3,
    bg: colors.lightGreen,
  },
];

const Onboarding = ({navigation}) => {
  const renderItem = ({item}) => {
    return (
      <View style={[onboardingStyle.slide, {backgroundColor: item.bg}]}>
        <Text style={onboardingStyle.title}>{item.title}</Text>
        <Image source={item.image} style={onboardingStyle.image} />
      </View>
    );
  };

  const keyExtractor = item => item.key;

  const renderNextButton = () => {
    return (
      <View style={onboardingStyle.button}>
        <Text style={onboardingStyle.btnText}>Next</Text>
      </View>
    );
  };

  const renderSkipButton = () => {
    return (
      <View style={onboardingStyle.skipTextWrapper}>
        <Text style={onboardingStyle.bText}>Skip</Text>
      </View>
    );
  };

  const renderDoneButton = () => {
    return (
      <View style={onboardingStyle.button}>
        <Text style={onboardingStyle.btnText}>Start</Text>
      </View>
    );
  };

  const handleDone = () => {
    navigation.navigate('register');
  };

  return (
    <View style={{flex: 1, backgroundColor: colors.lightGreen}}>
      <StatusBar backgroundColor={colors.lightGreen} />
      <Image source={Logo} style={onboardingStyle.logo} />
      <AppIntroSlider
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        dotStyle={onboardingStyle.dotStyle}
        activeDotStyle={onboardingStyle.activeDotStyle}
        renderDoneButton={renderDoneButton}
        renderSkipButton={renderSkipButton}
        renderNextButton={renderNextButton}
        bottomButton
        showSkipButton
        onDone={() => handleDone()}
        data={data}
      />
    </View>
  );
};

export default Onboarding;
