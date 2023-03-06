import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Constant from '../../utils/Constant';

function AccountScreen() {
  const navigation = useNavigation();

  const showSignInScreen = () => {
    navigation.navigate('SignIn');
  };

  const showSignUpScreen = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.rootView}>
      <TouchableOpacity style={styles.signInBtn} onPress={showSignInScreen}>
        <Text style={styles.signInText}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signInBtn} onPress={showSignUpScreen}>
        <Text style={styles.signInText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

export default AccountScreen;

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signInBtn: {
    margin: 10,
    padding: 10,
    backgroundColor: 'green',
  },
  signInText: {
    color: Constant.colors.white,
  },
});
