import {useState, useEffect} from 'react';
import {Text} from 'react-native';
const Clock = ({color, size}) => {
  const [date, setDate] = useState(new Date());

  const refreshClock = () => {
    setDate(new Date());
  };
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  return (
    <Text style={{color: color, fontSize: size, fontFamily: 'Nunito-Regular'}}>
      {date.toLocaleTimeString('fr-FR')}
    </Text>
  );
};
export default Clock;
