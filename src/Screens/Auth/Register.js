import {useState} from 'react';
import {
  Dimensions,
  Pressable,
  StatusBar,
  Text,
  TextInput,
  View,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  default as GenderIcon,
  default as MaterialIcon,
} from 'react-native-vector-icons/MaterialCommunityIcons';
import LevelIcon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch} from 'react-redux';
import ToastManager, {Toast} from 'toastify-react-native';
import Shapes from '../../Components/Shapes';
import {addUser} from '../../StateManagement/features/auth/userSlice';
import registerStyle from '../../Styles/RegisterStyle';
import {colors} from '../../Styles/UniversalStyle';
import {academicLevel} from '../../Utils/academicLevel';
import {departmentList} from '../../Utils/departmentList';
import {genderList} from '../../Utils/genderList';

const Register = ({navigation}) => {
  const [openDepartment, setOpenDepartment] = useState(false);
  const [department, setDepartment] = useState(null);
  const [openLevel, setOpenLevel] = useState(false);
  const [level, setLevel] = useState(null);
  const [openGender, setOpenGender] = useState(false);
  const [gender, setGender] = useState(null);
  const [departments, setDepartments] = useState(departmentList);
  const [levels, setLevels] = useState(academicLevel);
  const [genders, setGenders] = useState(genderList);
  const [username, setUsername] = useState('');
  const windowWidth = Dimensions.get('window').width;
  const dispatch = useDispatch();

  let values = {};
  values = {
    ...values,
    username: username,
    department: department,
    level: level,
    gender: gender,
  };

  const handleValidation = () => {
    const {username, department, level, gender} = values;
    if (!username && !department && !level && !gender) {
      Toast.error('Please fill all fields😌!');
      return false;
    }
    if (username.length < 4) {
      Toast.error('Username is too short🤗!');
      return false;
    }
    if (department === null) {
      Toast.error('Please select a department🫣!');
      return false;
    }
    if (level === null) {
      Toast.error('Kindly select a level☺️!');
      return false;
    }
    if (gender === null) {
      Toast.error('Please pick a gender😇!');
      return false;
    } else {
      return true;
    }
  };

  const handleSubmit = () => {
    if (handleValidation()) {
      dispatch(addUser(values));
      navigation.navigate('emailNpassword');
    }
  };

  return (
    <View style={registerStyle.container}>
      <StatusBar backgroundColor={colors.green} />
      <View>
        <Text style={registerStyle.heyText}>Hey there!</Text>
        <Shapes />
      </View>
      <View style={registerStyle.content}>
        <Text style={registerStyle.headerText}>Sign Up</Text>
        <View style={registerStyle.inputContainer}>
          <AntDesign
            name="user"
            color={colors.grey}
            style={registerStyle.inputIcon}
          />
          <TextInput
            placeholder="Username"
            placeholderTextColor={colors.grey}
            style={registerStyle.input}
            selectionColor={colors.black}
            onChangeText={setUsername}
          />
        </View>
        <View style={registerStyle.inputContainer}>
          <MaterialIcon
            name="chair-school"
            color={colors.grey}
            style={registerStyle.inputIcon}
          />
          <DropDownPicker
            open={openDepartment}
            value={department}
            items={departments}
            setOpen={setOpenDepartment}
            setValue={setDepartment}
            setItems={setDepartments}
            style={{
              borderWidth: 2,
              borderColor: colors.grey,
              height: 60,
            }}
            containerStyle={registerStyle.dropdown}
            placeholder={'Department'}
            placeholderStyle={registerStyle.dropdownPlaceholder}
            textStyle={[
              registerStyle.dropdownPlaceholder,
              {color: colors.black},
            ]}
            dropDownContainerStyle={registerStyle.dropdownListContainer}
            showTickIcon={false}
            listItemContainerStyle={{
              marginTop: 10,
            }}
            listMode={'MODAL'}
            modalAnimationType="slide"
            modalTitle="Department"
            modalContentContainerStyle={{
              backgroundColor: colors.green,
            }}
            selectedItemLabelStyle={{
              color: colors.white,
            }}
          />
        </View>
        <View style={registerStyle.inputContainer}>
          <LevelIcon
            name="stacked-bar-chart"
            color={colors.grey}
            style={registerStyle.inputIcon}
          />
          <DropDownPicker
            open={openLevel}
            value={level}
            items={levels}
            setOpen={setOpenLevel}
            setValue={setLevel}
            setItems={setLevels}
            style={{
              borderWidth: 2,
              borderColor: colors.grey,
              height: 60,
            }}
            containerStyle={registerStyle.dropdown}
            placeholder={'Level'}
            placeholderStyle={registerStyle.dropdownPlaceholder}
            textStyle={[
              registerStyle.dropdownPlaceholder,
              {color: colors.black},
            ]}
            dropDownContainerStyle={registerStyle.dropdownListContainer}
            showTickIcon
            listItemContainerStyle={{
              marginTop: 10,
            }}
            listMode={'MODAL'}
            modalAnimationType="slide"
            modalTitle="Level"
            modalContentContainerStyle={{
              backgroundColor: colors.green,
            }}
            TickIconComponent={() => (
              <AntDesign name="check" style={registerStyle.tickIcon} />
            )}
            tickIconContainerStyle={registerStyle.tickIconContainer}
          />
        </View>
        <View style={registerStyle.inputContainer}>
          {gender === 'female' ? (
            <GenderIcon
              name="gender-female"
              color={colors.grey}
              style={registerStyle.inputIcon}
            />
          ) : (
            <GenderIcon
              name="gender-male"
              color={colors.grey}
              style={registerStyle.inputIcon}
            />
          )}
          <DropDownPicker
            open={openGender}
            value={gender}
            items={genders}
            setOpen={setOpenGender}
            setValue={setGender}
            setItems={setGenders}
            style={{
              borderWidth: 2,
              borderColor: colors.grey,
              height: 60,
            }}
            containerStyle={registerStyle.dropdown}
            placeholder={'Gender'}
            placeholderStyle={registerStyle.dropdownPlaceholder}
            textStyle={[
              registerStyle.dropdownPlaceholder,
              {color: colors.black},
            ]}
            dropDownContainerStyle={registerStyle.dropdownListContainer}
            showTickIcon
            listItemContainerStyle={{
              marginTop: 10,
            }}
            listMode={'MODAL'}
            modalAnimationType="slide"
            modalTitle="Level"
            modalContentContainerStyle={{
              backgroundColor: colors.green,
            }}
            TickIconComponent={() => (
              <AntDesign name="check" style={registerStyle.tickIcon} />
            )}
            tickIconContainerStyle={registerStyle.tickIconContainer}
          />
        </View>
        <View style={registerStyle.welcomeTextContainer}>
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
            <Text style={registerStyle.registerBtnText}>Next</Text>
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

export default Register;
