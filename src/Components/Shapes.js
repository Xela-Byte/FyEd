import {Image, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import shapesStyles from '../Styles/ShapesStyle';
import {colors} from '../Styles/UniversalStyle';
import Logo from '../Assets/images/Logo.png';

const Shapes = ({width, height}) => {
  return (
    <View
      style={{
        width: width,
        height: height,
        position: 'relative',
        margin: -50,
      }}>
      <Image source={Logo} style={shapesStyles.logo} />
      <LinearGradient
        start={{x: 0.0, y: 0.25}}
        end={{x: 0.5, y: 1.0}}
        locations={[0, 0.75]}
        colors={[colors.deepGreen, colors.green]}
        style={[shapesStyles.circle, shapesStyles.circle1]}
      />
      <LinearGradient
        start={{x: 0.0, y: 0.25}}
        end={{x: 0.5, y: 1.0}}
        locations={[0, 0.75]}
        colors={[colors.lightGreen, '#087f8c']}
        style={[shapesStyles.circle, shapesStyles.circle2]}
      />
      <LinearGradient
        start={{x: 0.0, y: 0.25}}
        end={{x: 0.5, y: 1.0}}
        locations={[0, 1]}
        colors={['#087f8c', '#48c9b0']}
        style={[shapesStyles.circle, shapesStyles.circle3]}
      />
    </View>
  );
};

export default Shapes;
