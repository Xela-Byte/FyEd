import React, {useEffect, useState} from 'react';
import {
  Image,
  Pressable,
  PushNotificationIOS,
  StatusBar,
  Text,
  View,
} from 'react-native';
import BellIcon from 'react-native-vector-icons/Entypo';
import FilterIcon from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import Clock from '../../Components/Clock';
import SearchBar from '../../Components/SearchBar';
import {selectAllUserData} from '../../StateManagement/features/auth/userSlice';
import {dashboardStyle} from '../../Styles/DashboardStyle';
import {colors, randomColors} from '../../Styles/UniversalStyle';
import {coursesList} from '../../Utils/courseList';
import CLockIcon from 'react-native-vector-icons/AntDesign';
import BatteryIcon from 'react-native-vector-icons/Feather';
import DeviceInfo from 'react-native-device-info';
import notifee, {AndroidImportance} from '@notifee/react-native';

const Dashboard = () => {
  const [batteryPercent, setBatteryPercent] = useState('');
  const [isCharging, setIsCharging] = useState(false);

  const userData = useSelector(selectAllUserData);
  let greeting = '';
  let time = new Date().getHours();

  if (time >= 0 && time <= 11) {
    greeting = 'Good morning';
  }
  if (time > 11 && time <= 15) {
    greeting = 'Good afternoon';
  }
  if (time > 15 && time <= 21) {
    greeting = 'Good evening';
  }
  if (time > 21 && time <= 23) {
    greeting = 'Good night';
  }

  const username = userData?.username;
  const photo = userData?.profilePhoto.assets[0].uri;
  const welcomeText = `${greeting}`;
  const alternatingText = 'Top your department!';

  useEffect(() => {
    const interval = setInterval(() => {
      DeviceInfo.getBatteryLevel().then(batteryLevel => {
        const percent = parseFloat(batteryLevel).toFixed(2) * 100;
        setBatteryPercent(Math.fround(percent));
      });
    }, 2000);
    const interval2 = setInterval(() => {
      DeviceInfo.isBatteryCharging().then(status => {
        setIsCharging(status);
      });
    }, 50);
    return () => {
      clearInterval(interval);
      clearInterval(interval2);
    };
  }, []);

  const onDisplayNotification = async () => {
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Welcome Channel',
    });
    await notifee.displayNotification({
      title: `Welcome back, ${username}!`,
      body: 'Continue your exciting learning journey',
      android: {
        channelId,
        showTimestamp: true,
        largeIcon: photo,
      },
    });
  };

  useEffect(() => {
    onDisplayNotification();
  }, []);

  return (
    <View style={dashboardStyle.container}>
      <StatusBar backgroundColor={colors.white} />
      <View style={dashboardStyle.notifyIconContainer}>
        <BellIcon name="bell" style={dashboardStyle.notifyIcon} />
      </View>
      <View
        style={{
          paddingHorizontal: 15,
          marginBottom: 5,
          flexDirection: 'row',
          display: 'flex',
          alignItems: 'center',
        }}>
        <CLockIcon
          name="clockcircleo"
          style={{
            marginRight: 10,
          }}
          color={colors.grey}
          size={20}
        />
        <Clock color={'black'} />
      </View>
      {batteryPercent && (
        <View
          style={{
            paddingHorizontal: 15,
            flexDirection: 'row',
            display: 'flex',
            alignItems: 'center',
          }}>
          {isCharging === true ? (
            <BatteryIcon
              name="battery-charging"
              style={{
                marginRight: 10,
              }}
              color={colors.green}
              size={20}
            />
          ) : (
            <BatteryIcon
              name="battery"
              style={{
                marginRight: 10,
              }}
              color={batteryPercent < 15 ? colors.orange : colors.black}
              size={20}
            />
          )}

          <Text
            style={{
              color: colors.black,
              fontFamily: 'Nunito-Regular',
            }}>
            {batteryPercent}%
          </Text>
        </View>
      )}
      <View style={dashboardStyle.content}>
        <View style={dashboardStyle.header}>
          <Image
            source={{
              uri: photo,
            }}
            style={dashboardStyle.avatar}
          />
          <View style={dashboardStyle.onlineBadge} />
          <Text style={dashboardStyle.welcomeText}>
            {welcomeText}, <Text style={{fontWeight: 600}}>{username}</Text>
          </Text>
        </View>
        <View style={dashboardStyle.alternatingTextContainer}>
          <Text style={dashboardStyle.alternatingText}>{alternatingText}</Text>
        </View>
        <View style={dashboardStyle.searchContainer}>
          <View style={dashboardStyle.searchBar}>
            <SearchBar inputFontSize={16} inputWidth={'85%'} />
          </View>
          <Pressable style={dashboardStyle.filter}>
            <FilterIcon name="list-outline" style={dashboardStyle.filterIcon} />
          </Pressable>
        </View>
        <View style={dashboardStyle.courseContainer}>
          <View
            style={{
              flexDirection: 'row',
              display: 'flex',
              alignItems: 'center',
            }}>
            <Text style={dashboardStyle.courseHeaderText}>My courses</Text>
            <Pressable style={{marginLeft: '50%'}}>
              <Text style={[dashboardStyle.courseHeaderText, {fontSize: 14}]}>
                See all
              </Text>
            </Pressable>
          </View>
          <View style={dashboardStyle.courseDisplay}>
            {coursesList.map(course => {
              const {id, courseTitle, courseIcon} = course;

              const randomNumber = Math.floor(
                Math.random() * randomColors.length,
              );

              return (
                <View
                  key={id}
                  style={[
                    dashboardStyle.courseBox,
                    {backgroundColor: randomColors[randomNumber]},
                  ]}>
                  <Text style={dashboardStyle.courseTitle}>{courseTitle}</Text>
                  <Image
                    source={courseIcon}
                    style={dashboardStyle.courseIcon}
                  />
                </View>
              );
            })}
          </View>
        </View>
      </View>
    </View>
  );
};

export default Dashboard;
