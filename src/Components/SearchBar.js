import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import SearchIcon from 'react-native-vector-icons/AntDesign';
import {colors} from '../Styles/UniversalStyle';

const SearchBar = ({
  showSearch = true,
  width,
  inputWidth,
  placeHolder = 'Search for courses',
  keyboardType = 'default',
  inputFontSize,
}) => {
  const [searchInput, setSearchInput] = useState('');

  return (
    <View style={styles.searchSectionWrapper}>
      <View style={[styles.courseSearchWrapper, {width: width}]}>
        {showSearch && (
          <SearchIcon
            name="search1"
            style={styles.iconMRight}
            size={24}
            color={colors.grey}
          />
        )}
        <TextInput
          style={[
            styles.courseSearchInput,
            {width: inputWidth},
            {fontSize: inputFontSize},
          ]}
          value={searchInput}
          keyboardType={keyboardType}
          placeholder={placeHolder}
          placeholderTextColor={colors.grey}
          onChangeText={value => setSearchInput(value)}
        />
      </View>
    </View>
  );
};

export default SearchBar;

export const styles = StyleSheet.create({
  iconMRight: {
    marginRight: 10,
  },
  searchSectionWrapper: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  courseSearchInput: {
    width: '100%',
    height: '100%',
    fontFamily: 'Nunito-Regular',
    color: colors.black,
  },
  courseSearchWrapper: {
    width: '90%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.lightGray,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
});
