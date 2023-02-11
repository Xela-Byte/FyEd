import React, {useState} from 'react';
import {Text, View, Image, Platform, Pressable, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Shapes from '../../Components/Shapes';
import registerStyle from '../../Styles/RegisterStyle';
import {setProfilePictureStyle} from '../../Styles/SetProfilePictureStyle';
import {colors} from '../../Styles/UniversalStyle';
import CameraIcon from 'react-native-vector-icons/EvilIcons';
import {launchImageLibrary} from 'react-native-image-picker';
import {useDispatch} from 'react-redux';
import {setProfilePhoto} from '../../StateManagement/features/auth/userSlice';
import ToastManager, {Toast} from 'toastify-react-native';

const SetProfilePicture = ({navigation}) => {
  const dispatch = useDispatch();
  const windowWidth = Dimensions.get('window').width;

  const createFormData = (photo, body = {}) => {
    const data = new FormData();

    data.append('photo', {
      name: photo.fileName,
      type: photo.type,
      uri: Platform.OS === 'ios' ? photo.uri.replace('file://', '') : photo.uri,
    });

    Object.keys(body).forEach(key => {
      data.append(key, body[key]);
    });

    return data;
  };

  const [photo, setPhoto] = useState(null);

  const handleChoosePhoto = () => {
    launchImageLibrary({noData: true}, response => {
      if (response) {
        setPhoto(response);
      }
    });
  };

  const storePhotoInStorage = () => {
    if (photo) {
      dispatch(setProfilePhoto(photo));
    } else {
      Toast.error('No profile photo set!');
    }
  };

  return (
    <View style={setProfilePictureStyle.container}>
      <View>
        <Text style={registerStyle.heyText}>Hey there!</Text>
        <Shapes />
      </View>
      <View style={setProfilePictureStyle.content}>
        <View style={setProfilePictureStyle.headerTextContainer}>
          <Text style={setProfilePictureStyle.headerText}>
            "A picture is worth a thousand words - make yours count!"
          </Text>
        </View>
        <View style={setProfilePictureStyle.setterContainer}>
          <LinearGradient
            start={{x: 0.0, y: 0.25}}
            end={{x: 0.5, y: 1.0}}
            locations={[0, 0.75]}
            colors={[colors.green, colors.deepGreen]}
            style={[
              setProfilePictureStyle.setterBG,
              setProfilePictureStyle.setterBG1,
            ]}
          />
          <LinearGradient
            start={{x: 0.0, y: 0.25}}
            end={{x: 0.5, y: 1.0}}
            locations={[0, 0.75]}
            colors={[colors.deepGreen, colors.green]}
            style={[
              setProfilePictureStyle.setterBG,
              setProfilePictureStyle.setterBG2,
            ]}
          />
          <Pressable
            style={setProfilePictureStyle.iconContainer}
            onPress={() => {
              handleChoosePhoto();
            }}>
            {photo && (
              <>
                <Image
                  source={{uri: photo.assets[0].uri}}
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: 25,
                  }}
                />
              </>
            )}
            {!photo && (
              <CameraIcon name="camera" style={setProfilePictureStyle.icon} />
            )}
          </Pressable>
        </View>
        <View
          style={[
            registerStyle.registerBtnContainer,
            {marginTop: 90, paddingTop: 20},
          ]}>
          <Pressable
            style={registerStyle.registerBtn}
            onPress={() => {
              storePhotoInStorage();
            }}>
            <Text style={registerStyle.registerBtnText}>Done!</Text>
          </Pressable>
        </View>
        <View style={[registerStyle.registerBtnContainer, {paddingTop: 20}]}>
          <Pressable style={registerStyle.registerBtn}>
            <Text style={registerStyle.registerBtnText}>Skip</Text>
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

export default SetProfilePicture;
