import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Constant from '../../utils/Constant';

const NavigateCard = ({icon, cardName, screenName}) => {
  const navigation = useNavigation();

  const switchScreen = screenName => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.rootView}>
      <View style={styles.leftView}>
        <Icon name={icon} size={20} />
        <Text style={styles.title}>{cardName}</Text>
      </View>
      <TouchableOpacity
        style={styles.arrowBtn}
        // onPress={switchScreen(screenName)}
      >
        <Icon name="chevron-right" size={15} color="gray" />
      </TouchableOpacity>
    </View>
  );
};

export default NavigateCard;

const styles = StyleSheet.create({
  rootView: {
    backgroundColor: 'white',
    borderColor: Constant.colors.gray,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 18,
    borderColor: Constant.colors.lightGray,
    borderWidth: 1,
  },
  leftView: {
    flexDirection: 'row',
    color: Constant.colors.black,
  },
  title: {
    marginLeft: 10,
    color: Constant.colors.black,
  },
});
