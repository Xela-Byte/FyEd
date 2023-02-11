import {View, Text, Pressable} from 'react-native';

const Login = ({navigation}) => {
  return (
    <View>
      <Text>Login</Text>
      <Pressable onPress={() => navigation.navigate('register')}>
        <Text style={{color: 'black'}}>Go to Register</Text>
      </Pressable>
    </View>
  );
};

export default Login;
